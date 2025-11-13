export default function KaranProfile() {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center">
            <Header />
            <Banner img="/images/5.jpg" name="Karan Mehta" />
            <BasicInfo name="Karan Mehta" gender="Male" age="27" pronouns="He/Him" />
            <Biography
                text1="I am Karan Mehta, a Marketing Associate skilled in brand development and customer engagement across digital platforms."
                text2="I specialize in campaign management, social media analytics, and content strategy to enhance product visibility and brand loyalty."
            />
            <CaseStudies />
            <VideoSection />
            <Footer name="Karan Mehta" />
        </div>
    );
}
