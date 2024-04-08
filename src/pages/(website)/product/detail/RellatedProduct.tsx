import React from "react";
import { Link } from "react-router-dom";

const RellatedProduct = ({ relatedProduct }: any) => {
    return (
        <div>
            {relatedProduct?.map((item: any) => (
                <div>
                    <Link to={`/products/${item._id}`}>{item.name}</Link>
                </div>
            ))}
            <section className="relatedProducts">
                <h2>Related Products</h2>
                <div className="product">
                    <div className="container">
                        <div className="section-body">
                            <div className="product-list">
                                {relatedProduct?.map((item: any) => (
                                    <div>
                                        {/* <Link to={`/products/${item._id}`}>
                                            {item.name}
                                        </Link> */}
                                        <div className="product-item">
                                            <div className="product-image">
                                                <img
                                                    src="https://picsum.photos/id/10/300/300"
                                                    alt=""
                                                    className="product__thumbnail"
                                                />
                                                <span className="product-sale">
                                                    -30%
                                                </span>
                                            </div>
                                            <div className="product-info">
                                                <h3 className="product__name">
                                                    <a
                                                        href=""
                                                        className="product__link"
                                                    >
                                                        <Link
                                                            to={`/products/${item._id}`}
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    </a>
                                                </h3>
                                                <a
                                                    href=""
                                                    className="product__category"
                                                >
                                                    Stylish cafe chair
                                                </a>
                                                <div className="product-price">
                                                    <span className="product-price__new">
                                                        $200
                                                    </span>
                                                    <span className="product-price__old">
                                                        $300
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="product-actions">
                                                <button className="btn product-action__quickview">
                                                    Quick View
                                                </button>
                                                <button className="btn product-action__addtocart">
                                                    Add To Cart
                                                </button>
                                                <div className="product-actions-more">
                                                    <span className="product-action__share">
                                                        <img
                                                            src="./asset/icon/share.svg"
                                                            alt=""
                                                        />
                                                        share
                                                    </span>
                                                    <span className="product-action__compare">
                                                        <img
                                                            src="./asset/icon/icon9.svg"
                                                            alt=""
                                                        />
                                                    </span>
                                                    <span className="product-action__like">
                                                        <img
                                                            src="./asset/icon/like.svg"
                                                            alt=""
                                                        />
                                                        Like
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {/* <div className="product-item">
                                    <div className="product-image">
                                        <img
                                            src="https://picsum.photos/id/10/300/300"
                                            alt=""
                                            className="product__thumbnail"
                                        />
                                        <span className="product-sale">
                                            -30%
                                        </span>
                                    </div>
                                    <div className="product-info">
                                        <h3 className="product__name">
                                            <a
                                                href=""
                                                className="product__link"
                                            >
                                                Syltherine
                                            </a>
                                        </h3>
                                        <a
                                            href=""
                                            className="product__category"
                                        >
                                            Stylish cafe chair
                                        </a>
                                        <div className="product-price">
                                            <span className="product-price__new">
                                                $200
                                            </span>
                                            <span className="product-price__old">
                                                $300
                                            </span>
                                        </div>
                                    </div>
                                    <div className="product-actions">
                                        <button className="btn product-action__quickview">
                                            Quick View
                                        </button>
                                        <button className="btn product-action__addtocart">
                                            Add To Cart
                                        </button>
                                        <div className="product-actions-more">
                                            <span className="product-action__share">
                                                <img
                                                    src="./asset/icon/share.svg"
                                                    alt=""
                                                />
                                                share
                                            </span>
                                            <span className="product-action__compare">
                                                <img
                                                    src="./asset/icon/icon9.svg"
                                                    alt=""
                                                />
                                            </span>
                                            <span className="product-action__like">
                                                <img
                                                    src="./asset/icon/like.svg"
                                                    alt=""
                                                />
                                                Like
                                            </span>
                                        </div>
                                    </div>
                                </div> */}
                                {/*End .product-item*/}
                                {/* <div className="product-item">
                                            <div className="product-image">
                                                <img
                                                    src="https://picsum.photos/id/10/300/300"
                                                    alt=""
                                                    className="product__thumbnail"
                                                />
                                                <span className="product-new">
                                                    New
                                                </span>
                                            </div>
                                            <div className="product-info">
                                                <h3 className="product__name">
                                                    <a
                                                        href=""
                                                        className="product__link"
                                                    >
                                                        Syltherine
                                                    </a>
                                                </h3>
                                                <a
                                                    href=""
                                                    className="product__category"
                                                >
                                                    Stylish cafe chair
                                                </a>
                                                <div className="product-price">
                                                    <span className="product-price__new">
                                                        $200
                                                    </span>
                                                    <span className="product-price__old">
                                                        $300
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="product-actions">
                                                <button className="btn product-action__quickview">
                                                    Quick View
                                                </button>
                                                <button className="btn product-action__addtocart">
                                                    Add To Cart
                                                </button>
                                                <div className="product-actions-more">
                                                    <span className="product-action__share">
                                                        <img
                                                            src="./asset/icon/share.svg"
                                                            alt=""
                                                        />
                                                        share
                                                    </span>
                                                    <span className="product-action__compare">
                                                        <img
                                                            src="./asset/icon/icon9.svg"
                                                            alt=""
                                                        />
                                                    </span>
                                                    <span className="product-action__like">
                                                        <img
                                                            src="./asset/icon/like.svg"
                                                            alt=""
                                                        />
                                                        Like
                                                    </span>
                                                </div>
                                            </div>
                                        </div> */}
                                {/*End .product-item*/}
                                {/* <div className="product-item">
                                            <div className="product-image">
                                                <img
                                                    src="https://picsum.photos/id/10/300/300"
                                                    alt=""
                                                    className="product__thumbnail"
                                                />
                                                <span className="product-sale">
                                                    -30%
                                                </span>
                                            </div>
                                            <div className="product-info">
                                                <h3 className="product__name">
                                                    <a
                                                        href=""
                                                        className="product__link"
                                                    >
                                                        Syltherine
                                                    </a>
                                                </h3>
                                                <a
                                                    href=""
                                                    className="product__category"
                                                >
                                                    Stylish cafe chair
                                                </a>
                                                <div className="product-price">
                                                    <span className="product-price__new">
                                                        $200
                                                    </span>
                                                    <span className="product-price__old">
                                                        $300
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="product-actions">
                                                <button className="btn product-action__quickview">
                                                    Quick View
                                                </button>
                                                <button className="btn product-action__addtocart">
                                                    Add To Cart
                                                </button>
                                                <div className="product-actions-more">
                                                    <span className="product-action__share">
                                                        <img
                                                            src="./asset/icon/share.svg"
                                                            alt=""
                                                        />
                                                        share
                                                    </span>
                                                    <span className="product-action__compare">
                                                        <img
                                                            src="./asset/icon/icon9.svg"
                                                            alt=""
                                                        />
                                                    </span>
                                                    <span className="product-action__like">
                                                        <img
                                                            src="./asset/icon/like.svg"
                                                            alt=""
                                                        />
                                                        Like
                                                    </span>
                                                </div>
                                            </div>
                                        </div> */}
                                {/*End .product-item*/}
                                {/* <div className="product-item">
                                            <div className="product-image">
                                                <img
                                                    src="https://picsum.photos/id/10/300/300"
                                                    alt=""
                                                    className="product__thumbnail"
                                                />
                                                <span className="product-new">
                                                    New
                                                </span>
                                            </div>
                                            <div className="product-info">
                                                <h3 className="product__name">
                                                    <a
                                                        href=""
                                                        className="product__link"
                                                    >
                                                        Syltherine
                                                    </a>
                                                </h3>
                                                <a
                                                    href=""
                                                    className="product__category"
                                                >
                                                    Stylish cafe chair
                                                </a>
                                                <div className="product-price">
                                                    <span className="product-price__new">
                                                        $200
                                                    </span>
                                                    <span className="product-price__old">
                                                        $300
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="product-actions">
                                                <button className="btn product-action__quickview">
                                                    Quick View
                                                </button>
                                                <button className="btn product-action__addtocart">
                                                    Add To Cart
                                                </button>
                                                <div className="product-actions-more">
                                                    <span className="product-action__share">
                                                        <img
                                                            src="./asset/icon/share.svg"
                                                            alt=""
                                                        />
                                                        share
                                                    </span>
                                                    <span className="product-action__compare">
                                                        <img
                                                            src="./asset/icon/icon9.svg"
                                                            alt=""
                                                        />
                                                    </span>
                                                    <span className="product-action__like">
                                                        <img
                                                            src="./asset/icon/like.svg"
                                                            alt=""
                                                        />
                                                        Like
                                                    </span>
                                                </div>
                                            </div>
                                        </div> */}
                                {/*End .product-item*/}
                            </div>
                        </div>
                    </div>
                </div>
                <button>Show More</button>
            </section>
        </div>
    );
};

export default RellatedProduct;
