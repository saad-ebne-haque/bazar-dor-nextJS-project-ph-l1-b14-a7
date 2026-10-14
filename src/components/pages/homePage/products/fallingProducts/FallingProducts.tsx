import ProductCard from "@/components/shared/ProductCard";
import { Product } from "@/types/product/product.type";

export interface FallingProductsProps {
    products: Product[]
}

export default function FallingProducts({ products }: FallingProductsProps) {
    const fallingProducts: Product[] = products.filter(product => product.change.dir === 'down').slice(0,6);
    return (
        <div>
            <h2 className="text-20-bold-28 mb-3"><span className="text-success">▼</span>আজ দাম কমেছে</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    fallingProducts.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                }
            </div>
        </div>
    )
}