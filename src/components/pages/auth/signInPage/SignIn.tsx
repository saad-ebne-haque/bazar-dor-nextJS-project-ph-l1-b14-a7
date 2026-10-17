import { auth } from "@/lib/auth";
import SocialLogin from "../socialLogIn/SocialLogin";
import SignInForm from "./signInForm/SignInForm";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const SignIn = async () => {

    const sessionData = await auth.api.getSession({
        headers: await headers()
    })
    
    if (sessionData) {
        redirect('/');
    }

    return (
        <div className="bg-c-base-100 border border-c-base-300 rounded-2xl p-6 space-y-4">

            <SignInForm></SignInForm>

            <div className="flex items-center gap-4 w-full">
                <hr className="w-full border-base-content/10" />
                <p className="text-base-content text-12-regular-16">অথবা</p>
                <hr className="w-full border-base-content/10" />
            </div>


            <SocialLogin></SocialLogin>


            <p className=" text-base-content text-14-regular-20 text-center">
                অ্যাকাউন্ট নেই?
                <a className="text-primary hover:underline " href="/sign-up">
                    সাইন আপ করুন
                </a>
            </p>

        </div>
    );
};

export default SignIn;