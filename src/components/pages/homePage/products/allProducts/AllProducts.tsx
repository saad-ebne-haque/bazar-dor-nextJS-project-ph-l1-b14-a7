import ProductCard from "@/components/shared/ProductCard";
import { convertToBanglaLocale } from "@/func/banglaConvertFunction";
import { Product } from "@/types/product/product.type"

export interface AllProductsProps {
    products: Product[];
}

export default function AllProducts({ products }: AllProductsProps) {

    return (
        <div id="allProducts" className="scroll-mt-32">
            <h2 className="text-20-bold-28 mb-3">সব পণ্য</h2>
            <p className="text-14-regular-20 mb-4">মোট {convertToBanglaLocale(products.length)}টি পণ্য দেখানো হচ্ছে</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    products.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                }
            </div>
        </div>
    )
}