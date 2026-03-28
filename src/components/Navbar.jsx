const Navbar = () => {
  return (
    <div className="navbar bg-white shadow-sm px-6 lg:px-16">
      {/* Logo */}
      <div className="flex-1">
        <a className="text-xl font-bold text-black">CS — Ticket System</a>
      </div>

      {/* Menu */}
      <div className="flex-none hidden lg:flex">
        <ul className="menu menu-horizontal gap-2 px-1 font-medium text-gray-600">
          <li><a>Home</a></li>
          <li><a>FAQ</a></li>
          <li><a>Changelog</a></li>
          <li><a>Blog</a></li>
          <li><a>Download</a></li>
          <li><a>Contact</a></li>
        </ul>
       <button className="btn text-white border-none ml-4 bg-linear-to-br from-violet-600 to-purple-400">
  + New Ticket
</button>
      </div>

      {/* Mobile Menu */}
      <div className="flex-none lg:hidden">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-white rounded-box w-52">
            <li><a>Home</a></li>
            <li><a>FAQ</a></li>
            <li><a>Changelog</a></li>
            <li><a>Blog</a></li>
            <li><a>Download</a></li>
            <li><a>Contact</a></li>
           <button className="btn text-white border-none ml-4 bg-linear-to-br from-violet-600 to-purple-400">
  + New Ticket
</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;