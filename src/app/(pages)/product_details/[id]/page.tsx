import ProductDetails from "@/components/pages/productDetailsPage/ProductDetails"
import ProductDetailsSkeleton from "@/components/pages/productDetailsPage/ProductDetailsSkeleton"
import { Suspense } from "react"

export interface ProductDetailsPageProps {
    params: Promise<{ id: string }>
}

export default function ProductDetailsPage({ params }: ProductDetailsPageProps) {

    return (
        <>

            <Suspense fallback={<ProductDetailsSkeleton></ProductDetailsSkeleton>}>
                <ProductDetails params={params}></ProductDetails>
            </Suspense>
        </>
    )
}