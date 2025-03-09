import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe} from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import { IoDesktop } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiMinds } from "react-icons/si";

// Features Data
export const featuresData = [
  {
    id: 1,
    icon: <AiFillAppstore/>,
    title: "Android App Development",
    des: "Expert in cross-platform android development using Flutter, with Backend-as-a-Service (BaaS) platforms like Firebase, Node. js with Express. js"
  },
  {
    id: 2,
    icon: <FaReact />,
    title: "Web Development",
    des: "Proficient in MERN stack web development, creating dynamic and responsive web applications.",
  },
  {
    id: 3,
    icon: <IoDesktop />,
    title: "Desktop Applications",
    des: "Skilled in .NET C#, MS-SQL, WPF, and WinForms for robust desktop applications.",
  },
  {
    id: 4,
    icon: <FaMobile />,
    title: "Mobile Applications",
    des: "Specialize in Flutter-based mobile development, leveraging Node.js and databases such as Firebase, MongoDB, and SQL.",
  },
  {
    id: 5,
    icon: <SiAntdesign />,
    title: "ASP.Net Development",
    des: "ASP.NET backend developer, specializing in C# and databases like SQL Server, and PostgreSQL using Entity Framework Core for efficient data management.",
  },
  {
    id: 6,
    icon: <SiMinds />,
    title: "Machine Learning",
    des: "Solve problems using both regression and classification models using libraries like pandas, TensorFlow, and Scikit-Learn.",
  },
];
