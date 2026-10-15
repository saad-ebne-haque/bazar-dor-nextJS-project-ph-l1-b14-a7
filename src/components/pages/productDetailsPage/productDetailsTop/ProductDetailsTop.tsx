import { convertToBanglaLocale, convertUnitToBangla } from "@/func/banglaConvertFunction"
import { Product } from "@/types/product/product.type"

export interface ProductDetailsTopProps {
    product: Product
}

export default function ProductDetailsTop({ product }: ProductDetailsTopProps) {

    return (
        <div className="bg-c-base-100 border border-c-base-300 rounded-2xl p-5.25 flex items-center gap-4 ">

            <h1 className="bg-c-base-200 rounded-xl text-4xl p-5 ">{product.image}</h1>

            <div className="grow">
                <h1 className="text-30-bold-36 ">{product.nameBn}</h1>
                <p className="mb-2 text-14-regular-20">প্রতি {convertUnitToBangla(product.unit)} · {product.categoryNameBn}</p>
                <p className="text-14-regular-20">
                    গতকালের তুলনায় আজ দাম <span className="text-14-semibold-20 ">{product.today > product.yesterday ? 'বেড়েছে' : product.today < product.yesterday ? 'কমেছে' : 'সমান'}</span> {product.today > product.yesterday ? `· ${convertToBanglaLocale(Number(product.today - product.yesterday))} টাকা` : product.today < product.yesterday ? `· ${convertToBanglaLocale(Number(product.yesterday - product.today))} টাকা` : ''}
                </p>
            </div>

            <div className="px-5 py-4 bg-c-base-200 rounded-xl text-center">

                <p className="text-base-content/70 text-14-regular-20 ">আজকের দাম</p>
                <h2 className="text-30-bold-36">{convertToBanglaLocale(Number(product.today))}</h2>
                <p className="text-base-content/70 text-14-regular-20">টাকা/{convertUnitToBangla(product.unit)}</p>

                <p className={`text-14-semibold-20 ${product.change.dir === 'up' ? 'text-error' : product.change.dir === 'down' ? 'text-success' : ''}`}>{product.change.dir === 'up' ? '▲' : product.change.dir === 'down' ? '▼' : '—'} {convertToBanglaLocale(Number(product.change.pct))}%</p>
            </div>

        </div>
    )
}