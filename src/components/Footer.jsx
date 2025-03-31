export default function Footer() {
  return (
    <footer className="bg-white mt-10">
      <div className="h-0.5 w-full bg-red-500/50 mx-auto "></div>
      <div className=" px-6 lg:px-10 py-6 flex flex-col gap-4 items-center justify-center ">
        <span className="text-2xl text-black decoration-red-600 underline underline-offset-3">CONTACT</span>
        <span className="text-2xl text-black decoration-red-600 underline underline-offset-3">FACEBOOK</span>
        <span className="text-2xl text-black decoration-red-600 underline underline-offset-3">INSTAGRAM</span>
        <span className="text-2xl text-black decoration-red-600 underline underline-offset-3">TWITTER (X)</span>
      </div>
      <div className="flex flex-row justify-around items-center pt-4">
        <span className="text-lg ">Ihor Volochii 2025</span>
        <div className=" text-lg font-extrabold ">
          Ride the <span className=" text-red-600/85">LINE...</span>
        </div>
      </div>
    </footer>
  );
}
