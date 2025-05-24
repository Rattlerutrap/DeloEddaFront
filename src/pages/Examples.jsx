import HeroExamplesSection from '../components/Examples/HeroExamplesSection'
import ExamplesSection from '../components/Examples/ExamplesSection'
// import TextSection from '../components/Examples/TextSection'
import { useEffect } from 'react';


function Examples() {
    useEffect(() => {
            window.scrollTo(0, 0);
          }, []);
    return (
        <div>
            <main>
                <HeroExamplesSection />
                <ExamplesSection />
                {/* <TextSection /> */}
            </main>
        </div>
    );
}

export default Examples;