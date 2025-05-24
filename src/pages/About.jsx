import Story from "../components/About/Story";
import Team from "../components/About/Team";
import { useEffect } from 'react';

function About() {
    useEffect(() => {
            window.scrollTo(0, 0);
          }, []);
    return (
        <div>
            <main>
                <Story />
                <Team />
            </main>
        </div>
    );
}

export default About;