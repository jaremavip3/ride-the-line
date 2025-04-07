export default function Overview() {
  return (
    <section className="px-6 py-16 lg:py-24 bg-[#282A25]">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-black text-red-600 tracking-wide">OVERVIEW</h2>
        </div>

        <div className="relative">
          <p className="text-pretty text-lg leading-relaxed tracking-wide text-gray-300 md:text-center font-medium">
            A daring and deeply human <span className="font-semibold">Road movie</span>. In the darkest times, while
            being in the worst shapes of their life, two desperate friends decided to cycle
            <span className="text-red-600 font-bold"> 1,500 km </span>
            along the entire front line in Ukraine, through liberated villages and towns, with a charitable
            purpose.World premiere at the Kyiv International Film Festival Molodist.
          </p>

          {/* <p className="text-pretty text-lg leading-relaxed tracking-wide text-gray-600 mt-6 md:text-center font-medium">
            This movie tells the impressive stories of the people they meet on their way and, finally, the terrible
            consequences of the war, which turned into an experience that will undoubtedly be etched in their memory for
            a lifetime.
          </p>

          <p className="text-pretty text-lg leading-relaxed tracking-wide text-gray-600 mt-6 md:text-center font-medium">
            On top of that de-occupied, but still mined territories, prepared many surprises for the two daredevils on
            <span className="italic"> the line of war</span>, obscurity and longing for victory.
          </p> */}
          {/* Decorative line */}
          <div className="h-0.5 w-30 bg-red-500/50 mx-auto my-12"></div>
          <h2 className="text-3xl lg:text-4xl font-black text-red-600 tracking-wide text-center mb-8">TRAILER</h2>
          <div className="relative block w-full pb-[56.25%] ">
            <iframe
              className="absolute top-0 left-0"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/rH3pJvfLfVc?si=XsSLZ05uKH82Icja&amp;controls=1&vq=hd1080"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      {/* Decorative line */}
      <div className="h-0.5  w-11/12 bg-red-500/50 mx-auto mt-6 "></div>
      {/* Sponsors */}
      <div className="mt-8">
        <h3 className="text-xl font-medium text-gray-200 text-center mb-4 mx-8 ">Supported by</h3>
        <div className="grid grid-cols-2 gap-8  sm:gap-12 md:grid-cols-3 lg:flex lg:flex-wrap lg:justify-center lg:gap-8">
          <div className="flex justify-center items-center">
            <img
              src="/sponsors/gorgany_logo.svg"
              alt="Gorgany"
              className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all flex justify-center items-center"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src="/sponsors/turbat_logo.svg"
              alt="Turbat"
              className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all "
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src="/sponsors/aid-for-artists_logo.jpg"
              alt="Aid for Artists"
              className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src="/sponsors/can-ukr-foundation_logo.png"
              alt="Canada-Ukraine Foundation"
              className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src="/sponsors/james-cook_logo.png"
              alt="James Cook"
              className="h-15 w-auto object-contain grayscale hover:grayscale-0 transition-all"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src="/sponsors/svi_logo.png"
              alt="SVI"
              className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src="/sponsors/ukrainian-arts-to_logo.png"
              alt="Ukrainian Arts Toronto"
              className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src="/sponsors/velo-planeta_logo.png"
              alt="Velo Planeta"
              className="h-11 w-auto object-contain grayscale hover:grayscale-0 transition-all"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
