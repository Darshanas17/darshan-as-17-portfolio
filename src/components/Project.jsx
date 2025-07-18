import { useRef, useState, useEffect } from "react";
import { CiLink } from "react-icons/ci";

function Project({ title, description, technologies, link, github }) {
  const _blank = "_blank";

  const iframeWidth = 1280;
  const iframeHeight = 800;

  // Ref to the preview container div
  const containerRef = useRef(null);

  // State for container width
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    function updateWidth() {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Calculate scale dynamically
  const scale = containerWidth ? containerWidth / iframeWidth : 0;

  // Calculate preview height based on scale to keep aspect ratio
  const previewHeight = scale ? iframeHeight * scale : 0;

  return (
    <div className="hover:bg-zinc-100 hover:dark:bg-zinc-900 transition-all duration-300 p-6 md:rounded-xl">
      {/* Preview container */}
      <div
        ref={containerRef}
        style={{
          width: "100%",
          height: previewHeight || "170px", // fallback height
          overflow: "hidden",
          borderRadius: 12,
          border: "1px solid #ccc",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          position: "relative",
          marginBottom: 16,
          backgroundColor: "white",
        }}
      >
        {scale > 0 && (
          <iframe
            src={link}
            title={title}
            style={{
              width: iframeWidth,
              height: iframeHeight,
              transform: `scale(${scale})`,
              transformOrigin: "top left",
              border: "none",
              pointerEvents: "none",
              display: "block",
              position: "absolute",
              top: 0,
              left: 0,
            }}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            loading="lazy"
          />
        )}
      </div>

      {/* Technologies */}
      <div className="flex gap-2 overflow-x-auto py-2">
        {technologies.split(",").map((tech, idx) => (
          <span
            key={idx}
            className="inline-flex items-center py-1.5 px-2.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500"
          >
            {tech.trim()}
          </span>
        ))}
      </div>

      {/* Title */}
      <h3 className="font-bold text-lg text-zinc-700 dark:text-zinc-300 mt-4">
        {title}
      </h3>

      {/* Description */}
      <p className="leading-7 text-zinc-500 dark:text-zinc-300 font-light text-base mt-4">
        {description}
      </p>

      {/* Links */}
      <div className="flex gap-6 text-zinc-600 dark:text-zinc-300 font-medium">
        <a
          href={link}
          target={_blank}
          className="flex gap-2 mt-4 hover:text-red-800 hover:dark:text-red-500 cursor-pointer transition-all duration-300"
          rel="noopener noreferrer"
        >
          <CiLink className="text-2xl self-center" />
          <span className="text-xs self-center">View Project</span>
        </a>
        <a
          href={github}
          target={_blank}
          className="flex gap-2 mt-4 hover:text-red-800 hover:dark:text-red-500 cursor-pointer transition-all duration-300"
          rel="noopener noreferrer"
        >
          <CiLink className="text-2xl self-center" />
          <span className="text-xs self-center">View Github</span>
        </a>
      </div>
    </div>
  );
}

export default Project;
