import ProductCard from "@/components/shared/productCard/ProductCard";
import type { Product } from "@/types/product/productType"

export interface FallingPriceProps {
    products: Product[];
}

export default function FallingPrice({ products }: FallingPriceProps) {

    const fallingProducts = products.filter(product => product.change.dir === 'down').sort((a, b) => a.change.pct - b.change.pct).slice(0, 6);



    return (
        <>
            <section className="max-w-5xl mx-auto">
                <h3 className="mb-3"><span className="mr-2 text-[#266F4A]">▼</span> <span className="text-[#1D271F] font-bold text-xl tracking-tight">আজ দাম কমেছে</span></h3>

                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        fallingProducts.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                    }
                </div>
            </section>
        </>
    )
}