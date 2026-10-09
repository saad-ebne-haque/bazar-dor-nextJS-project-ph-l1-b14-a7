import ProductDetails from "@/components/productDetailsPage/productDetails/ProductDetails"
import Loading from "@/components/shared/loading/Loading"
import { Product } from "@/types/product/productType"
import { Metadata } from "next"
import { Params } from "next/dist/server/request/params"
import { Suspense } from "react"

export interface ProductDetailsPageProps {
    params: Promise<{ id: string }>
}

export const generateStaticParams = async (): Promise<Params[]> => {
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products/');
    // const res = await fetch('https://api.abcz.workers.dev/api/bazardor/products');
    const products: Product[] = await res.json();

    return products.map(product =>
        ({ id: String(product.id) })
    )
}

export const generateMetadata = async ({ params }: ProductDetailsPageProps): Promise<Metadata> => {
    const { id } = await params
    const res = await fetch(`https://api.api-store.workers.dev/api/bazardor/products/${id}`);
    // const res = await fetch(`https://api.abcz.workers.dev/api/bazardor/products/${id}`);
    const product: Product = await res.json();

    return {
        title: `পন্য । ${product.nameBn}`,
        description: `বাজারদর - ${product.nameBn} পন্যের আজকের দাম ও পরিবর্তন`,
    }
};



export default function ProductDetailsPage({ params }: ProductDetailsPageProps) {



    return (
        <>
            <Suspense fallback={<Loading></Loading>}>
                <ProductDetails params={params}></ProductDetails>
            </Suspense>
        </>
    )
}