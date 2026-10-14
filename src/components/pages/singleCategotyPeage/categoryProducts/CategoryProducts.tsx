'use client';


import ProductCard from "@/components/shared/ProductCard";
import { convertToBanglaLocale } from "@/func/banglaConvertFunction";
import { Product } from "@/types/product/product.type"
import { useState } from "react";
import Sorting from "./Sorting";

export interface CategoryProductsProps {
    products: Product[];
}

export default function CategoryProducts({ products }: CategoryProductsProps) {


    const [sortedProducts, setSortedProducts] = useState<Product[]>(products);
    const [currentSort, setCurrentSort] = useState<string>("");

    const handleSorting = (value: string): void => {
        setCurrentSort(value);
        const newProducts: Product[] = [...products];
        if (value === 'high-to-low') {
            newProducts.sort((a, b) => b.today - a.today);
        } else if (value === 'low-to-high') {
            newProducts.sort((a, b) => a.today - b.today);
        }
        setSortedProducts(newProducts);
    }

    const displayProducts: Product[] = currentSort ? sortedProducts : products;
    return (
        <>

            <div >
                <Sorting handleSorting={handleSorting}></Sorting>

                <p className="text-14-regular-20 mt-4 text-base-content/70">মোট {convertToBanglaLocale(Number(displayProducts.length))} টি পণ্য দেখানো হচ্ছে</p>.

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        displayProducts.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                    }
                </div>
            </div>

        </>
    )
}

