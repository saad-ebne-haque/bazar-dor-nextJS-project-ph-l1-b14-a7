import ProductCard from "@/components/shared/ProductCard"
import { Product } from "@/types/product/product.type"

export interface RisingProductsProps {
    products: Product[]
}

export default function RisingProducts({ products }: RisingProductsProps) {
    const risingProducts: Product[] = products.filter(product => product.change.dir === 'up').slice(0, 6);
    return (
        <div>
            <h2 className="text-20-bold-28 mb-3"><span className="text-error">▲</span>আজ দাম বেড়েছে</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    risingProducts.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                }
            </div>
        </div>
    )
}