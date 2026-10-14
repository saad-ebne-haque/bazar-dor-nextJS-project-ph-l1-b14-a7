"use client";

import Link from "next/link";

interface ErrorPageProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {

    const errorMessage = error?.message && !error.message.includes("Minified")
        ? error.message
        : "দুঃখিত, ডেটা লোড করার সময় একটি ত্রুটি ঘটেছে।";

    return (
        <div className="max-w-md mx-auto my-24 px-4 text-center">
            <div className="p-8 bg-c-base-100 border border-c-base-300 rounded-2xl space-y-5 shadow-sm">

                <div className="w-20 h-20 mx-auto bg-c-base-200 rounded-2xl flex items-center justify-center text-4xl">
                    ⚠️
                </div>

                <div className="space-y-2">
                    <h2 className="text-24-bold-32 text-base-content">কিছু একটা সমস্যা হয়েছে</h2>
                    <p className="text-14-regular-20 text-error font-medium">
                        {errorMessage}
                    </p>
                </div>

                <div className="pt-2 flex flex-col gap-3">
                    <button
                        onClick={() => reset()}
                        className="w-full py-3 px-6 bg-primary text-primary-content rounded-xl text-14-semibold-20 hover:bg-primary-strong transition-all active:scale-95"
                    >
                        আবার চেষ্টা করুন
                    </button>
                    <Link
                        href="/"
                        className="w-full inline-block py-3 px-6 bg-c-base-200 text-base-content rounded-xl text-14-semibold-20 hover:bg-c-base-300 transition-all active:scale-95"
                    >
                        হোমে ফিরে যান
                    </Link>
                </div>
            </div>
        </div>
    );
}