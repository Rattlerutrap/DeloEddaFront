import React, { useState, useEffect } from 'react';
import '../../styles/components/ProductDetailPage/Product.css';
import Rectangle from '../../images/rectangle.jpg'
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { API_URL } from '../../index';

const Product = () => {
    const { t } = useTranslation();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(API_URL + '1')
            .then(response => {
                setProduct(response.data);
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
        <section className="story">
            <div className="container">
                <div className="content-block">
                    <div>
                        <img src={Rectangle} alt={product.title} className="product-image" />
                    </div>
                    <div>
                        <h2>{product.title}</h2>
                        <p>${product.price}</p>
                        <p>{product.description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;