"use client";
import { signOut } from "@/lib/auth-client";
import { Button, Link, toast } from "@heroui/react";
import { User } from "better-auth";
import { useRouter } from "next/navigation";

interface PopUpProps {
    user: User | null;
    className?: string;
}



const PopUp = ({ user, className }: PopUpProps) => {
    const router = useRouter();

    const handleSignOut = async () => {
        await signOut({

            fetchOptions: {
                onSuccess: () => {
                    router.push('/sign-in');
                    toast.success('সাইন আউট সফল হয়েছে!')
                },
                onError(err) {
                    toast.danger(err.error.message);
                },
            }
        });
    }

    return (
        <div className={`p-2 bg-c-base-100 border border-c-base-300 rounded-2xl flex flex-col ${className}`}>

            <div className="px-3 py-2 ">
                <h5 className="text-14-semibold-21">{user?.name}</h5>
                <p className="text-12-regular-16 text-base-content/70">{user?.email}</p>
            </div>
            <Link href="/profile"><p className="px-3 py-1.5 text-14-regular-21">👤 আমার প্রোফাইল</p></Link>
            <Button onClick={handleSignOut} variant="ghost" className={'text-error hover:bg-error hover:text-c-base-100'}>↩ সাইন আউট</Button>
        </div>
    );
};

export default PopUp;