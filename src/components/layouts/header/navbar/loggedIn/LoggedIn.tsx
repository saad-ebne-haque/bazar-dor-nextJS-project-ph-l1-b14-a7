'use client';
import { User } from "better-auth"
import Image from "next/image";
import PopUp from "./PopUp";
import { useState } from "react";

export interface LoggedInProps {
    user: User | null;

}

export default function LoggedIn({ user }: LoggedInProps) {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div className="relative"

        >
            <div className="flex items-center gap-2 cursor-pointer hover:bg-c-base-200 px-3 py-1 rounded-lg"
                onMouseEnter={() => setIsVisible(true)}
                onMouseLeave={() => setIsVisible(false)}
            >
                <div className="rounded-lg overflow-auto">
                    {
                        user?.image ?
                            <>
                                <Image
                                    src={user.image}
                                    alt={`${user.name} এর প্রোফাইল পিকচার`}
                                    width={36}
                                    height={36}
                                ></Image>
                            </>
                            :
                            <p className="min-w-9 max-w-9 text-18-bold-28 bg-c-base-300 flex items-center justify-center">
                                {user?.name[0].toUpperCase()}
                            </p>
                    }
                </div>
                <p className="text-14-medium-20">{user?.name} ▾</p>
                <PopUp user={user} className={`absolute  right-0 min-w-50 -bottom-35 ${isVisible ? 'opacity-100 pointer-events-auto scale-100 translate-y-0 ' : 'opacity-0 pointer-events-none scale-95 -translate-y-4'} transition-all`}></PopUp>
            </div>
        </div>
    )
}