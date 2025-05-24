import HeroHomeSection from "../components/Home/HeroHomeSection";
import FeaturesSection from "../components/Home/FeaturesSection";
import PhilosophySection from "../components/Home/PhilosophySection";
import ReviewsSection from "../components/Home/ReviewsSection";
import { useEffect } from 'react';

function Home() {
    useEffect(() => {
            window.scrollTo(0, 0);
          }, []);
    return (
        <div>
            <main>
                <HeroHomeSection />
                <FeaturesSection />
                <PhilosophySection />
                <ReviewsSection />
            </main>
        </div>
    );
}

export default Home;
