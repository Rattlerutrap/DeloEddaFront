import React, { useState, useEffect } from 'react';
import '../../styles/components/ProductDetailPage/Related.css';
import { Link } from 'react-router-dom';
import axios from 'axios';


import good6 from '../../images/rectangle.jpg';
import good5 from '../../images/rectangle.jpg';
import good4 from '../../images/rectangle.jpg';
import good3 from '../../images/rectangle.jpg';
import good2 from '../../images/rectangle.jpg';
import good1 from '../../images/rectangle.jpg';
import { useTranslation } from 'react-i18next';
import { API_URL } from '../../index';

const Related = () => {
    const { t } = useTranslation();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const productIds = [1, 2, 3, 4, 5, 6];

        const requests = productIds.map(id => 
            axios.get(API_URL + `${id}`)
        );

        Promise.all(requests)
            .then(responses => {
                const productsData = responses.map(response => response.data);
                setProducts(productsData);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

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