export default function RohitProfile() {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center">
            {/* HEADER */}
            <div className="w-full flex justify-between items-center px-10 pt-8">
                <img src="/images/prme.png" alt="PRME" className="h-10 w-auto" />
                <img src="/images/aacsb.png" alt="AACSB" className="h-10 w-auto" />
            </div>

            {/* ORANGE BANNER */}
            <div className="w-full bg-gradient-to-r from-[#f47b2a] to-[#ea4d2d] mt-8 pb-24 relative text-white text-center">
                <div className="flex justify-between items-center w-full max-w-[1300px] mx-auto px-10">
                    <div className="flex gap-6 mt-4">
                        <div className="flex items-center gap-2"><p>📧 Email</p></div>
                        <div className="flex items-center gap-2"><p>📞 Phone</p></div>
                    </div>
                    <a href="/resume.pdf" download className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-[#f47b2a] transition-all">
                        ⬇ Download My Resume
                    </a>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-90px]">
                    <div className="rounded-full border-[6px] border-white overflow-hidden w-[180px] h-[180px]">
                        <img src="/images/3.jpg" alt="Rohit Verma" className="object-cover w-full h-full" />
                    </div>
                </div>
            </div>

            {/* BASIC INFO */}
            <div className="mt-[130px] text-center">
                <h1 className="text-[32px] font-bold text-[#111]">Rohit Verma</h1>
                <p className="text-gray-600 text-[18px] mt-2">Male | 26 | He/Him</p>
            </div>

            {/* VISUAL RESUME BUTTON */}
            <div className="mt-10">
                <button className="bg-[#f47b2a] text-white px-6 py-3 rounded-full text-[16px] font-medium">
                    ▶ Watch my Visual Resume Now
                </button>
            </div>

            {/* BIOGRAPHY */}
            <div className="max-w-[1000px] text-center mt-12 text-gray-700 leading-relaxed text-[17px] px-6">
                <p>
                    I am Rohit Verma, a full-stack developer with hands-on experience in JavaScript, Node.js, and React.
                    I focus on building scalable, high-performance web applications.
                </p>
                <p className="mt-6">
                    I’ve delivered multiple real-world projects, integrating REST APIs, authentication systems, and
                    optimizing backend performance for enterprise apps. My goal is to design intuitive digital experiences
                    through clean code and efficient architecture.
                </p>
            </div>

            {/* CASE STUDIES */}
            <CaseStudies />
            <VideoSection />
            <Footer name="Rohit Verma" />
        </div>
    );
}

function CaseStudies() {
    const cases = [
        { img: "/images/ondc.png", title: "ONDC Case Study" },
        { img: "/images/jjm.png", title: "Jal Jeevan Mission Case Study" },
        { img: "/images/finance.png", title: "FinEasy Case Study" },
    ];
    return (
        <div className="mt-20 w-full max-w-[1300px] px-6">
            <h2 className="text-[28px] font-bold mb-8">Case Insights & Key Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {cases.map(c => (
                    <div key={c.title} className="rounded-[20px] overflow-hidden bg-white shadow-md text-center">
                        <img src={c.img} alt={c.title} className="w-full h-[220px] object-contain bg-white" />
                        <h3 className="text-[18px] font-semibold py-4">{c.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

function VideoSection() {
    return (
        <div className="mt-24 w-full max-w-[1100px]">
            <h2 className="text-[28px] font-bold text-center mb-8">Visual Resume</h2>
            <div className="rounded-[20px] overflow-hidden shadow-md relative">
                <img src="/images/video-thumbnail.jpg" alt="Video" className="w-full h-[500px] object-cover" />
                <div className="absolute bottom-6 left-6 text-white flex items-center gap-3">
                    <img src="/images/youtube.png" alt="YouTube" className="h-6" />
                    <p>YouTube</p>
                </div>
                <div className="absolute bottom-6 right-6 flex gap-4">
                    <button className="px-6 py-2 border border-white rounded-full text-white">⏸</button>
                    <button className="px-6 py-2 border border-white rounded-full text-white">Watch the Full Video</button>
                </div>
            </div>
        </div>
    );
}

function Footer({ name }) {
    return (
        <div className="w-full mt-24 bg-gradient-to-r from-[#f47b2a] to-[#ea4d2d] text-white text-center py-14 rounded-t-[40px]">
            <h2 className="text-[28px] font-semibold mb-6">Connect with {name}</h2>
            <a href="/resume.pdf" download className="bg-white text-[#f47b2a] px-6 py-3 rounded-full font-medium">⬇ Download My Resume</a>
            <div className="flex justify-center mt-8 gap-10 text-white">
                <p>📧 Email</p>
                <p>📞 Phone</p>
                <p>🐙 GitHub</p>
                <p>💼 LinkedIn</p>
            </div>
            <p className="text-sm mt-10 opacity-80">© 2024 MAHE B’LRU</p>
        </div>
    );
}
