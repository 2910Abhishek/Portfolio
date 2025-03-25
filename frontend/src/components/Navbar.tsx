import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-purple-600">
          Abhishek Parmar
        </Link>
        <div className="space-x-4">
          <Link href="/" className="text-gray-600 hover:text-purple-600">
            Home
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-purple-600">
            About
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-purple-600">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}