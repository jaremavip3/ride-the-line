import { getImageProps } from "next/image";
import desktop_background from "../../public/test_new.jpg";
import mobile_background from "../../public/test_new_mobile.jpg";

function getBackgroundImage(srcSet = "") {
  const imageSet = srcSet
    .split(", ")
    .map((str) => {
      const [url, dpi] = str.split(" ");
      return `url("${url}") ${dpi}`;
    })
    .join(", ");
  return `image-set(${imageSet})`;
}

export default function Hero() {
  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({ alt: "desktop backgroudn image", src: desktop_background });
  const {
    props: { srcSet: mobileSrcSet },
  } = getImageProps({ alt: "mobile backgroudn image", src: mobile_background });

  const desktopBackgroundImage = getBackgroundImage(desktopSrcSet);
  const mobileBackgroundImage = getBackgroundImage(mobileSrcSet);
  const style = {
    height: "100vh",
    width: "100%",

    backgroundPosition: "center",

    backgroundRepeat: "no-repeat",
  };
  const customCSS = `
    @media (min-width: 624px) {
      .responsive-bg {
       background-size: cover;
        background-image: ${desktopBackgroundImage};

      }
    }

    @media (max-width: 623px) {
      .responsive-bg {
           background-size: auto 100vh ;
        background-image: ${mobileBackgroundImage};
        background-position: center;
      }

    }
  `;

  return (
    <>
      <style>{customCSS}</style>

      <section className="bg-red-600/85">
        <div className="responsive-bg px-10 pt-8 pb-6 text-white flex flex-col justify-between" style={style}>
          {/* <div className="flex flex-row justify-between items-center font-bold text-xl gap-30 text-center lg:text-5xl lg:font-extrabold  ">
            <span className="text-white  ">ABOUT THE FILM</span>
            <span className="text-white  ">HOST A SCREENING</span>
          </div>
          <div className="flex-grow"></div>

          <div className="flex flex-col justify-center items-center text-center gap-22 lg:flex-row lg:justify-between lg:mb-8">
            <h1 className="text-5xl lg:text-6xl font-extrabold text-white ">
              Ride the <span className="text-red-500/85 underline">Line</span>
            </h1>
            <button className="lg:px-12 lg:py-4 mt-2 lg:border-white lg:text-white lg:shadow-[0_0_0_2px_#ffffff_inset] underline underline-offset-3 shadow-[0_0_0_3px_#000000_inset] px-9 py-3 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
              WATCH THE TRAILER
            </button>
          </div> */}
        </div>
      </section>
    </>
  );
}
