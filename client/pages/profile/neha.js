export default function NehaProfile() {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center">
            <Header />
            <Banner img="/images/6.jpg" name="Neha Iyer" />
            <BasicInfo name="Neha Iyer" gender="Female" age="25" pronouns="She/Her" />
            <Biography
                text1="I am Neha Iyer, a UX Researcher dedicated to understanding user behavior and improving design usability."
                text2="With expertise in wireframing, accessibility testing, and product design systems, I aim to create meaningful digital experiences."
            />
            <CaseStudies />
            <VideoSection />
            <Footer name="Neha Iyer" />
        </div>
    );
}
