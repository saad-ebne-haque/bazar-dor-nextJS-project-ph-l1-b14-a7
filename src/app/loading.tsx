import { Spinner } from "@heroui/react";

const loading = () => {



    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <Spinner className="text-primary" size="xl" />
        </div>
    );
};

export default loading;