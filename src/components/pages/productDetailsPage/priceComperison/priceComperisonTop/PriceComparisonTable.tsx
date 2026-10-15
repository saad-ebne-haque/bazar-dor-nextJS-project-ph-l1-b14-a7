import { convertToBanglaLocale } from "@/func/banglaConvertFunction";
import { Product } from "@/types/product/product.type"

export interface PriceComparisonTableProps {
    product: Product
}

export default function PriceComparisonTable({ product }: PriceComparisonTableProps) {

    return (
        <div className="space-y-3">
            <h4 className="text-18-semibold-28">বাজারভিত্তিক আজকের দাম</h4>
            <div className="p-px rounded-2xl border border-c-base-300 overflow-auto w-full">
                <table className="w-full">
                    <thead className="border-b border-base-content/5 w-full">
                        <tr className="w-full">
                            <th className=" text-base-content/60 px-4 py-3 text-14-bold-21 text-left">বাজার</th>
                            <th className=" text-base-content/60 px-4 py-3 text-14-bold-21 text-left">বিভাগ</th>
                            <th className=" text-base-content/60 px-4 py-3 text-14-bold-21 text-right">সর্বনিম্ন</th>
                            <th className=" text-base-content/60 px-4 py-3 text-14-bold-21 text-right">সর্বাধিক</th>
                            <th className=" text-base-content/60 px-4 py-3 text-14-bold-21 text-right">গড়</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            product.markets.map((market, i) => {

                                const lastIndex = i === product.markets.length - 1;
                                const evenIndex = i % 2 === 0;

                                return (
                                    <tr key={i} className={`${evenIndex && 'bg-c-base-200'} ${!lastIndex && 'border-b border-base-content hover:bg-c-base-300'}`}>
                                        <td className=" px-4 py-3 text-14-medium-21">{market.market}</td>
                                        <td className=" px-4 py-3 text-14-regular-21">{market.division}</td>
                                        <td className=" px-4 py-3 text-14-regular-21 text-right">{convertToBanglaLocale(Number(market.min))} টাকা</td>
                                        <td className=" px-4 py-3 text-14-regular-21 text-right">{convertToBanglaLocale(Number(market.max))} টাকা</td>
                                        <td className=" px-4 py-3 text-14-semibold-21 text-right">{convertToBanglaLocale(Number(((market.min + market.max) / 2).toFixed(2)))} টাকা</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}