import { IProduct } from "@/common/types/product";
import RellatedProduct from "./RellatedProduct";
type Prop = {
    product: any;
    relatedProduct: any;
};
const ProductDetai = ({ product, relatedProduct }: Prop) => {
    console.log(product);
    return (
        <>
            <div>
                <section className="statusbar">
                    <div className="container">
                        <div className="status">
                            <a href="">Home</a> <span>&gt;</span>
                            <a href="">Shop</a> <span>&gt;</span>
                        </div>
                        <span>|</span>
                        <div className="status">
                            <a href="" style={{ color: "#000" }}>
                                {product.name}
                            </a>
                        </div>
                    </div>
                </section>
                <section className="product-detail-main">
                    <div className="container">
                        <main>
                            <div className="product-detail">
                                <div className="product-detail-image">
                                    <div className="product-detail-image__thumbnail">
                                        <img src={product.gallery[0]} alt="" />
                                        <img src={product.gallery[1]} alt="" />
                                        <img src={product.gallery[2]} alt="" />
                                        <img src={product.gallery[3]} alt="" />
                                    </div>
                                    <div className="product-detail-image__main">
                                        <img
                                            src={product.image}
                                            alt=""
                                            className="main-image"
                                        />
                                    </div>
                                </div>
                                <div className="product-detail-info">
                                    <div className="product-detail-info__top">
                                        <h2 className="product-detail-title">
                                            {product.name}
                                        </h2>
                                        <span className="product-detail__price">
                                            {product.price}
                                        </span>
                                        <div className="product-detail__star">
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <span
                                                style={{
                                                    margin: "0 11px",
                                                    color: "#000",
                                                }}
                                            >
                                                |
                                            </span>
                                            <span className="start-review">
                                                5 Customer Review
                                            </span>
                                        </div>
                                        <p className="product-detail__description">
                                            Setting the bar as one of the
                                            loudest speakers in its class, the
                                            Kilburn is a compact, stout-hearted
                                            hero with a well-balanced audio
                                            which boasts a clear midrange and
                                            extended highs for a sound.
                                        </p>
                                        <div className="product-detail-sizes">
                                            <span>Size</span>
                                            <div className="product-detail-sizes__item">
                                                <input
                                                    type="text"
                                                    defaultValue="L"
                                                />
                                                <input
                                                    type="text"
                                                    defaultValue="XL"
                                                />
                                                <input
                                                    type="text"
                                                    defaultValue="XS"
                                                />
                                            </div>
                                        </div>
                                        <div className="product-detail-colors">
                                            <span>Color</span>
                                            <div className="product-detail-colors__item">
                                                <input
                                                    style={{
                                                        backgroundColor:
                                                            "#816DFA",
                                                    }}
                                                    type="text"
                                                />
                                                <input
                                                    style={{
                                                        backgroundColor:
                                                            "#000000",
                                                    }}
                                                    type="text"
                                                />
                                                <input
                                                    style={{
                                                        backgroundColor:
                                                            "#B88E2F",
                                                    }}
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                        <div className="product-detail-submit">
                                            <div className="quantity">
                                                <button className="decrease">
                                                    -
                                                </button>
                                                <input
                                                    type="number"
                                                    className="quantity-input"
                                                    defaultValue={1}
                                                />
                                                <button className="increase">
                                                    +
                                                </button>
                                            </div>
                                            <a href="cart.html">
                                                <button className="btn-add">
                                                    Add To Cart
                                                </button>
                                            </a>
                                            {/* <button class="btn-add"><a href="cart.html">Add To Cart</a></button> */}
                                            <button className="btn-compare">
                                                {" "}
                                                + Compare
                                            </button>
                                        </div>
                                    </div>
                                    <div className="product-detail-info__bottom">
                                        <div className="bottom-item">
                                            <span className="bottom-item__left">
                                                SKU
                                            </span>{" "}
                                            : <span>SS001</span>
                                        </div>
                                        <div className="bottom-item">
                                            <span className="bottom-item__left">
                                                Category
                                            </span>{" "}
                                            : <span>Sofas</span>
                                        </div>
                                        <div className="bottom-item">
                                            <span className="bottom-item__left">
                                                Tags
                                            </span>{" "}
                                            :{" "}
                                            <span>Sofa, Chair, Home, Shop</span>
                                        </div>
                                        <div className="bottom-item">
                                            <span className="bottom-item__left">
                                                Share
                                            </span>{" "}
                                            :{" "}
                                            <span>
                                                <i className="fa-brands fa-facebook" />
                                                <i className="fa-brands fa-linkedin" />
                                                <i className="fa-brands fa-square-twitter" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </section>
                <section className="descriptionAll">
                    <div className="container">
                        <div className="dsc">
                            <div className="dsc-titile">
                                <h2>Description</h2>
                                <h2>Additional Information</h2>
                                <h2>Reviews [5]</h2>
                            </div>
                            <div className="dsc-text">
                                <p>
                                    Embodying the raw, wayward spirit of rock
                                    ‘n’ roll, the Kilburn portable active stereo
                                    speaker takes the unmistakable look and
                                    sound of Marshall, unplugs the chords, and
                                    takes the show on the road.
                                    <br />
                                    <br />
                                    Weighing in under 7 pounds, the Kilburn is a
                                    lightweight piece of vintage styled
                                    engineering. Setting the bar as one of the
                                    loudest speakers in its class, the Kilburn
                                    is a compact, stout-hearted hero with a
                                    well-balanced audio which boasts a clear
                                    midrange and extended highs for a sound that
                                    is both articulate and pronounced. The
                                    analogue knobs allow you to fine tune the
                                    controls to your personal preferences while
                                    the guitar-influenced leather strap enables
                                    easy and stylish travel.
                                </p>
                            </div>
                            <div className="dsc-image">
                                <img
                                    src="https://picsum.photos/800/800"
                                    alt=""
                                />
                                <img
                                    src="https://picsum.photos/800/800"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <RellatedProduct relatedProduct={relatedProduct} />
                <section className="services">
                    <div className="container-fluid">
                        <div className="service-list">
                            <div className="service-item">
                                <img
                                    src="./asset/icon/icon5.svg"
                                    className="service__image"
                                />
                                <div className="service-info">
                                    <h4 className="service__name">
                                        High Quality
                                    </h4>
                                    <p className="service__description">
                                        crafted from top materials
                                    </p>
                                </div>
                            </div>
                            {/*End service-item*/}
                            <div className="service-item">
                                <img
                                    src="./asset/icon/icon6.svg"
                                    className="service__image"
                                />
                                <div className="service-info">
                                    <h4 className="service__name">
                                        High Quality
                                    </h4>
                                    <p className="service__description">
                                        crafted from top materials
                                    </p>
                                </div>
                            </div>
                            {/*End service-item*/}
                            <div className="service-item">
                                <img
                                    src="./asset/icon/icon7.svg"
                                    className="service__image"
                                />
                                <div className="service-info">
                                    <h4 className="service__name">
                                        High Quality
                                    </h4>
                                    <p className="service__description">
                                        crafted from top materials
                                    </p>
                                </div>
                            </div>
                            {/*End service-item*/}
                            <div className="service-item">
                                <img
                                    src="./asset/icon/icon8.svg"
                                    className="service__image"
                                />
                                <div className="service-info">
                                    <h4 className="service__name">
                                        High Quality
                                    </h4>
                                    <p className="service__description">
                                        crafted from top materials
                                    </p>
                                </div>
                            </div>
                            {/*End service-item*/}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default ProductDetai;
