import HeroHomeSection from "../components/Home/HeroHomeSection";
import FeaturesSection from "../components/Home/FeaturesSection";
import PhilosophySection from "../components/Home/PhilosophySection";
import ReviewsSection from "../components/Home/ReviewsSection";

function Home() {
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
