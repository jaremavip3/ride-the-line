export default function Overview() {
  return (
    <section className="px-6 py-16 lg:py-24 bg-[#282A25]">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-center mb-10">
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
          <div className="relative block w-full pb-[56.25%] mt-20">
            <iframe
              className="absolute top-0 left-0"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/rH3pJvfLfVc?si=XsSLZ05uKH82Icja&amp;controls=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>

          {/* Декоративна лінія внизу */}
          <div className="h-0.5 w-30 bg-red-500/50 mx-auto mt-10"></div>
        </div>
      </div>
    </section>
  );
}
