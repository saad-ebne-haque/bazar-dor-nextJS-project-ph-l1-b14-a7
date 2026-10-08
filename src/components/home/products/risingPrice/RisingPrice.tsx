import ProductCard from "@/components/shared/productCard/ProductCard";
import type { Product } from "@/types/product/productType"

export interface RisingPriceProps {
    products: Product[];
}

export default function RisingPrice({ products }: RisingPriceProps) {

    const risingProducts: Product[] = products.filter(product => product.change.dir === 'up').sort((a, b) => b.change.pct - a.change.pct).slice(0, 6);

    return (
        <section className="max-w-5xl mx-auto">
            <h3  className="mb-3"><span className="mr-2 text-[#A43532]">▲</span> <span className="text-[#1D271F] font-bold text-xl tracking-tight">আজ দাম বেড়েছে</span></h3>

            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    risingProducts.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                }
            </div>
        </section>
    )
}