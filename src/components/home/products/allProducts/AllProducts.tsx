import ProductCard from "@/components/shared/productCard/ProductCard";
import type { Product } from "@/types/product/productType"

export interface AllProductsProps {
    products: Product[];
}

export default function AllProducts({ products }: AllProductsProps) {

    return (
        <>
            <section className="max-w-5xl mx-auto mb-18 scroll-mt-30" id="allProducts">
                <h3 className=" text-[#1D271F] font-bold text-xl tracking-tight"> সব পণ্য</h3>
                <p className="my-3 text-sm text-[#1D271F]/70">মোট ৩৩টি পণ্য দেখানো হচ্ছে</p>
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        products.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                    }
                </div>
            </section>
        </>
    )
}