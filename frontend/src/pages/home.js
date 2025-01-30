import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch("http://localhost:5000/api/products");
            const data = await response.json();
            setProducts(data);
        };
        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Products</h1>
            <div className="product-list">
                {products.map((product) => (
                    <div key={product._id} className="product-card">
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>${product.price}</p>
                        <Link to={`/product/${product._id}`}>View</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
