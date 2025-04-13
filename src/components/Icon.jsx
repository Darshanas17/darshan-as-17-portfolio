const Icon = ({ name, size = 30, alt = "", className = "" }) => {
  const iconSrc = `icons/${name}.png`;

  return (
    <img
      src={iconSrc}
      alt={alt || name}
      className={className}
      style={{ width: `${size}px`, height: `${size}px` }}
    />
  );
};

export default Icon;
