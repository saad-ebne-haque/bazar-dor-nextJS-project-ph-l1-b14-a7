import Link from "next/link";

const NotFound = () => {



    return (
        <>
            <div className="max-w-lg mx-auto my-20 px-4 text-center">
                <div className="p-8 bg-c-base-100 border border-c-base-300 rounded-2xl space-y-6 shadow-sm">

                    <div className="space-y-1">
                        <span className="text-primary font-bold text-6xl tracking-wider">৪০৪</span>
                        <h2 className="text-24-bold-32 text-base-content pt-2">কাঙ্ক্ষিত পাতাটি পাওয়া যায়নি</h2>
                        <p className="text-14-regular-20 text-base-content/70">
                            আপনি যে লিঙ্কে প্রবেশ করেছেন তা হয়তো পরিবর্তন করা হয়েছে অথবা বর্তমানে উপলব্ধ নেই।
                        </p>
                    </div>


                    <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                        <Link
                            href="/"
                            className="py-3 px-6 bg-primary text-primary-content rounded-xl text-14-semibold-20 hover:bg-primary-strong transition-all active:scale-95"
                        >
                            হোম পেজে যান
                        </Link>

                    </div>

                </div>
            </div>
        </>
    );
};

export default NotFound;