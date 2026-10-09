import { Button } from "@heroui/react";
import Image from "next/image";


const GoogleLogIn = () => {



    return (
        <>

            <Button variant="outline" className="border-base-300 px-4 py-px text-xs text-[#1D271F] font-semibold">
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

export default GoogleLogIn;