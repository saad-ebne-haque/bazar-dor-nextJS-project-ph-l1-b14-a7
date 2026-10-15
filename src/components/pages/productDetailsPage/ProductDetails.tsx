import { getSingleProduct } from "@/apis/api"
import { Product } from "@/types/product/product.type"
import Path from "./path/Path";
import ProductDetailsTop from "./productDetailsTop/ProductDetailsTop";
import PriceComperison from "./priceComperison/PriceComperison";

export interface ProductDetailsProps {
    params: Promise<{ id: string }>
}

export default async function ProductDetails({ params }: ProductDetailsProps) {

    const { id } = await params

    const product: Product = await getSingleProduct(id);

    return (
        <>
            <div className="px-4 py-6 mb-32 space-y-6">
                <Path product={product}></Path>
                <ProductDetailsTop product={product}></ProductDetailsTop>
                <PriceComperison product={product}></PriceComperison>
            </div>
        </>
    )
}