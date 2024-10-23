import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 bg-white shadow-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-indigo-600">Rezime</Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/careers">Careers</NavLink>
              <NavLink to="/certificate-validation">Validate Certificate</NavLink>
            </div>
          </div>
          <div className="hidden md:block">
            <a target='_blank' href="https://forms.gle/KX16pa8iL7LDRs826" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105">
              Invite Us
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 hover:text-gray-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink to="/">Home</MobileNavLink>
            <MobileNavLink to="/careers">Careers</MobileNavLink>
            <MobileNavLink to="/certificate-validation">Validate Certificate</MobileNavLink>
          </div>
          <div className="px-4 py-3">
            <a target='_blank' href='https://forms.gle/KX16pa8iL7LDRs826' className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105">
              Invite Us
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

function NavLink({ to, children }) {
  return (
    <Link to={to} className="text-gray-800 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out">
      {children}
    </Link>
  )
}

function MobileNavLink({ to, children }) {
  return (
    <Link to={to} className="text-gray-800 hover:bg-indigo-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out">
      {children}
    </Link>
  )
}