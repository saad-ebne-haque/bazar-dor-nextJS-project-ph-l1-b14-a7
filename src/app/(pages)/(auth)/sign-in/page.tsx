import SignIn from "@/components/pages/auth/signInPage/SignIn";
import SignInSkeleton from "@/components/pages/auth/signInPage/SignInSkeleton";
import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";




export const metadata: Metadata = {
    title: 'বাজার দর । সাইন ইন',
}



const SignInPage = () => {


    return (
        <div className="px-4 py-10 space-y-6 max-w-md mx-auto mb-24">

            <div className="space-y-1 text-center">
                <h1 className="text-24-bold-32">সাইন ইন</h1>
                <p className="text-14-regular-20 text-base-content/70">বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</p>
            </div>
            <Suspense fallback={<SignInSkeleton></SignInSkeleton>}>
                <SignIn></SignIn>

            </Suspense>


            <Link href="/">
                <p className="text-center text-14-regular-20 text-base-content/70 hover:underline">← হোম পেজে ফিরে যান</p>
            </Link>
        </div>
    );
};

export default SignInPage;