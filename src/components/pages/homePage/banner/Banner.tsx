'use client'
import { banglaToday } from "@/func/today";
import { Button, Link } from "@heroui/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const Banner = () => {

    const [banglaDate, setBanglaDate] = useState('');
    useEffect(() => {
        function updateDate() {
            setBanglaDate(banglaToday());
        }

        updateDate();
    }, [])

    return (
        <>
            <div className="py-2 px-4 bg-c-base-100 border border-c-base-300 rounded-2xl flex items-center justify-between ">
                <div>
                    <p className="w-fit px-3 py-1 rounded-full bg-primary/10 text-primary text-14-medium-20 mb-2">{banglaDate}</p>
                    <h1 className="text-36-bold-45 mb-5">আজকের বাজারের দাম এক নজরে</h1>
                    <p className="max-w-xl text-16-regular-24 text-base-content/70 mb-7">চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>
                    <Link href="#allProducts" className={'no-underline'}><Button className={'text-primary-content text-14-semibold-21 bg-primary border border-primary-strong hover:bg-hover-link-primary hover:border-hover-primary-border hover:shadow-md shadow-primary transition-all'}>সব পণ্য দেখুন</Button></Link>
                </div>
                <Image
                    src='/bazar-hero.png'
                    alt="hero image"
                    width={315}
                    height={263}
                ></Image>
            </div>

        </>
    );
};

export default Banner;