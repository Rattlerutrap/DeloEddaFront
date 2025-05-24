// import React, { useState, useEffect } from 'react';
import '../../styles/components/ProductDetailPage/Related.css';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import good6 from '../../images/good6.jpg';
import good5 from '../../images/good5.jpg';
import good4 from '../../images/good4.jpg';
import good3 from '../../images/good3.jpg';
import good2 from '../../images/good2.jpg';
import good1 from '../../images/good1.jpg';

import { useTranslation } from 'react-i18next';
// import { API_URL } from '../../index';

const Related = () => {
    const { t } = useTranslation();
    const products = [
            { id: 1, img: good1, title: t('products.product1.title'), price: t('products.product1.price'), description: t('products.product1.description') },
            { id: 2, img: good2, title: t('products.product2.title'), price: t('products.product2.price'), description: t('products.product2.description') },
            { id: 3, img: good3, title: t('products.product3.title'), price: t('products.product3.price'), description: t('products.product3.description') },
            { id: 4, img: good4, title: t('products.product4.title'), price: t('products.product4.price'), description: t('products.product4.description') },
            { id: 5, img: good5, title: t('products.product5.title'), price: t('products.product5.price'), description: t('products.product5.description') },
            { id: 6, img: good6, title: t('products.product6.title'), price: t('products.product6.price'), description: t('products.product6.description') }
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
                                <p>{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Related;