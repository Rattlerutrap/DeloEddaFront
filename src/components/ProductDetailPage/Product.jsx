// import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../../styles/components/ProductDetailPage/Product.css';
// import Rectangle from '../../images/rectangle.jpg'
// import axios from 'axios';
import { useTranslation } from 'react-i18next';
// import { API_URL } from '../../index';
import good6 from '../../images/good6.jpg';
import good5 from '../../images/good5.jpg';
import good4 from '../../images/good4.jpg';
import good3 from '../../images/good3.jpg';
import good2 from '../../images/good2.jpg';
import good1 from '../../images/good1.jpg';

const Product = () => {
    const { id } = useParams();
    const productId = parseInt(id, 10);
    const { t } = useTranslation();
    const products = [
        { id: 1, img: good1, title: t('products.product1.title'), price: t('products.product1.price'), description: t('products.product1.description') },
        { id: 2, img: good2, title: t('products.product2.title'), price: t('products.product2.price'), description: t('products.product2.description') },
        { id: 3, img: good3, title: t('products.product3.title'), price: t('products.product3.price'), description: t('products.product3.description') },
        { id: 4, img: good4, title: t('products.product4.title'), price: t('products.product4.price'), description: t('products.product4.description') },
        { id: 5, img: good5, title: t('products.product5.title'), price: t('products.product5.price'), description: t('products.product5.description') },
        { id: 6, img: good6, title: t('products.product6.title'), price: t('products.product6.price'), description: t('products.product6.description') }
    ];
    // const [product, setProduct] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     axios.get(API_URL + id)
    //         .then(response => {
    //             setProduct(response.data);
    //             setLoading(false);
    //             console.log('Success:', response.data);
    //         })
    //         .catch(err => {
    //             setError(err.message);
    //             setLoading(false);
    //         });
    // }, [id]);

    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    // if (error) {
    //     return <div>Error: {error}</div>;
    // }
    
    return (
        <section className="story">
            <div className="container">
                <div className="content-block">
                    <div>
                        <img src={products[productId-1].img} alt={"product.title"} className="product-image" />
                    </div>
                    <div>
                        {/* <h2>{product.title}</h2>
                        <p>${product.price}</p>
                        <p>{product.description}</p> */}
                        <h2>{products[productId-1].title}</h2>
                        <p>{products[productId-1].price}</p>
                        <p>{products[productId-1].description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;