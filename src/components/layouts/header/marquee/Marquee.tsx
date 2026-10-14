import { convertToBanglaLocale, convertUnitToBangla } from "@/func/banglaConvertFunction";
import { Product } from "@/types/product/product.type";
import Marquee from "react-fast-marquee";

interface MarqueeProps {
    products: Product[]
}

const MarqueeComponents = ({ products }: MarqueeProps) => {



    return (
        <div className="min-h-9.25">
            <Marquee pauseOnHover>
                {
                    products.map(product => <div key={product.id} className="flex items-center gap-1.5 px-4 py-2 border-r border-c-base-200">
                        <p className="text-14-regular-20">{product.image}</p>
                        <p className="text-14-medium-20">{product.nameBn}</p>
                        <p className="text-14-regular-20">{convertToBanglaLocale(Number(product.today))} টাকা/{convertUnitToBangla(product.unit)}</p>
                        <p className={`text-14-semibold-20 ${product.change.dir === 'up' ? 'text-error' : product.change.dir === 'down' ? 'text-success' : 'text-base-content'}`}>{product.change.dir === 'up' ? '▲' : product.change.dir === 'down' ? '▼' : '—'} {convertToBanglaLocale(Number(product.change.pct))}%</p>
                    </div>)
                }

            </Marquee>
        </div>
    );
};

export default MarqueeComponents;