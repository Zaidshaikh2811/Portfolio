import { FaFacebookF, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";

export const links = [
  {
    logo: <FaFacebookF />,
    link: "https://www.facebook.com/profile.php?id=100015609393336",
  },
  {
    logo: <FaLinkedin />,
    link: "https://www.linkedin.com/in/zaid-shaikh-18a307239/",
  },
  {
    logo: <FaTwitter />,
    link: "https://twitter.com/zaidshaikh2811",
  },
  {
    logo: <FaGithub />,
    link: "https://github.com/Zaidshaikh2811",
  },
];

export const Personal = [
  {
    name: "Phone",
    Logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
      >
        <path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-200v120h400v-120H280Zm200 100q17 0 28.5-11.5T520-180q0-17-11.5-28.5T480-220q-17 0-28.5 11.5T440-180q0 17 11.5 28.5T480-140ZM280-320h400v-400H280v400Zm0-480h400v-40H280v40Zm0 560v120-120Zm0-560v-40 40Z" />
      </svg>
    ),
    value: "+44 7834 628 888",
  },
  {
    name: "Email",
    Logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
      >
        <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
      </svg>
    ),
    value: "mailto:zshaikhlab@gmail.com",
  },
  {
    name: "location",
    Logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
      >
        <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
      </svg>
    ),
    value: "Solapur,Saat Rasta",
  },
];
