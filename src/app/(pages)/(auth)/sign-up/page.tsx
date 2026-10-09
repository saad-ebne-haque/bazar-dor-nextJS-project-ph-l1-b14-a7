import SignUp from "@/components/auth/signUpPage/SignUp";

const SignUpPage = () => {



    return (
        <>
            <div className="max-w-md mx-auto px-4 py-10 mb-24 flex flex-col items-center gap-6">

                <div className="text-center space-y-1">
                    <h3 className="text-2xl text-[#1D271F] font-bold">অ্যাকাউন্ট তৈরি করুন</h3>
                    <p className="text-[#1D271F]/70 text-sm ">বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।</p>
                </div>

                <SignUp></SignUp>
                <a
                    href={"/"}
                    className="text-[#1D271F]/60 text-sm hover:underline"
                >← হোম পেজে ফিরে যান</a>
            </div>

        </>
    );
};

export default SignUpPage;