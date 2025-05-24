import Form from "../components/ContacUs/Form";
import { useEffect } from 'react';

function ContacUs() {
    useEffect(() => {
            window.scrollTo(0, 0);
          }, []);
    return (
        <div>
            <main>
                <Form />
            </main>
        </div>
    );
}

export default ContacUs;