import { getAllProducts, getSingleProduct } from "@/apis/api"
import ProductDetails from "@/components/pages/productDetailsPage/ProductDetails"
import ProductDetailsSkeleton from "@/components/pages/productDetailsPage/ProductDetailsSkeleton"
import { Product } from "@/types/product/product.type"
import { Metadata } from "next"
import { Suspense } from "react"

export interface ProductDetailsPageProps {
    params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: ProductDetailsPageProps): Promise<Metadata> {
    const { id } = await params;
    const product: Product = await getSingleProduct(id);
    return {
        title: `পণ্য । ${product.nameBn}`,
    }
}

// export async function generateStaticParams() {
//     const products: Product[] = await getAllProducts();
//     return products.map((product) => ({
//         id: product.id,
//     }));
// }

export default function ProductDetailsPage({ params }: ProductDetailsPageProps) {

    return (
        <>

            <Suspense fallback={<ProductDetailsSkeleton></ProductDetailsSkeleton>}>
                <ProductDetails params={params}></ProductDetails>
            </Suspense>
        </>
    )
}