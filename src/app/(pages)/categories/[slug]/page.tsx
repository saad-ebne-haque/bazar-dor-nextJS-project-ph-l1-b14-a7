import { getAllCategories, getSingleCategoty } from "@/apis/api"
import SingleCategory from "@/components/pages/singleCategotyPeage/SingleCategory"
import SingleCategorySkeleton from "@/components/pages/singleCategotyPeage/SingleCategorySkeleton"
import { CategoryType } from "@/types/category/category.type"
import { Metadata } from "next"
import { Suspense } from "react"



export interface SingleCategoryPageProps {
    params: Promise<{ slug: string }>
}



export async function generateMetadata({ params }: SingleCategoryPageProps): Promise<Metadata> {
    const { slug } = await params;
    try {
        const category: CategoryType = await getSingleCategoty(slug);
        return {
            title: `পন্য বিভাপ । ${category.nameBn}`,
        }
    } catch {
        return {
            title: 'পন্য বিভাগ । not found'
        }
    }
}

export async function generateStaticParams() {
    const categories: CategoryType[] = await getAllCategories();
    return categories.map((category) => ({
        slug: category.slug,
    }));
}





export default function SingleCategoryPage({ params }: SingleCategoryPageProps) {


    return (
        <>
            <Suspense fallback={<SingleCategorySkeleton></SingleCategorySkeleton>}>
                <SingleCategory params={params}></SingleCategory>
            </Suspense>
        </>
    )
}