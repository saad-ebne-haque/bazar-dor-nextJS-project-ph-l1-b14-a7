"use client";

import { Button, Link } from "@heroui/react";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { CategoryType } from "@/types/category/category.type";
import { ThreeDot } from "react-loading-indicators";

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const loadCategory = async () => {
            setIsLoading(true);
            try {
                const res = await fetch('https://api.abcz.workers.dev/api/bazardor/categories', {
                    cache: 'force-cache'
                });
                // const res = await fetch('https://api.api-store.workers.dev/api/bazardor/categories', {
                //     cache: 'force-cache'
                // });

                if (!res.ok) {
                    throw new Error('Faild to fetch categories');
                }

                const data = await res.json();
                setCategories(data);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('An unknown error occurred');
                }
            } finally {
                setIsLoading(false);
            }
        }

        loadCategory();
    }, []);

    const lgMenu =
        <>{
            categories.map(category =>

                <li key={category.id}>
                    <Link href={`/category/${category.slug}`} className={'font-semibold text-xs'}>{category.icon} {category.nameBn}</Link>
                </li>
            )
        }</>;
    const smMenu =
        <>{
            categories.map(category =>
                <li key={category.id}>
                    <Link href={`/category/${category.slug}`} className="block py-2 text-center w-full text-xs font-semibold">
                        {category.icon}   {category.nameBn}
                    </Link>
                </li>
            )
        }</>

    return (
        <>
            <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
                <div className="mx-auto max-w-5xl flex flex-col items-center">
                    <header className=" flex h-16  items-center justify-between  w-full">
                        <div className="flex items-center gap-4">
                            <button
                                className="md:hidden cursor-pointer"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                aria-label="Toggle menu"
                                aria-expanded={isMenuOpen}

                            >
                                <span className="sr-only">Menu</span>
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    {isMenuOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    )}
                                </svg>
                            </button>
                            <Link href="/" className="flex items-center gap-3 no-underline cursor-pointer">
                                <Logo />
                                <div>
                                    <p className="font-bold text-xl tracking-tighter text-[#1D271F]">বাজার দর</p>
                                    <p className="text-[#1D271F] text-xs">মঙ্গলবার, ৬ অক্টোবর, ২০২৬</p>
                                </div>
                            </Link>
                        </div>

                        <div className="hidden items-center gap-4 md:flex">
                            <Link href="#" className='text-[#1D271F] text-sm font-semibold'>সাইন ইন</Link>
                            <Button className='text-[#F3FBF4] bg-[#05893E] shadow shadow-[#05893E]/30'>সাইন আপ</Button>
                        </div>
                    </header>

                    <ul className="hidden w-full gap-4 md:flex py-2 items-center justify-center px-4 border-t border-[#F0F5F0]">
                        {
                            isLoading || (categories.length === 0 && !error)
                                ?
                                <ThreeDot text="Loading" color="#05893E" size="small" textColor="#05893E" />
                                :
                                error
                                    ?
                                    <div >
                                        <p className="text-red-500">{error}</p>
                                    </div>
                                    :
                                    lgMenu
                        }

                    </ul>
                </div>
                {isMenuOpen && (
                    <div className="border-t border-separator md:hidden">
                        <ul className="flex flex-col gap-2 p-4">
                            {
                                isLoading || (categories.length === 0 && !error)
                                    ?
                                    <div className="w-full text-center">
                                        <ThreeDot color="#05893E" size="small" text="Loading" textColor="#05893E" />
                                    </div>
                                    :
                                    error
                                        ?
                                        <p className="w-full text-center text-red-500">{error}</p>
                                        :
                                        smMenu
                            }
                            <li className="mt-4 flex flex-col gap-2 border-t border-separator pt-4">
                                <Link href="#" className="block py-2 text-center w-full">
                                    সাইন ইন
                                </Link>
                                <Link className={'w-full no-underline'}>
                                    <Button className="w-full bg-[#05893E] shadow shadow-[#05893E]/30">সাইন আপ</Button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;