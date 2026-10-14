import { convertToBanglaLocale, convertUnitToBangla } from "@/func/banglaConvertFunction";
import { Product } from "@/types/product/product.type"

export interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {

    return (
        <div className="bg-c-base-100 border border-c-base-300 rounded-2xl p-4 space-y-3 hover:shadow -hover:translate-y-1 active:scale-99 transition-all duration-300" >
            <div className="flex items-start gap-3">
                <p className="bg-c-base-200 rounded-2xl px-3 py-2 text-24-bold-32">{product.image}</p>
                <div>
                    <h2 className="text-16-semibold-24">{product.nameBn}</h2>
                    <p className="text-12-regular-16">প্রতি {convertUnitToBangla(product.unit)}</p>
                </div>
            </div>
            <div className="flex justify-between items-end">
                <div>
                    <p className="text-12-regular-16">আজকের দাম</p>
                    <h3 className="text-20-bold-28">১৪৮ <span className="text-14-medium-20">টাকা</span></h3>
                </div>
                <p className={` text-12-semibold-16 px-2 py-1 rounded-full ${product.change.dir === 'up' ? 'text-error bg-error/10' : product.change.dir === "down" ? "text-success bg-success/10" : "text-base-content bg-base-content/10"}`}>{product.change.dir === 'up' ? '▲' : product.change.dir === "down" ? '▼' : '—'} {convertToBanglaLocale(Number(product.change.pct))}%</p>
            </div>
        </div>
    )
}