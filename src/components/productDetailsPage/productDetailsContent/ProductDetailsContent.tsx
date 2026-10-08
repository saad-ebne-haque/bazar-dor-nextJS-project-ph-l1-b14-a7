"use client";
import { Product } from "@/types/product/productType";
import { Breadcrumbs } from "@heroui/react";

export interface ProductDetailsContentProps {
    product: Product;
}

export default function ProductDetailsContent({ product }: ProductDetailsContentProps) {

    // functions:
    const convertToBanglaLocale = (number: number) => {
        return new Intl.NumberFormat('bn-BD').format(number);
    };

    const convertUnitToBangla = (unit: string): string => {
        if (!unit) return '';


        const lowerUnit = unit.toLowerCase().trim();

        switch (lowerUnit) {
            case 'kg':
                return 'কেজি';
            case 'litre':
                return 'লিটার';
            case 'dozen':

                return 'ডজন';

            case 'piece':
                return 'পিস';
            default:
                return unit;
        }
    };



    const priceDifferenceStutas = product.today === product.yesterday ? 'সমান' : product.today > product.yesterday ? 'বেড়েছে' : 'কমেছে';

    const priceDefference = product.today === product.yesterday ? 0 : product.today > product.yesterday ? product.today - product.yesterday : product.yesterday - product.today;


    const minPrice = Math.min(...product.markets.map(item => item.min));
    const maxPrice = Math.max(...product.markets.map(item => item.max));
    const avgPrice = (product.markets.map(item => ((item.max + item.min) / 2)).map(Number).reduce((acc, curr) => acc + curr, 0) / product.markets.length).toFixed(2);

    return (
        <div className="max-w-5xl mx-auto py-6 px-4 space-y-6">
            <Breadcrumbs className=" text-red-600">
                <Breadcrumbs.Item href="/">হোম</Breadcrumbs.Item>
                <Breadcrumbs.Item href={`/category/${product.category}`}>{product.categoryNameBn}</Breadcrumbs.Item>
                <Breadcrumbs.Item>{product.nameBn}</Breadcrumbs.Item>
            </Breadcrumbs>

            <div className="bg-base-100 border border-base-300 rounded-2xl w-full p-5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <p className="text-4xl p-5 bg-base-200 rounded-2xl w-fit">{product.image}
                    </p>
                    <div className="space-y-0.5">
                        <h1 className="text-[#1D271F] font-bold text-3xl leading-8">{product.nameBn}</h1>
                        <p className="text-[#1D271F]/70 text-sm leading-6">প্রতি {convertUnitToBangla(product.unit)} · {product.categoryNameBn}</p>
                        <p className="text-[#1D271F] text-sm ">গতকালের তুলনায় আজ দাম <span className="font-semibold">{priceDifferenceStutas}</span> · {convertToBanglaLocale(priceDefference)} টাকা</p>
                    </div>
                </div>



                <div className="py-4 px-5 rounded-2xl bg-base-200 flex flex-col items-center">
                    <p className="text-[#1D271F]/70 text-sm">আজকের দাম</p>
                    <h1 className="text-[#1D271F] text-3xl font-bold leading-8 tracking-tighter">{convertToBanglaLocale(product.today)}</h1>
                    <p className="text-[#1D271F]/70 text-sm">টাকা / {convertUnitToBangla(product.unit)}
                    </p>
                    <div className={`${product.change.dir === 'up' ? 'text-danger' : product.change.dir === 'down' ? 'text-success' : 'text-gray-300'} flex items-center gap-1 text-sm font-semibold`}><p>{product.change.dir === 'up' ? '▲' : product.change.dir === 'down' ? '▼' : '—'}</p><p>{convertToBanglaLocale(product.change.pct)}%</p></div>
                </div>
            </div>

            <div className="p-5 bg-base-100 border border-base-300 space-y-6 rounded-2xl">
                <div className="space-y-3 ">
                    <h3 className="text-[#1D271F] font-semibold text-lg">দামের সারসংক্ষেপ</h3>
                    <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
                        <div className="px-6 py-4 rounded-2xl bg-base-100 border border-base-300 w-full">
                            <p className="text-[#1D271F] text-xs">সর্বনিম্ন দাম</p>
                            <h1 className="text-success text-2xl font-bold">{convertToBanglaLocale(minPrice)} <span className="text-sm font-medium">টাকা</span></h1>
                            <p className="text-[#1D271F] text-xs">সবচেয়ে কম দামের বাজার</p>
                        </div>
                        <div className="px-6 py-4 rounded-2xl bg-base-100 border border-base-300 w-full">
                            <p className="text-[#1D271F] text-xs">সর্বাধিক দাম</p>
                            <h1 className="text-danger text-2xl font-bold">{convertToBanglaLocale(maxPrice)} <span className="text-sm font-medium">টাকা</span></h1>
                            <p className="text-[#1D271F] text-xs">সবচেয়ে বেশি দামের বাজার</p>
                        </div>
                        <div className="px-6 py-4 rounded-2xl bg-base-100 border border-base-300 w-full">
                            <p className="text-[#1D271F] text-xs">গড় দাম</p>
                            <h1 className="text-[#05893E] text-2xl font-bold">{convertToBanglaLocale(Number(avgPrice))} <span className="text-sm font-medium">টাকা</span></h1>
                            <p className="text-[#1D271F] text-xs">প্রতি কেজি-এর হিসাবে</p>
                        </div>
                    </div>
                </div>
                <div className="space-y-3">
                    <h3 className="text-[#1D271F] font-semibold text-lg">বাজারভিত্তিক আজকের দাম</h3>

                    <div className="w-full  bg-base-100 border border-base-300 rounded-xl  overflow-auto">

                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className=" text-[#1D271F]/60 text-sm font-bold border-b border-[#1D271F]/5">
                                    <th className="py-3 px-4">বাজার</th>
                                    <th className="py-3 px-4 text-center">বিভাগ</th>
                                    <th className="py-3 px-4 text-center">সর্বনিম্ন</th>
                                    <th className="py-3 px-4 text-center">সর্বাধিক</th>
                                    <th className="py-3 px-4 text-right">গড়</th>
                                </tr>
                            </thead>
                            <tbody>
                                {

                                    product.markets.map((item, index) => {
                                        const avg = ((item.min + item.max) / 2).toFixed(2);

                                        const rowBgClass = index % 2 === 0 ? '' : 'bg-base-200';
                                        const isLastRow = index === product.markets.length - 1;
                                        return (
                                            <tr key={index} className={`${rowBgClass} ${isLastRow ? 'border-b-0' : 'border-b'}  border-[#1D271F] text-sm text-[#1d271f]`}>
                                                <td className="py-3.5 px-4 font-light">{item.market}</td>
                                                <td className="py-3.5 px-4 text-center">{item.division}</td>
                                                <td className="py-3.5 px-4 text-center">{convertToBanglaLocale(Number(item.min))} টাকা</td>
                                                <td className="py-3.5 px-4 text-center">{convertToBanglaLocale(Number(item.max))} টাকা</td>
                                                <td className="py-3.5 px-4 text-right font-semibold">{convertToBanglaLocale(Number(avg))} টাকা</td>
                                            </tr>
                                        );
                                    })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}