import { useEffect, useState } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [profiles, setProfiles] = useState([]);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-in-out" });

    fetch("http://localhost:5000/api/profiles")
      .then(res => res.json())
      .then(data => setProfiles(data));

    const handleScroll = () => {
      if (window.scrollY > 400) setShowScroll(true);
      else setShowScroll(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-10">
      {/* Top Logos */}
      <div
        className="w-full max-w-[1350px] flex justify-between items-center mb-12 px-8"
        data-aos="fade-down"
      >
        <img src="/images/prme.png" alt="PRME" className="h-20 w-auto" />
        <img src="/images/aacsb.png" alt="AACSB" className="h-25 w-auto" />
      </div>

      {/* Profile Cards */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-20 place-items-center"
        data-aos="fade-up"
      >
        {profiles.map((profile, index) => (
          <Link href={`/profile/${profile.id}`} key={profile.id}>
            <div
              data-aos="zoom-in"
              data-aos-delay={index * 120}
              className="w-[355px] h-[446px] rounded-[20px] overflow-hidden bg-[#F7F7F7] flex flex-col items-center cursor-pointer transition-transform hover:scale-[1.03] shadow-sm hover:shadow-md"
            >
              <div className="bg-[#f38841] w-full h-[222px] relative">
                <div className="absolute left-1/2 -bottom-[87px] transform -translate-x-1/2 w-[175px] h-[180px] rounded-full overflow-hidden ">
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="pt-[100px] pb-6 text-center">
                <h2 className="text-[24px] font-semibold text-[#222] leading-tight">
                  {profile.name}
                </h2>
                <div className="flex justify-center mt-3">
                  <p className="text-[15px] text-gray-600 bg-[#F7F7F7] px-4 py-[3px] rounded-full border border-[#F7F7F7]">
                    {profile.gender} | {profile.age} | {profile.pronouns}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#f47b2a] text-white w-12 h-12 rounded-full shadow-md flex items-center justify-center text-[20px] hover:scale-110 transition-all"
          data-aos="zoom-in"
        >
          ↑
        </button>
      )}
    </div>
  );
}
