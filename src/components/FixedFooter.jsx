"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import MovingLottie from "./MovingBic";

export default function FixedFooter() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const [showBikeAnimation, setShowBikeAnimation] = useState(true);
  useEffect(() => {}, []);
  // Sample screenings data - replace with your actual data
  const screenings = [
    {
      date: "26 APR",
      country: "CA",
      city: "TORONTO",
      ticketsLink: "https://www.tuff.film/events/ride-the-line",
      infoLink: "https://www.tuff.film/",
    },
  ];
  // Automatically hide the bike animation after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBikeAnimation(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const toggleCalendar = () => {
    if (!isCalendarOpen) {
      setShowBikeAnimation(false);
    }
    setIsCalendarOpen(!isCalendarOpen);

    if (!isCalendarOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  return (
    <div className="relative">
      <div
        className="fixed left-0 right-0 pointer-events-none "
        style={{
          bottom: "50px",
          zIndex: 51,
        }}
      >
        <MovingLottie showAnimation={showBikeAnimation} />
      </div>
      <footer
        className={`fixed bottom-0 left-0 right-0 z-50 bg-white border-t-4 border-red-600 transition-all duration-250 ease-in-out ${
          isCalendarOpen ? "h-screen overflow-auto" : "h-[50px] md:h-[50px]"
        }`}
      >
        {/* Collapsed Footer State */}
        {!isCalendarOpen && (
          <div className="max-w-5xl mx-auto px-4 h-full flex items-center justify-between">
            <div className="flex items-center">
              <span className="hidden md:inline-block font-bold text-black mr-2">NEXT SCREENING:</span>
              <span className="text-black">
                {screenings[0].date} / {screenings[0].country} / {screenings[0].city}
              </span>
            </div>

            <button
              onClick={toggleCalendar}
              className="border border-black px-4 py-1 text-black font-bold text-sm uppercase tracking-wider hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors"
            >
              FULL CALENDAR
            </button>
          </div>
        )}

        {/* Expanded Calendar State */}
        {isCalendarOpen && (
          <div className="w-full  ">
            {/* Header */}
            <div className="border-b-2 border-black flex justify-between items-center py-2 px-4 md:px-8">
              <span className="font-bold uppercase tracking-wider text-lg">Next screenings</span>
              <button
                onClick={toggleCalendar}
                className="border border-black px-4 py-1 text-black font-bold text-sm uppercase tracking-wider hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors"
              >
                Close
              </button>
            </div>

            {/* Screenings List */}
            <ul className="w-full">
              {screenings.map((screening, index) => (
                <li
                  key={index}
                  className="border-b-2 border-black py-3 px-4 md:px-8 flex flex-col md:flex-row md:items-center md:justify-between"
                >
                  <div className="flex flex-wrap items-center mb-2 md:mb-0">
                    <span className="font-bold mr-2">{screening.date}</span>
                    <span className="mr-2">/ {screening.country} /</span>
                    <span>{screening.city}</span>
                  </div>

                  <div className="flex gap-2">
                    {screening.ticketsLink && (
                      <Link
                        href={screening.ticketsLink}
                        className="border border-black px-3 py-1 text-black font-medium text-sm uppercase tracking-wider hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors"
                      >
                        Tickets
                      </Link>
                    )}

                    {screening.infoLink && (
                      <Link
                        href={screening.infoLink}
                        className="border border-black px-3 py-1 text-black font-medium text-sm uppercase tracking-wider hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors"
                      >
                        More info
                      </Link>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            {/* Coming soon note */}
            <div className="border-b-2 border-black py-3 px-4 md:px-8">
              <p className="font-bold uppercase tracking-wider text-lg">More screenings coming soon...</p>
            </div>
            {/* Footer Note */}
            <div className="absolute bottom-4 w-full  border-t-2 border-black py-2 px-4 md:px-8 text-sm text-center">
              <p className="text-gray-600">For more screenings and updates, follow us on our social media channels.</p>
            </div>
          </div>
        )}
      </footer>
    </div>
  );
}
