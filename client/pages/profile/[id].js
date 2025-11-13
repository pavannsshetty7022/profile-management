import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProfileLayout from "@/components/ProfileLayout";

const profileData = {
    "1": {
        bio1: (
            <>
                I am Saksham Arora, a 25-year-old MBA candidate at TAPMI, Bengaluru (2024-2026), with a BTech in Electronics & Communication (CGPA 7.95). I bring 35 months of experience, including boosting system scalability by 30% and earning the Rise Insta Award at Infosys for enhancing backend efficiency by 25%.
                <br /><br />
                I have developed Python-based analytics tools during internships and drove a 20% rise in donations through strategic social media campaigns. Certified in SQL, Python, Java, and IoT, I have also delivered impactful projects like a ReactJS prototype for accessibility and a QR-based attendance system. My achievements in national contests showcase both my technical expertise and creative problem-solving.
            </>
        ),

    },
    "2": {
        bio2: (
            <>
                I am Priya Sharma, a 24-year-old MBA student at NMIMS, Mumbai (2024-2026), holding a BBA in Marketing with a CGPA of 8.2. I have 28 months of experience in digital marketing, where I led campaigns that increased client engagement by 40% and improved lead conversion by 25%.
                <br /><br />
                During my internship at HDFC Bank, I streamlined customer onboarding through data-driven insights, reducing process delays by 18%. Certified in Google Analytics, Excel, and Business Communication, I have also developed a product launch strategy that boosted brand visibility by 35%. My passion lies in combining creativity and analytics to deliver measurable business impact.
            </>
        ),
    },

    "3": {
        bio3: (
            <>
                I am Rohith Verma, a 26-year-old MCA candidate at Christ University, Bengaluru (2024-2026), with a BSc in Computer Science (CGPA 8.0). I bring over 2 years of experience as a software developer, having designed scalable web applications and optimized database performance by 30%.
                <br /><br />
                My work at TCS involved developing automation tools in Python, reducing manual workload by 45%. I am certified in Java, C++, and Cloud Computing, and have built projects such as a real-time chat application and an AI-based student feedback system. I thrive at the intersection of innovation, efficiency, and user-centered design.
            </>
        ),
    },
    "4": {
        bio4: (
            <>
                I am Ananya Gupta, a 23-year-old MBA candidate at IIM Indore (2024-2026), specializing in Human Resource Management. I completed my BA in Psychology with a CGPA of 8.5 and bring 18 months of HR internship experience at Deloitte and Nestlé.
                <br /><br />
                I have led recruitment drives improving talent acquisition efficiency by 20%, and initiated engagement programs increasing retention by 15%. Certified in HR Analytics, Emotional Intelligence, and People Management, I am driven to create data-backed, inclusive workplace solutions that foster growth and collaboration.
            </>
        ),
    },
    "5": {
        bio5: (
            <>
                I am Karan Mehta, a 25-year-old Data Science postgraduate student at SRM University, Chennai (2024-2026), holding a BTech in Computer Engineering with a CGPA of 8.1. I have 30 months of industry experience in machine learning and data analytics.
                <br /><br />
                At Cognizant, I developed a predictive model that improved sales forecasting accuracy by 28%. My expertise includes Python, TensorFlow, SQL, and Tableau. I have also contributed to projects involving NLP-based chatbots and image classification systems. Passionate about solving real-world problems, I aim to bridge business strategy and data-driven insights.
            </>
        ),
    },
    "default": {
        bio6: (
            <>
                I am Neha Iyer, a 24-year-old MBA student at TAPMI, Bengaluru (2024-2026), with a BCom in Finance (CGPA 8.3). I bring 2 years of experience in financial consulting, specializing in business valuation and investment analysis.
                <br /><br />
                During my tenure at EY, I supported portfolio optimization strategies that enhanced client ROI by 22%. I am certified in Financial Modeling, Excel, and Risk Management, and have conducted research on sustainable finance and ESG investments. My goal is to integrate technology with finance to drive responsible, data-informed growth.
            </>
        ),

    }
};

export default function ProfilePage() {
    const router = useRouter();
    const { id } = router.query;
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        if (id) {
            fetch("http://localhost:5000/api/profiles")
                .then(res => res.json())
                .then(data => {
                    const person = data.find(p => p.id.toString() === id);
                    if (person) {
                        const bioData = profileData[id] || profileData.default;
                        const bioContent = Object.values(bioData)[0];
                        setProfile({
                            ...person,
                            bio1: bioContent,
                        });
                    }
                })
                .catch(error => console.error("Failed to fetch profile data:", error));
        }
    }, [id]);

    if (!profile) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

    return <ProfileLayout profile={profile} />;
}
