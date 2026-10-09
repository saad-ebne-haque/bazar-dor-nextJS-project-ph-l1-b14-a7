import CategoryPage from "@/components/categoryPage/CategoryPage"
import Loading from "@/components/shared/loading/Loading"
import { CategoryType } from "@/types/category/category.type";
import { Metadata } from "next";
import { Params } from "next/dist/server/request/params";
import { Suspense } from "react"

export interface SingleCategotyPageProps {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams(): Promise<Params[]> {

    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/categories');
    // const res = await fetch('https://api.abcz.workers.dev/api/bazardor/categories');
    const categories: { slug: string }[] = await res.json();


    return categories.map((category) => ({
        slug: category.slug,
    }));
}

export const generateMetadata = async ({ params }: SingleCategotyPageProps): Promise<Metadata> => {
    const { slug } = await params;
    const res = await fetch(`https://api.api-store.workers.dev/api/bazardor/categories/${slug}`);
    // const res = await fetch(`https://api.abcz.workers.dev/api/bazardor/categories/${slug}`);
    const category: CategoryType = await res.json();
    return {
        title: `পণ্য বিভাগ । ${category.nameBn}`,
        description: `বাজারদর - ${category.nameBn} পণ্যসমূহের আজকের দাম ও পরিবর্তন`,
    }
}

export default async function SingleCategotyPage({ params }: SingleCategotyPageProps) {

    return (
        <>
            <Suspense fallback={<Loading></Loading>}>
                <CategoryPage params={params}></CategoryPage>
            </Suspense>
        </>
    )
}