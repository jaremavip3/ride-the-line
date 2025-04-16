// components/Footer.jsx
export default function Footer() {
  return (
    <>
      {/* Background noise */}
      <svg className="hidden ">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" stitchTiles="stitch" numOctaves="3" />
        </filter>
      </svg>
      <footer id="#footer" className="bg-white py-16 px-8 md:px-16 overflow-hidden relative">
        {/* Grain Overlay */}
        <div
          className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-black"
          style={{ filter: "url(#noiseFilter)" }}
        ></div>
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto mb-12">
          {/* Two-column layout like ONBOARD */}
          <div className="flex flex-col md:flex-row mb-12">
            <div className="flex flex-row flex-wrap justify-between w-full">
              <h3 className="text-red-600 text-xl font-semibold uppercase tracking-wider">Connect</h3>

              <div className="flex flex-col md:flex-row md:flex-nowrap gap-y-6 md:gap-x-8 text-black font-bold text-lg uppercase">
                {/* Links with ONBOARD-style hover effects */}
                <a href="#" className="swipe-socials relative inline-block w-max tracking-wide">
                  <span className="relative z-10 px-1 transition-all duration-200 hover:text-white">CONTACT</span>
                  <span className="absolute left-0 -bottom-[2px] w-full  h-[3px] transition-all bg-red-600"></span>
                </a>

                <a
                  href="https://www.facebook.com/share/16P3eoKN8k/?mibextid=wwXIfr"
                  className="swipe-socials relative inline-block w-max tracking-wide"
                >
                  <span className="relative z-10 px-1 transition-all duration-200 hover:text-white">FACEBOOK</span>
                  <span className="absolute left-0 -bottom-[2px] w-full  h-[3px] transition-all bg-red-600"></span>
                </a>

                <a
                  href="https://www.instagram.com/volo4iy?igsh=ZG1hc2xsbWZpZWUy"
                  className="swipe-socials relative inline-block w-max tracking-wide"
                >
                  <span className="relative z-10 px-1 transition-all duration-200 hover:text-white">INSTAGRAM</span>
                  <span className="absolute left-0 -bottom-[2px] w-full h-[3px] transition-all bg-red-600"></span>
                </a>
                <a href="#" className="swipe-socials relative inline-block w-max tracking-wide">
                  <span className="relative z-10 px-1 transition-all duration-200 hover:text-white">TWITTER</span>
                  <span className="absolute left-0 -bottom-[2px] w-full h-[3px] transition-all bg-red-600"></span>
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
    </>
  );
}
