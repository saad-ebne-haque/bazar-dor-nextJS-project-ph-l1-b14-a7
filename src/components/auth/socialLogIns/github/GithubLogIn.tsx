import { Button } from "@heroui/react";
import Image from "next/image";

const GithubLogIn = () => {



    return (
        <>
            <Button variant="outline" className="border-base-300 px-4 py-px text-xs text-[#1D271F] font-semibold">
                <Image
                    src="/Github.png"
                    alt="Google Logo"
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