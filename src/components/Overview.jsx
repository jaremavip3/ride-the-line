import Image from "next/image";
import Gorgany_logo from "../../public/sponsors/gorgany_logo.svg";
import Turbat_logo from "../../public/sponsors/turbat_logo.svg";
import CanUkrFoundation_logo from "../../public/sponsors/can-ukr-foundation_logo.png";
import AidForArtists_logo from "../../public/sponsors/aid-for-artists_logo.jpg";
import VeloPlaneta_logo from "../../public/sponsors/velo-planeta_logo.png";
import SVI_logo from "../../public/sponsors/svi_logo.png";
import JamesCook_logo from "../../public/sponsors/james-cook_logo.png";
import UkrainianArtsTo_logo from "../../public/sponsors/ukrainian-arts-to_logo.png";

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
          <div className="h-0.5 w-52 bg-red-500/50 mx-auto my-12"></div>
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
      <div className="mt-8 ">
        <h3 className="text-xl font-medium text-gray-200 text-center mb-4 mx-8 ">Supported by</h3>
        <div className="flex flex-col gap-8 md:flex-row md:justify-center md:flex-wrap ">
          {/* first row */}
          <div className="flex flex-row justify-between h-14 md:gap-8 ">
            <div className="h-full relative">
              <Image src={Gorgany_logo} alt="Gorgany" className="w-full h-full object-contain" />
            </div>
            <div className="h-full relative">
              <Image src={Turbat_logo} alt="Turbat" className="w-full h-full object-contain" />
            </div>
          </div>
          {/* second row */}
          <div className="flex flex-row justify-between h-14 md:gap-8 ">
            <div className="h-full relative">
              <Image
                src={CanUkrFoundation_logo}
                alt="Canada-Ukraine Foundation"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="h-full relative">
              <Image src={AidForArtists_logo} alt="Aid for Artists" className="w-full h-full object-contain" />
            </div>
          </div>
          {/*  third row */}
          <div className="flex justify-between h-16 gap-8  md:h-14 md:gap-8">
            <div className="h-full relative justify-self-end  md:justify-self-auto basis-4/6 md:basis-auto">
              <Image
                src={VeloPlaneta_logo}
                alt="Velo Planeta"
                className="object-left md:object-center w-full h-full object-contain"
              />
            </div>

            <div className="h-full relative">
              <Image src={SVI_logo} alt="SVI" className="w-full h-full object-contain" />
            </div>
          </div>
          {/* fourth row */}
          <div className="flex justify-center gap-8 h-22 md:h-14 md:gap-8">
            <div className="h-full relative">
              <Image src={JamesCook_logo} alt="James Cook" className="w-full h-full object-contain" />
            </div>
            <div className="h-full relative">
              <Image src={UkrainianArtsTo_logo} alt="Ukrainian Arts Toronto" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
