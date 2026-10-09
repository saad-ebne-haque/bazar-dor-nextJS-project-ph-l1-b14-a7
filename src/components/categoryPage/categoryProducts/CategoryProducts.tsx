"use client";
import { Product } from "@/types/product/productType"
import Sorting from "../sorting/Sorting";
import ProductCard from "@/components/shared/productCard/ProductCard";
import { useState } from "react";

export interface CategoryProductsProps {
    products: Product[];
}

export default function CategoryProducts({ products }: CategoryProductsProps) {
    const convertToBanglaLocale = (number: number) => {
        return new Intl.NumberFormat('bn-BD').format(number);
    };

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
            <div className="space-y-4">
                <div className="p-4 bg-base-100 border border-base-300 rounded-2xl flex items-center justify-end gap-2">
                    <p className="text-[#1D271F]/70 text-sm ">সাজান</p>
                    <Sorting handleSorting={handleSorting}></Sorting>
                </div>
                <p className="text-[#1D271F]/70 text-sm">মোট {convertToBanglaLocale(Number(products.length))}টি পণ্য দেখানো হচ্ছে</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        displayProducts.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                    }
                </div>
            </div>
        </>
    )
}