export default function AnanyaProfile() {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center">
            <Header />
            <Banner img="/images/4.jpg" name="Ananya Gupta" />
            <BasicInfo name="Ananya Gupta" gender="Female" age="23" pronouns="She/Her" />
            <Biography
                text1="I am Ananya Gupta, a passionate Data Analyst focusing on transforming data into actionable insights for decision-making."
                text2="Proficient in Excel, Python, and SQL, I have developed dashboards and reports to improve strategic planning and operational efficiency."
            />
            <CaseStudies />
            <VideoSection />
            <Footer name="Ananya Gupta" />
        </div>
    );
}

function Header() {
    return (
        <div className="w-full flex justify-between items-center px-10 pt-8">
            <img src="/images/prme.png" alt="PRME" className="h-20 w-auto" />
            <img src="/images/aacsb.png" alt="AACSB" className="h-25 w-auto" />
        </div>
    );
}

function Banner({ img, name }) {
    return (
        <div className="w-full bg-gradient-to-r from-[#f47b2a] to-[#ea4d2d] mt-8 pb-24 relative text-white text-center">
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-90px]">
                <div className="rounded-full border-[6px] border-white overflow-hidden w-[180px] h-[180px]">
                    <img src={img} alt={name} className="object-cover w-full h-full" />
                </div>
            </div>
        </div>
    );
}

function BasicInfo({ name, gender, age, pronouns }) {
    return (
        <div className="mt-[130px] text-center">
            <h1 className="text-[32px] font-bold text-[#111]">{name}</h1>
            <p className="text-gray-600 text-[18px] mt-2">
                {gender} | {age} | {pronouns}
            </p>
        </div>
    );
}

function Biography({ text1, text2 }) {
    return (
        <div className="max-w-[1000px] text-center mt-12 text-gray-700 leading-relaxed text-[17px] px-6">
            <p>{text1}</p>
            <p className="mt-6">{text2}</p>
        </div>
    );
}
