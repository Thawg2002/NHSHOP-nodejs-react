import { useProductQuery } from "@/common/hooks/useProductQuery";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import ProductDetai from "./ProductDetai";
import RellatedProduct from "./RellatedProduct";

const DetailProduct = () => {
    const { id } = useParams();
    console.log(id);
    const { data: product, isLoading } = useProductQuery({ id: id! });
    // const { data: relatedProduct } = useQuery({
    //     queryKey: ["RELATED_PRODUCT"],
    //     queryFn: async () => {
    //         const { data } = await axios.get(
    //             `http://localhost:8080/api/v1/products/${product.category}/related/${product._id}`,
    //         );
    //         return data;
    //     },
    // });
    const { data: relatedProduct } = useQuery({
        queryKey: ["RELATED_PRODUCT"],
        queryFn: async () => {
            const { data } = await axios.get(
                `http://localhost:8080/api/v1/products/${product.category}/related`,
            );
            return data;
        },
    });

    if (isLoading) return <p>Loading...</p>;
    return (
        <>
            <div>
                <div>
                    <ProductDetai product={product} relatedProduct={relatedProduct}/>
                </div>
                <hr />
              
            </div>
        </>
    );
};

export default DetailProduct;
