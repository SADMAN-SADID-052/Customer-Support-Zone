const Footer = () => {
  return (
    <footer className="bg-black text-white mt-16">
      <div className="px-6 lg:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h2 className="text-lg font-bold mb-3">CS — Ticket System</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              We help businesses manage customer support efficiently. Track,
              prioritize, and resolve tickets faster with our smart ticketing
              system built for modern support teams.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="flex flex-col gap-3 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact Sales
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="flex flex-col gap-3 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Products & Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Customer Stories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Download Apps
                </a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-semibold mb-4">Information</h3>
            <ul className="flex flex-col gap-3 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Join Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4">Social Links</h3>
            <ul className="flex flex-col gap-3  text-sm">
              <li className="flex items-center gap-2">
                <span className="bg-white text-black text-md font-bold  rounded-full w-5 h-5 flex items-center justify-center">
                  𝕏
                </span>
                <span className="text-gray-400"> @CS — Ticket System</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-white text-black text-md font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  in
                </span>
                <span className="text-gray-400"> @CS — Ticket System</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-white text-black text-xl font-bold  rounded-full w-5 h-5 flex items-center justify-center">
                  f
                </span>
                <span className="text-gray-400"> @CS — Ticket System</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-white text-black text-md font-bold  rounded-full w-5 h-5 flex items-center justify-center">
                  ✉
                </span>
                <span className="text-gray-400"> support@cst.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 CS — Ticket System. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
