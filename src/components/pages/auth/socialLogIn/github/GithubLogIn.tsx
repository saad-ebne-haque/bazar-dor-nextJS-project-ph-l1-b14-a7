import { signIn } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Image from "next/image";

const GithubLogIn = () => {

    const handleSignIn = async () => {
        await signIn.social({
            provider: 'github',
            callbackURL: '/'
        });
    }

    return (
        <>
            <Button
                onClick={handleSignIn}
                variant="outline" className="border-base-300 px-4 py-px text-12-semibold-18 text-base-content flex items-center justify-center gap-1.5 w-full">
                <Image
                    src="/Github.png"
                    alt="Github Logo"
                    height={13.4}
                    width={13.4}
                ></Image>
                <span>
                    GitHub দিয়ে চালিয়ে যান
                </span>
            </Button>

        </>
    );
};

export default GithubLogIn;