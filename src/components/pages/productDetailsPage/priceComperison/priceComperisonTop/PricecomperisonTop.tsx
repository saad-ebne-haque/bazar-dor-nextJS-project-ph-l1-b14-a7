import { convertToBanglaLocale, convertUnitToBangla } from "@/func/banglaConvertFunction";
import { Product } from "@/types/product/product.type"

export interface PricecomperisonTopProps {
    product: Product
}

export default function PricecomperisonTop({ product }: PricecomperisonTopProps) {

    const highestPrices: number[] = product.markets.map(market => market.max);
    const highestPrice = Math.max(...highestPrices);

    const lowestPrices: number[] = product.markets.map(market => market.min);
    const lowestPrice = Math.min(...lowestPrices);

    const averagePrices: number[] = product.markets.map(market => (market.max + market.min) / 2);
    const averagePrice = (averagePrices.reduce((acc, curr) => acc + curr, 0) / averagePrices.length).toFixed(2);


    return (
        <div>
            <h4 className="mb-3 text-18-semibold-28">দামের সারসংক্ষেপ</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">


                <div className="w-full border border-c-base-300 rounded-2xl px-6 py-4 hover:shadow-md transition-shadow">
                    <p className="text-12-regular-18">সর্বনিম্ন দাম</p>
                    <h3 className="text-success text-24-bold-32">{convertToBanglaLocale(lowestPrice)} <span className="text-14-medium-20">টাকা</span></h3>
                    <p className="text-12-regular-18">সবচেয়ে কম দামের বাজার</p>
                </div>


                <div className="w-full border border-c-base-300 rounded-2xl px-6 py-4 hover:shadow-md transition-shadow">
                    <p className="text-12-regular-18">সর্বাধিক দাম</p>
                    <h3 className="text-error text-24-bold-32">{convertToBanglaLocale(highestPrice)} <span className="text-14-medium-20">টাকা</span></h3>
                    <p className="text-12-regular-18">সবচেয়ে বেশি দামের বাজার</p>
                </div>

                <div className="w-full border border-c-base-300 rounded-2xl px-6 py-4 hover:shadow-md transition-shadow">
                    <p className="text-12-regular-18">গড় দাম</p>
                    <h3 className="text-primary text-24-bold-32">{convertToBanglaLocale(Number(averagePrice))} <span className="text-14-medium-20">টাকা</span></h3>
                    <p className="text-12-regular-18">প্রতি {convertUnitToBangla(product.unit)}-এর হিসাবে</p>
                </div>


            </div>
        </div>
    )
}