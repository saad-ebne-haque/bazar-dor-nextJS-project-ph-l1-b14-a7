import { Button, Link } from "@heroui/react";
import Image from "next/image";

const Banner = () => {
    return (
        <section className="relative overflow-hidden py-12 md:py-20 " >

            <div className="mx-auto max-w-5xl px-4 md:px-6 py-4 bg-[#FAFCFA] rounded-xl shadow border border-[#E1E8E1]">
                <div className="flex flex-col items-center gap-10 md:flex-row lg:gap-14 justify-between">


                    <div className="flex flex-col items-start text-left">
                        <span className="mb-3 inline-block rounded-full bg-[#05893E]/10 px-3.5 py-1 text-xs font-medium text-[#05893E]">
                            মঙ্গলবার, ৬ অক্টোবর, ২০২৬
                        </span>

                        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-4xl text-[#1D271F] leading-tight">
                            আজকের বাজারের দাম এক নজরে
                        </h1>

                        <p className="mt-4 text-sm sm:text-base text-[#1D271F]/70 leading-relaxed max-w-lg">
                            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
                        </p>

                        <div className="mt-7 flex flex-wrap items-center gap-3">
                            <Link className='no-underline' href="#allProducts">
                                <Button
                                    size="lg"
                                    className="bg-[#05893E] text-[#F3FBF4] font-medium shadow-md shadow-[#05893E]/20 hover:bg-[#046e32]"
                                >
                                    সব পণ্য দেখুন
                                </Button>
                            </Link>

                        </div>
                    </div>


                    <div className="relative flex justify-center items-center">
                        <div className="relative w-full overflow-hidden ">
                            <Image
                                src="/bazar-hero.png"
                                alt="Hero Image"
                                className="w-auto h-auto"
                                width={300}
                                height={300}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Banner;