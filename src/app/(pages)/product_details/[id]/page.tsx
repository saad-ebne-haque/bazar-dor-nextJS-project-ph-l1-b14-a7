import ProductDetails from "@/components/pages/productDetailsPage/ProductDetails"
import { Suspense } from "react"

export interface ProductDetailsPageProps {
    params: Promise<{ id: string }>
}

export default function ProductDetailsPage({ params }: ProductDetailsPageProps) {

    return (
        <>

            <Suspense>
                <ProductDetails params={params}></ProductDetails>
            </Suspense>
        </>
    )
}