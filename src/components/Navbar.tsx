import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#4f42b5] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo / Title */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-2xl font-extrabold hover:text-[#6b63d1] transition-colors"
            >
              User Management
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="text-white hover:text-[#7f79e0] font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/create"
              className="text-white hover:text-[#7f79e0] font-medium transition-colors"
            >
              Add User
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-1 bg-[#4f42b5]">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block text-white hover:text-[#7f79e0] font-medium transition-colors"
          >
            Home
          </Link>
          <Link
            to="/create"
            onClick={() => setIsOpen(false)}
            className="block text-white hover:text-[#7f79e0] font-medium transition-colors"
          >
            Add User
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
