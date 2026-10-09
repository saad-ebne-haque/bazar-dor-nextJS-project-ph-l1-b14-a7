import SignIn from "@/components/auth/signInPage/SignIn";


const SignInPage = () => {



    return (
        <div className="max-w-md mx-auto px-4 py-10 mb-24 flex flex-col items-center gap-6">

            <div className="text-center space-y-1">
                <h3 className="text-2xl text-[#1D271F] font-bold">সাইন ইন</h3>
                <p className="text-[#1D271F]/70 text-sm ">বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</p>
            </div>

            <SignIn></SignIn>
            <a
                href={"/"}
                className="text-[#1D271F]/60 text-sm hover:underline"
            >← হোম পেজে ফিরে যান</a>
        </div>
    );
};

export default SignInPage;