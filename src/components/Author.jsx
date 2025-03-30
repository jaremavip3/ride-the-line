import author_image from "../../public/ride-the-line_author.jpg";
import Image from "next/image";

export default function Author() {
  return (
    <section className="px-6 py-16 lg:py-24 bg-white text-pretty">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-black text-red-600 tracking-wide">DIRECTOR</h2>
        </div>

        {/* Фото і біографія */}
        <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
          {/* Фото режисера */}
          <div className="w-48 h-48 md:w-56 md:h-56 overflow-hidden rounded-full border-3 border-red-500/85 flex-shrink-0">
            <Image src={author_image} alt="Ihor Volochii" />
          </div>

          {/* Біографія */}
          <div>
            <h3 className="text-xl font-bold mb-4 md:text-left text-center">
              Director Biography - <span className="text-red-600">Ihor Volochii</span>
            </h3>
            <p className="text-pretty text-lg leading-relaxed tracking-wide text-gray-600 font-medium">
              Ihor Volochii is a 34-year-old avid cyclist, sports and adventure filmmaker from Ukraine. With the
              beginning of the full-scale invasion Ihor is actively involved in volunteering.
            </p>
          </div>
        </div>

        {/* Заява режисера */}
        <div className="relative">
          <h3 className="text-xl font-bold mb-4 md:text-center text-center">Director Statement</h3>
          <p className="text-pretty text-lg leading-relaxed tracking-wide text-gray-600 md:text-center font-medium">
            When I first thought about making videos as a profession I supposed that it will teach me to see all the
            best in the world at different angles. But nowadays reality is that I pass through the dilapidated towns and
            villages of my country and listen to stories that bring goosebumps and tears to my eyes.
          </p>

          <p className="text-pretty text-lg leading-relaxed tracking-wide text-gray-600 mt-6 md:text-center font-medium">
            Believe me, I would prefer not to make movies like this and ride my bike somewhere in the middle of Alps
            rather than in the middle of ruined buildings. But these are Ukrainian realities today.
          </p>

          <p className="text-pretty text-lg leading-relaxed tracking-wide text-gray-600 mt-6 md:text-center font-medium">
            I'm really addicted to cycling, but even more I{" "}
            <span className="text-red-600 font-bold">love my country</span>, and this film was born out of this love.
          </p>

          {/* Декоративна лінія внизу */}
          <div className="h-0.5 w-30 bg-red-500/50 mx-auto mt-10"></div>
        </div>
      </div>
    </section>
  );
}
