import { CategoryType } from "@/types/category/category.type";
import { Product } from "@/types/product/productType";
import CategoryProducts from "./categoryProducts/CategoryProducts";

export interface CategoryPageProps {
    params: Promise<{ slug: string }>
}

export default async function CategoryPage({ params }: CategoryPageProps) {
    const convertToBanglaLocale = (number: number) => {
        return new Intl.NumberFormat('bn-BD').format(number);
    };
    const { slug } = await params;
    // fetch1
    const [productsRes, categoryRes] = await Promise.all([
       
        fetch(`https://api.api-store.workers.dev/api/bazardor/products?category=${slug}`, { cache: 'no-store' }),
        fetch(`https://api.api-store.workers.dev/api/bazardor/categories/${slug}`)

        // fetch(`https://api.abcz.workers.dev/api/bazardor/products?category=${slug}`, { cache: 'no-store' }),
        // fetch(`https://api.abcz.workers.dev/api/bazardor/categories/${slug}`)
    ]);

    const products: Product[] = await productsRes.json();
    const category: CategoryType = await categoryRes.json();



    return (
        <>
            <div className="max-w-5xl mx-auto py-6 px-4 space-y-6 mb-23">
                <div className="p-5 rounded-2xl bg-base-100 border border-base-300">
                    <div className="flex items-center gap-3">
                        <p className="text-4xl">{category.icon}</p>
                        <div>
                            <h2 className="text-[#1d271f] text-2xl leading-6 font-bold">{category.nameBn}</h2>
                            <p className="text-[#1D271F]/70 text-sm mt-2">{convertToBanglaLocale(Number(products.length))}টি পণ্যের আজকের দাম ও পরিবর্তন</p>
                        </div>
                    </div>
                </div>

                <CategoryProducts products={products}></CategoryProducts>


            </div>
        </>
    )
}