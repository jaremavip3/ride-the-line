// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-white py-16 px-8 md:px-16">
      {/* Main footer content */}
      <div className="max-w-4xl mx-auto mb-12">
        {/* Two-column layout like ONBOARD */}
        <div className="flex flex-col md:flex-row mb-12">
          <div className="md:w-1/5 mb-6 md:mb-0">
            <h3 className="text-red-600 text-2xl font-semibold uppercase tracking-wider">Connect</h3>
          </div>

          <div className="md:w-4/5">
            <div className="flex flex-col  md:flex-row md:flex-wrap gap-y-6 md:gap-x-8">
              {/* Links with ONBOARD-style hover effects */}
              <a href="#" className="group relative inline-block text-black text-xl uppercase font-bold tracking-wide">
                CONTACT
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 group-hover:bg-black transition-colors duration-300"></span>
              </a>

              <a href="#" className="group relative inline-block text-black text-xl uppercase font-bold tracking-wide">
                FACEBOOK
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 group-hover:bg-black transition-colors duration-300"></span>
              </a>

              <a href="#" className="group relative inline-block text-black text-xl uppercase font-bold tracking-wide">
                INSTAGRAM
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 group-hover:bg-black transition-colors duration-300"></span>
              </a>

              <a href="#" className="group relative inline-block text-black text-xl uppercase font-bold tracking-wide">
                TWITTER (X)
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 group-hover:bg-black transition-colors duration-300"></span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright section with logo */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-200">
          <span className="text-black text-lg mb-4 md:mb-0">Ihor Volochii 2025</span>

          <div className="text-lg font-bold uppercase tracking-wide">
            Ride the <span className="text-red-600">LINE...</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
