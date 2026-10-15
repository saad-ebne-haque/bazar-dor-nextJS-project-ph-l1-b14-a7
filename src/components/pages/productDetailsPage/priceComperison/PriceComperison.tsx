import { Product } from "@/types/product/product.type"
import PricecomperisonTop from "./priceComperisonTop/PricecomperisonTop"
import PriceComparisonTable from "./priceComperisonTop/PriceComparisonTable"

export interface PriceComperisonProps {
    product: Product
}

export default function PriceComperison({ product }: PriceComperisonProps) {

    return (
        <div className="p-5 space-y-6 bg-c-base-100 border border-c-base-300 rounded-2xl">
            <PricecomperisonTop product={product}></PricecomperisonTop>
            <PriceComparisonTable product={product}></PriceComparisonTable>
        </div>
    )
}