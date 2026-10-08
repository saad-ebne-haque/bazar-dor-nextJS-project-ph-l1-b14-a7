import ProductDetails from "@/components/productDetailsPage/productDetails/ProductDetails"
import Loading from "@/components/shared/loading/Loading"
import { Suspense, use } from "react"

export interface PageProps {
    params: Promise<{ id: string }>
}

export default async function Page({ params }: PageProps) {


    return (
        <>
            <Suspense fallback={<Loading></Loading>}>
            <ProductDetails params={params}></ProductDetails>
            </Suspense>
        </>
    )
}