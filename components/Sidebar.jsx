import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "@/public/logo.jpg";

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

const navLinks = [
  { name: "Repositories", path: "/repositories", icon: <FolderOpen size={18} /> },
  { name: "All Code Review", path: "/code-review", icon: <CodeXml size={18} /> },
  { name: "Cloud Security", path: "/cloud-security", icon: <Cloud size={18} /> },
  { name: "How to Use", path: "/how-to-use", icon: <Laptop size={18} /> },
  { name: "Settings", path: "/settings", icon: <Settings size={18} /> },
];

const footerLinks = [
  { name: "Support", path: "/support", icon: <Phone size={18} /> },
  { name: "Logout", path: "/logout", icon: <LogOut size={18} /> },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full overflow-y-auto">
      {/* Top Section */}
      <div>
        <div className="flex items-center p-4">
          <Image src={Logo} alt="logo" width={40} height={40} />
          <h2 className="ml-2 text-2xl font-medium text-gray-800">CodeAnt AI</h2>
        </div>
        <div className="flex items-center justify-between bg-gray-100 px-4 py-2 border rounded-lg mx-4 mb-6">
          <span className="truncate text-base font-medium text-gray-800">
            UtkarshDhairyPa...
          </span>
          <ChevronDown size={18} className="text-gray-700" />
        </div>

        {/* Navigation Links */}
        <ul className="space-y-2">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.path}
                className={`flex items-center gap-2 px-4 py-2 rounded font-medium ${
                  pathname === link.path
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-100 text-gray-800"
                }`}
              >
                {link.icon}
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer Links */}
      <div className="p-4 mt-auto">
        <ul className="space-y-2">
          {footerLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.path}
                className="flex items-center gap-2 px-4 py-2 rounded font-medium hover:bg-gray-100 text-gray-800"
              >
                {link.icon}
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
