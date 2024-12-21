import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "@/public/logo.jpg";

// Importing icons from lucide-react
import {
  FolderOpen,
  CodeXml,
  Cloud,
  Laptop,
  Settings,
  Phone,
  LogOut,
  ChevronDown,
} from "lucide-react";

// Navigation Links with Icons
const navLinks = [
  { name: "Repositories", path: "/repositories", icon: <FolderOpen size={18} /> },
  { name: "All Code Review", path: "/code-review", icon: <CodeXml size={18} /> },
  { name: "Cloud Security", path: "/cloud-security", icon: <Cloud size={18} /> },
  { name: "How to Use", path: "/how-to-use", icon: <Laptop size={18} /> },
  { name: "Settings", path: "/settings", icon: <Settings size={18} /> },
];

// Footer Links with Icons
const footerLinks = [
  { name: "Support", path: "/support", icon: <Phone size={18} /> },
  { name: "Logout", path: "/logout", icon: <LogOut size={18} /> },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="fixed top-0 left-0 w-full md:w-60 bg-gray-100 p-4 min-h-screen flex flex-col justify-between">
      {/* Top Section: Logo and User Dropdown */}
      <div>
        {/* Logo */}
        <div className="flex items-center mb-6">
          <Image src={Logo} alt="logo" width={40} height={40} />
          <h2 className="ml-2 text-2xl font-medium text-gray-800">CodeAnt AI</h2>
        </div>

        {/* User Dropdown */}
        <div className="flex items-center justify-between bg-white px-4 py-2 border-gray-900 rounded-lg mb-6">
          <span className="truncate text-base font-medium text-gray-800">
            UtkarshDhairyPa...
          </span>
          <ChevronDown size={18} className="text-gray-700" />
        </div>

        {/* Main Navigation Links */}
        <ul className="space-y-2">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.path}
                className={`flex items-center gap-2 px-4 py-2 rounded font-medium ${
                  pathname === link.path
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-200 text-gray-700"
                }`}
              >
                {link.icon} {/* Icon for each link */}
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer Navigation Links */}
      <div>
        <ul className="space-y-2">
          {footerLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.path}
                className={`flex items-center gap-2 px-4 py-2 rounded font-medium ${
                  pathname === link.path
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-200 text-gray-700"
                }`}
              >
                {link.icon} {/* Icon for each footer link */}
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
