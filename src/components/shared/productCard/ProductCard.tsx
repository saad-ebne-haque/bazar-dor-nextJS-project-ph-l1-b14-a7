import { Product } from "@/types/product/productType"
import { Card, Chip } from "@heroui/react"


export interface ProductCardProps {
    product: Product
}

export default function ProductCard({ product }: ProductCardProps) {

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



    const changePCT_BN = convertToBanglaLocale(product.change.pct);
    const todaysPrice_BN = convertToBanglaLocale(product.today);
    const units_BN = convertUnitToBangla(product.unit);

    return (
        <>
            <Card className="w-full  rounded-3xl border border-base-300 bg-base-100 p-4 shadow-sm backdrop-blur-sm cursor-pointer hover:shadow-xl active:scale-99 transition-all duration-150 ">
                <Card.Content className="p-0 flex flex-col gap-4">

                    <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center  bg-base-200 rounded-xl text-2xl">
                            {product.image}
                        </div>
                        <div className="flex flex-col">
                            <h4 className="text-base font-semibold text-[#1D271F]  leading-loose">
                                {product.nameBn}
                            </h4>
                            <span className="text-xs text-[#1D271F] ">
                                প্রতি {units_BN}
                            </span>
                        </div>
                    </div>


                    <div className="flex items-end justify-between pt-1">
                        <div className="flex flex-col">
                            <span className="text-xs text-[#1D271F] ">
                                আজকের দাম
                            </span>
                            <div className="flex items-baseline gap-1">
                                <span className="text-xl font-bold  text-[#1D271F] tracking-tighter">
                                    {todaysPrice_BN}
                                </span>
                                <span className="text-sm font-medium text-[#1D271F]">
                                    টাকা
                                </span>
                            </div>
                        </div>


                        <Chip
                            size="sm"
                            variant="soft"
                            color={product.change.dir === 'up' ? 'danger' : product.change.dir === 'down' ? 'success' : 'default'}
                            className="h-6 px-2 text-xs font-bold rounded-full flex items-center gap-1"
                        >
                            <span className="text-xs leading-none">{product.change.dir === 'up' ? '▲' : product.change.dir === 'down' ? '▼' : product.change.dir === 'flat' && '—'}</span>
                            <Chip.Label>{changePCT_BN}%</Chip.Label>
                        </Chip>
                    </div>
                </Card.Content>
            </Card>
        </>
    )
}