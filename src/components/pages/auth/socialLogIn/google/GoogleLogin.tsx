"use client"
import { signIn } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Image from "next/image";

const GoogleLogin = () => {

    const handleSignIn = async () => {
        await signIn.social({
            provider: 'google'
        })
    }

    return (
        <>
            <Button onClick={handleSignIn} variant="outline" className="border-base-300 px-4 py-px text-12-semibold-18 text-base-content flex items-center justify-center gap-1.5 w-full">
                <Image
                    src="/Google.png"
                    alt="Google Logo"
                    height={13.4}
                    width={13.4}
                ></Image>
                <span>
                    Google দিয়ে চালিয়ে যান
                </span>
            </Button>

        </>
    );
};

export default GoogleLogin;