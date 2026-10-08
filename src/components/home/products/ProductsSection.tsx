import type { Product } from "@/types/product/productType";
import RisingPrice from "./risingPrice/RisingPrice";
import FallingPrice from "./fallingPrice/FallingPrice";
import AllProducts from "./allProducts/AllProducts";
import { ReactPromise } from "react";

export interface ProductsSectionProps {
    productsPromise: ReactPromise<Product[]>;
}

export default async function ProductsSection({ productsPromise }: ProductsSectionProps) {
    const products = await productsPromise;
    
    return (
        <div className="space-y-10">
            <RisingPrice products={products}></RisingPrice>
            <FallingPrice products={products}></FallingPrice>
            <AllProducts products={products}></AllProducts>
        </div>
    )
}