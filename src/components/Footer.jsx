// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-white py-16 px-8 md:px-16">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto mb-12">
        {/* Two-column layout like ONBOARD */}
        <div className="flex flex-col md:flex-row mb-12">
          <div className="flex flex-row flex-wrap justify-between w-full">
            <h3 className="text-red-600 text-xl font-semibold uppercase tracking-wider">Connect</h3>

            <div className="flex flex-col md:flex-row md:flex-nowrap gap-y-6 md:gap-x-8 text-black font-bold text-lg uppercase">
              {/* Links with ONBOARD-style hover effects */}
              <a href="#" className="group relative inline-block    tracking-wide">
                CONTACT
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 group-hover:bg-black transition-colors duration-300"></span>
              </a>

              <a href="#" className="group relative inline-block  tracking-wide">
                FACEBOOK
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 group-hover:bg-black transition-colors duration-300"></span>
              </a>

              <a href="#" className="group relative inline-block    tracking-wide">
                INSTAGRAM
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 group-hover:bg-black transition-colors duration-300"></span>
              </a>

              <a href="#" className="group relative inline-block   tracking-wide">
                TWITTER(X)
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 group-hover:bg-black transition-colors duration-300"></span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright section with logo */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t text-lg  border-gray-200">
          <span className="  mb-4 md:mb-0">Ihor Volochii 2025</span>

          <div className=" font-bold uppercase tracking-wide">
            Ride the <span className="text-red-600">LINE...</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
