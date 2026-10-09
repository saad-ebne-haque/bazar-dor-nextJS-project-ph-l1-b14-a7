import SocialLogIns from "../socialLogIns/SocialLogIns";
import SignUpForm from "./signUpForm/SignUpForm";

const SignUp = () => {



    return (
        <>
            <div className="bg-base-100 border border-base-300 rounded-2xl p-6 flex flex-col gap-4 items-center w-full">

                <SignUpForm></SignUpForm>
                <div className="flex items-center gap-4 w-full">
                    <hr className="grow border-t-2 text-[#1D271F]/10" />
                    <p className="text-[#1d271f] text-xs whitespace-nowrap">অথবা</p>
                    <hr className="grow border-t-2 text-[#1D271F]/10" />
                </div>
                <SocialLogIns></SocialLogIns>
                <p className="text[#1D271F] text-sm">অ্যাকাউন্ট আছে?
                    <a
                        href="/sign-in"
                        className="text-[#05893E] hover:underline"
                    >সাইন ইন করুন</a></p>
            </div>

        </>
    );
};

export default SignUp;