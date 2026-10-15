import { Product } from "@/types/product/product.type"
import { Breadcrumbs } from "@heroui/react"

export interface PathProps {
    product: Product
}

export default function Path({ product }: PathProps) {
   

    return (
        <>
            <Breadcrumbs >
                <Breadcrumbs.Item href="/">হোম</Breadcrumbs.Item>
                <Breadcrumbs.Item href={`/categories/${product.category}`}>{product.categoryNameBn}</Breadcrumbs.Item>
                <Breadcrumbs.Item>{product.nameBn}</Breadcrumbs.Item>
            </Breadcrumbs>
        </>
    )
}