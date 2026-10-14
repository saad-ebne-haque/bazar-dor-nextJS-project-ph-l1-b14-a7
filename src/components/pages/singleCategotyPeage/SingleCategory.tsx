



import { getProductsByCategory, getSingleCategoty } from "@/apis/api"
import { convertToBanglaLocale } from "@/func/banglaConvertFunction";
import { CategoryType } from "@/types/category/category.type"
import { Product } from "@/types/product/product.type";
import CategoryProducts from "./categoryProducts/CategoryProducts";


export interface SingleCategoryProps {
    params: Promise<{ slug: string }>
}





export default async function SingleCategory({ params }: SingleCategoryProps) {
    const { slug } = await params;




    const [category, categoriesProducts]: [CategoryType, Product[]] = await Promise.all([getSingleCategoty(slug), getProductsByCategory(slug)]);

    return (
        <div className="py-6 px-4 space-y-6 mb-23">


            <div className="p-5.25 bg-c-base-100 border border-c-base-300 rounded-2xl flex items-center gap-3 w-full">
                <p className="text-4xl">{category.icon}</p>
                <div>
                    <h2 className="text-24-bold-32">{category.nameBn}</h2>
                    <p className="text-14-regular-20 text-base-content/70">{convertToBanglaLocale(Number(categoriesProducts.length))} টি পণ্যের আজকের দাম ও পরিবর্তন</p>
                </div>
            </div>

            <CategoryProducts products={categoriesProducts}></CategoryProducts>


        </div>
    )
}