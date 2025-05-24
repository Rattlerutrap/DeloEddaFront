import Product from "../components/ProductDetailPage/Product";
import Related from "../components/ProductDetailPage/Related";
import { useEffect } from 'react';


function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div>
            <main>
                <Product />
                <Related />
            </main>
        </div>
    );
}

export default Home;
