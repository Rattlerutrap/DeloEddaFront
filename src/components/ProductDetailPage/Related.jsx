// import React, { useState, useEffect } from 'react';
import '../../styles/components/ProductDetailPage/Related.css';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import good6 from '../../images/good1.jpg';
import good5 from '../../images/good2.jpg';
import good4 from '../../images/good3.jpg';
import good3 from '../../images/good4.jpg';
import good2 from '../../images/good5.jpg';
import good1 from '../../images/good6.jpg';

import { useTranslation } from 'react-i18next';
// import { API_URL } from '../../index';

const Related = () => {
    const { t } = useTranslation();
    const products = [
        { id: 1, img: good1, title: t('products.product1.title'), price: 19.99 },
        { id: 2, img: good2, title: t('products.product2.title'), price: 24.99 },
        { id: 3, img: good3, title: t('products.product3.title'), price: 29.99 },
        { id: 4, img: good4, title: t('products.product4.title'), price: 14.99 },
        { id: 5, img: good5, title: t('products.product5.title'), price: 34.99 },
        { id: 6, img: good6, title: t('products.product6.title'), price: 9.99 }
    ];
    // const [products, setProducts] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     const productIds = [1, 2, 3, 4, 5, 6];

    //     const requests = productIds.map(id => 
    //         axios.get(API_URL + `${id}`)
    //     );

    //     Promise.all(requests)
    //         .then(responses => {
    //             const productsData = responses.map(response => response.data);
    //             setProducts(productsData);
    //             setLoading(false);
    //         })
    //         .catch(err => {
    //             setError(err.message);
    //             setLoading(false);
    //         });
    // }, []);

    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    // if (error) {
    //     return <div>Error: {error}</div>;
    // }

    return (
        <div className="section">
            <div className="container">
                <h1>{t('productdetailpage.related.h1')}</h1>
                <div className="products-grid">
                    {products.map(product => (
                        <div className="photo-card" key={product.id}>
                            <Link to={`/examples/productdetailpage/${product.id}`}>
                                <img src={product.img} alt={product.title} />
                            </Link>
                            <div className="description">
                                <h3>{product.title}</h3>
                                <p>${Number(product.price).toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Related;