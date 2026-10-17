"use client";

import { signOut, useSession } from "@/lib/auth-client";
import { Button, toast } from "@heroui/react";
import { User } from "better-auth";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ProfileInfo = () => {
    const router = useRouter()
    const { data, isPending } = useSession();

    const user: User | null = data?.user ? data?.user : null;

    const handleSignOut = async () => {
        /* const { error, data } = */ await signOut({
        fetchOptions: {
            onSuccess: () => {
                router.push('/sign-in');
                toast.success('সাইন আউট সফল হয়েছে!')
            }
        },

    })

    }


    return (
        <div className="p-6 bg-c-base-100 border border-c-base-300 rounded-2xl flex flex-col md:flex-row items-center gap-4">
            {isPending ?
                <p className="w-20 h-17.5 rounded-xl bg-c-base-200 animate-pulse"></p>
                :
                user?.image ?
                    <div className="rounded-xl overflow-auto">
                        <Image
                            src={user.image}
                            alt={`${user.name} এর ছবি।`}
                            width={80}
                            height={70}
                        ></Image>
                    </div>
                    :
                    <p className="w-20 h-17.5 rounded-xl bg-c-base-200 flex items-center justify-center text-4xl font-bold">{user?.name[0].toUpperCase()}</p>
            }

            <div className="grow text-center md:text-left">
                {
                    isPending ?
                        <div className="flex flex-col items-center md:items-start gap-1 animate-pulse">
                            <div className="h-7 w-37 rounded-md bg-c-base-300"></div>
                            <div className="h-7 w-50 rounded-md bg-c-base-300"></div>
                        </div>
                        :
                        <>
                            <h3 className="text-20-bold-28">{user?.name}</h3>
                            <p className="text-16-regular-24 text-base-content/70">{user?.email}</p>
                        </>
                }
            </div>
            <Button onClick={handleSignOut} variant="outline" className={'text-error border-error text-14-semibold-21 hover:text-white hover:bg-error'}>↩ সাইন আউট</Button>
        </div>
    );
};

export default ProfileInfo;