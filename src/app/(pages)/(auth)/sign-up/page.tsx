import SignInSkeleton from "@/components/pages/auth/signInPage/SignInSkeleton";
import SignUp from "@/components/pages/auth/signUpPage/SignUp";
import Link from "next/link";
import { Suspense } from "react";

const SignUpPage = () => {



    return (
        <>
            <div className="px-4 py-10 space-y-6 max-w-md mx-auto mb-24">

                <div className="space-y-1 text-center">
                    <h1 className="text-24-bold-32">অ্যাকাউন্ট তৈরি করুন</h1>
                    <p className="text-14-regular-20 text-base-content/70">বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।</p>
                </div>

                <Suspense fallback={<SignInSkeleton></SignInSkeleton>}>
                    <SignUp></SignUp>
                </Suspense>


                <Link href="/">
                    <p className="text-center text-14-regular-20 text-base-content/70 hover:underline">← হোম পেজে ফিরে যান</p>
                </Link>
            </div>

        </>
    );
};

export default SignUpPage;