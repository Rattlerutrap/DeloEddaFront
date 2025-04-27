import Product from "../components/ProductDetailPage/Product";
import Related from "../components/ProductDetailPage/Related";


function Home() {
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
