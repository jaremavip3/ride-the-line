import { getImageProps } from "next/image";
import desktop_background from "../../public/test_new.jpg";
import mobile_background from "../../public/test_new_mobile.jpg";
import test_background from "../../public/test_background.jpg";

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

      <section className="relative responsive-bg text-white " style={style}>
        {/* Button on smaller screens */}
        <div className="w-full absolute top-8/12  flex justify-center z-10 sm:hidden">
          <button className="  bg-red-600 p-0.5 hover:bg-red-700 transition-colors uppercase ">
            Watch the trailer
          </button>
        </div>
        {/* Header Text */}
        <div className="absolute  inset-0 flex items-center  ">
          <div className="container mx-auto px-6 md:px-12 lg:mx-16  ">
            <div className=" md:w-1/2 lg:w-1/2 leading-[0.9] tracking-[-0.02em] text-7xl sm:text-9xl lg:text-[9rem] flex">
              <div className="sm:bg-transparent rounded-lg ">
                <span className="font-thin drop-shadow-2xl">RIDE</span> <br />
                <span className="font-medium drop-shadow-2xl">THE</span> <br />
                <span className="text-red-600/85 font-black">LINE</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-1/12 w-full ">
          <div className="container mx-auto px-3 md:px-12 lg:px-16 sm:text-base md:text-lg lg:text-xl xl:text-2xl  ">
            <div className=" flex gap-10 md:gap-14 lg:gap-20 text-white uppercase  justify-center items-center">
              <a href="#overview" className="hover:underline">
                About the film
              </a>
              <button
                href="#trailer"
                className="bg-red-600 p-0.5 hover:bg-red-700 transition-colors uppercase hidden  sm:block"
              >
                Watch the trailer
              </button>
              <a href="#author" className="hover:underline">
                Host a screening
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
