"use client";

import { Button, Link } from "@heroui/react";
import { Suspense, useEffect, useState } from "react";
import Logo from "./Logo";
import { banglaToday } from "@/func/today";
import LoggedOut from "./loggedOut/LoggedOut";
import Menu from "./menu/Menu";
import { CategoryType } from "@/types/category/category.type";
import { getAllCategories } from "@/apis/api";
import LoggedIn from "./loggedIn/LoggedIn";
import { useSession } from "@/lib/auth-client";
import { User } from "better-auth";
import PopUp from "./loggedIn/PopUp";

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentDate, setCurrentDate] = useState('');
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [isLoading, setIsLoading] = useState(false);


    const { data, isPending } = useSession();
    const user: User | null = data?.user ? data.user : null;


    useEffect(() => {
        const loadCategories = async () => {
            try {
                setIsLoading(true);
                const data = await getAllCategories();
                setCategories(data);
            } finally {
                setIsLoading(false);
                setCurrentDate(banglaToday());
            }
        }

        loadCategories();
    }, []);


    return (
        <nav className=" w-full border-b bg-c-base-100  ">
            <header className="container mx-auto flex min-h-16  items-center justify-between ">
                <div className="flex items-center gap-4">
                    <button
                        className="md:hidden"
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
                    <Link className="flex items-center gap-2 cursor-pointer no-underline" href="/">
                        <Logo />
                        <div>
                            <h1 className="text-20-bold-28-ls--0-5">বাজার দর</h1>
                            {
                                isLoading ?
                                    <div className="h-4 w-31.75 rounded-md bg-c-base-300 animate-pulse"></div> :
                                    <p className="text-12-regular-16">{currentDate}</p>
                            }
                        </div>
                    </Link>
                </div>

                <div className="hidden items-center gap-4 md:flex">
                    {isPending ?
                        <>
                            <Button className={'text-transparent bg-c-base-300 pointer-events-none'} >*****</Button>
                            <Button className={'text-transparent bg-c-base-300 pointer-events-none'} >*****</Button>
                        </> :
                        user ?
                            <LoggedIn user={user}></LoggedIn> :
                            <LoggedOut></LoggedOut>}
                </div>
            </header>
            <hr className="w-screen" />
            <ul className="hidden items-center gap-4 md:flex w-full px-4 py-2 container mx-auto min-h-12">
                {
                    isLoading ?
                        [1, 2, 3, 4, 5, 6, 7].map((i) =>
                            < li key={i} className='h-8 w-[67.2px] rounded-md text-transparent bg-c-base-300 animate-pulse'></li>
                        )
                        :
                        <Suspense>
                            <Menu categories={categories}></Menu>
                        </Suspense>
                }
            </ul>
            {
                isMenuOpen && (
                    <div className="border-t border-separator md:hidden">
                        <ul className="flex flex-col gap-2 p-4 w-full">
                            {
                                isLoading ?
                                    [1, 2, 3, 4, 5, 6, 7].map((i) => < li key={i} className='h-8 w-[67.2px] rounded-md text-transparent bg-c-base-300 animate-pulse'></li>)
                                    :
                                    <Suspense>
                                        <Menu categories={categories} className="w-full flex justify-center"></Menu>
                                    </Suspense>
                            }
                            <li className="mt-4 flex flex-col gap-2 border-t border-separator pt-4 w-full">
                                {isPending ?
                                    <>
                                        <Button className={'text-transparent bg-c-base-300 pointer-events-none'} >*****</Button>
                                        <Button className={'text-transparent bg-c-base-300 pointer-events-none'} >*****</Button>
                                    </> :
                                    user ?
                                        <PopUp user={user}></PopUp>
                                        : <LoggedOut></LoggedOut>}
                            </li>
                        </ul>
                    </div>
                )
            }
        </nav >
    );
};

export default Navbar;