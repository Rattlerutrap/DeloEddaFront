import HeroPortfolioSection from "../components/DesignPortfolio/HeroPortfolioSection";
import DesignesSection from "../components/DesignPortfolio/DesignesSection";
import ProcessSection from "../components/DesignPortfolio/ProcessSection";
// import RectangleSection from "../components/DesignPortfolio/RectangleSection";
import { useEffect } from 'react';

function DesignPortfolio() {
    useEffect(() => {
            window.scrollTo(0, 0);
          }, []);
    return (
        <div>
            <main>
                <HeroPortfolioSection />
                <DesignesSection />
                <ProcessSection />
                {/* <RectangleSection /> */}
            </main>
        </div>
    );
}

export default DesignPortfolio;