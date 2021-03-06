import React from 'react';
import "./index.css";
import axios from "axios";
import { Link } from 'react-router-dom';
function MainPage() {
    const [products, setProducts] = React.useState([]);
    React.useEffect(
        function () {
            axios.get("https://6683a955-ec5e-4bc2-9a98-06f1f79c4b5c.mock.pstmn.io/products")
                .then(function (result) {
                    const products = result.data.products;
                    setProducts(products);
                })
                .catch(function (error) {
                    console.log('error happens : ', error);
                });
        }
        , []);
    return (
        <div>
            <div id="banner">
                <img src="images/banners/banner3.png" />
            </div>
            <h1>Items for sale</h1>
            <div id="product-list">
                {
                    products.map(function (product, index) {
                        return (
                            <div className="product-card">
                                <Link className="product-link" to={`/products/${product.id}`}>
                                    <div>
                                        <img className="product-img" src={product.imageUrl} />
                                    </div>
                                    <div className="product-contents">
                                        <span className="product-name">{product.name}</span>
                                        <span className="product-price">{product.price} won</span>
                                        <div className="product-seller">
                                            <img className="product-avatar" src="images/icons/avatar.png" />
                                            <span>{product.seller}</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default MainPage;
