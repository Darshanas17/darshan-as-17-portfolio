import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPython,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
import { BiLogoTypescript, BiLogoMongodb } from "react-icons/bi";
import {
  SiExpress,
  SiPostman,
  SiMysql,
  SiSqlite,
  SiNpm,
  SiGooglechrome,
  SiGooglecloud,
  // SiTailwindcss,
} from "react-icons/si";

function Skills() {
  return (
    <section id="skills" className="mx-4 lg:mx-20">
      <h4 className="text-4xl font-bold text-center mt-20 dark:text-white">
        Technologies I Use
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mt-8">
        <span className="inline-flex items-center gap-x-2 py-4 px-3 hover:-translate-y-1.5 transition duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
          <FaHtml5 className="text-2xl" /> HTML
        </span>
        <span className="inline-flex items-center gap-x-2 py-4 px-3 hover:-translate-y-1.5 transition duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
          <FaCss3Alt className="text-2xl" /> CSS
        </span>
        <span className="inline-flex items-center gap-x-2 py-4 px-3 hover:-translate-y-1.5 transition duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
          <FaJsSquare className="text-2xl" /> JavaScript
        </span>
        <span className="inline-flex items-center gap-x-2 py-4 px-3 hover:-translate-y-1.5 transition duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
          <BiLogoTypescript className="text-2xl" /> TypeScript
        </span>
        <span className="inline-flex items-center gap-x-2 py-4 px-3 hover:-translate-y-1.5 transition duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
          <FaPython className="text-2xl" /> Python
        </span>
        <span className="inline-flex items-center gap-x-2 py-4 px-3 hover:-translate-y-1.5 transition duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
          <FaReact className="text-2xl" /> React
        </span>
        <span className="inline-flex items-center gap-x-2 py-4 px-3 hover:-translate-y-1.5 transition duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
          <SiExpress className="text-2xl" /> Express
        </span>
        <span className="inline-flex items-center gap-x-2 py-4 px-3 hover:-translate-y-1.5 transition duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
          <FaNodeJs className="text-2xl" /> NodeJS
        </span>
        <span className="inline-flex items-center gap-x-2 py-4 px-3 hover:-translate-y-1.5 transition duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
          <FaGitAlt className="text-2xl" /> Git
        </span>
        <span className="inline-flex items-center gap-x-2 py-4 px-3 hover:-translate-y-1.5 transition duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
          <FaGithub className="text-2xl" /> GitHub
        </span>
        <span className="inline-flex items-center gap-x-2 py-4 px-3 hover:-translate-y-1.5 transition duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
          <SiPostman className="text-2xl" /> Postman
        </span>
        <span className="inline-flex items-center gap-x-2 py-4 px-3 hover:-translate-y-1.5 transition duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
          <BiLogoMongodb className="text-2xl" /> MongoDB
        </span>
        <span className="inline-flex items-center gap-x-2 py-4 px-3 hover:-translate-y-1.5 transition duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
          <SiMysql className="text-2xl" /> MySQL
        </span>
        <span className="inline-flex items-center gap-x-2 py-4 px-3 hover:-translate-y-1.5 transition duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
          <SiSqlite className="text-2xl" /> SQLite
        </span>
        <span className="inline-flex items-center gap-x-2 py-4 px-3 hover:-translate-y-1.5 transition duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
          <FaBootstrap className="text-2xl" /> Bootstrap
        </span>
        {/* <span className="inline-flex items-center gap-x-2 py-4 px-3 hover:-translate-y-1.5 transition duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
          <SiTailwindcss className="text-2xl" /> Tailwind CSS
        </span> */}
        <span className="inline-flex items-center gap-x-2 py-4 px-3 hover:-translate-y-1.5 transition duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
          <SiNpm className="text-2xl" /> NPM
        </span>
        <span className="inline-flex items-center gap-x-2 py-4 px-3 hover:-translate-y-1.5 transition duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
          <SiGooglechrome className="text-2xl" /> Google DevTools
        </span>
        <span className="inline-flex items-center gap-x-2 py-4 px-3 hover:-translate-y-1.5 transition duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
          <SiGooglecloud className="text-2xl" /> Google Cloud
        </span>
      </div>
    </section>
  );
}

export default Skills;
