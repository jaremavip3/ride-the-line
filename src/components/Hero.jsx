import { getImageProps } from "next/image";
import mobile_background from "../../public/ride-the-line_mobile.jpg";
import desktop_background from "../../public/ride-the-line_desktop.jpg";

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
  // getImageProps has inside props object and props object has inside srcSet property
  // srcSet property is a string with the format "url1 1x, url2 2x"
  // This is how we extract the srcSet property. Alternatively we could have wrote
  // const result = getImageProps(...);
  // const srcSet = result.props.srcSet;О
  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({ alt: "desktop backgroudn image", width: 1920, height: 1080, src: desktop_background });
  const {
    props: { srcSet: mobileSrcSet },
  } = getImageProps({ alt: "desktop backgroudn image", src: mobile_background });

  const desktopBackgroundImage = getBackgroundImage(desktopSrcSet);
  const mobileBackgroundImage = getBackgroundImage(mobileSrcSet);
  const style = {
    height: "100vh",
    width: "100%",
    minWidth: "320px",
    backgroundPosition: "top center",

    backgroundRepeat: "no-repeat",
  };
  const customCSS = `
    @media (min-width: 624px) {
      .responsive-bg {
       background-size: 100vw 110vh;
        background-image: ${desktopBackgroundImage};
        
      }
    }
    
    @media (max-width: 623px) {
      .responsive-bg {
     
        background-image: ${mobileBackgroundImage};
         background-size: auto 90vh;
      }
       
    }
  `;

  return (
    <>
      <style>{customCSS}</style>
      <section className="responsive-bg px-10 pt-8 pb-6 text-white flex flex-col justify-between" style={style}>
        <div className="flex flex-row justify-between items-center font-bold text-xl gap-30 text-center lg:text-4xl lg:font-extrabold  ">
          <span className="text-red-500/85  rounded-2xl bg-white/25 p-1 lg:p-3 ">ABOUT THE FILM</span>
          <span className="text-red-500/85  rounded-2xl bg-white/25 p-1 lg:p-3">HOST A SCREENING</span>
        </div>
        <div className="flex-grow"></div>

        <div className="flex flex-col justify-center items-center text-center gap-22 lg:flex-row lg:justify-between lg:mb-8">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-white ">
            Ride the <span className="text-red-500/85 underline">Line</span>
          </h1>
          <button className="lg:px-12 lg:py-4 lg:border-white lg:text-white lg:shadow-[0_0_0_2px_#ffffff_inset] underline underline-offset-3 shadow-[0_0_0_3px_#000000_inset] px-9 py-3 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
            WATCH THE TRAILER
          </button>
        </div>
      </section>
    </>
  );
}
