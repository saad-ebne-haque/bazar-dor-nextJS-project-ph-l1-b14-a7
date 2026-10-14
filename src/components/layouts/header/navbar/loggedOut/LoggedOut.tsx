import { Button, Link } from "@heroui/react";

const LoggedOut = () => {



    return (
        <>

            <Link href="/sign-in" className="w-full text-center flex justify-center">সাইন ইন</Link>
            <Link href="/sign-up" className='no-underline w-full'>
                <Button className='bg-primary w-full text-primary-content text-14-semibold-21 hover:bg-hover-link-primary hover:border-hover-link-primary hover:shadow-md shadow-primary'>সাইন আপ</Button>
            </Link>
        </>
    );
};

export default LoggedOut;