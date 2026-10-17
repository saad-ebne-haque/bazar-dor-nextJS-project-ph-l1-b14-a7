
const ProductDetailsSkeleton = () => {
    return (
        <div className="px-4 py-6 mb-32 space-y-6 animate-pulse">


            <div className="flex items-center gap-2">
                <div className="h-4 w-12 rounded bg-base-content/10" />
                <div className="size-3 rounded bg-base-content/10" />
                <div className="h-4 w-20 rounded bg-base-content/10" />
                <div className="size-3 rounded bg-base-content/10" />
                <div className="h-4 w-28 rounded bg-base-content/10" />
            </div>

            
            <div className="bg-c-base-100 border border-c-base-300 rounded-2xl p-5.25 flex flex-col md:flex-row items-center gap-4">

                <div className="flex items-center gap-4 w-full">
                    <div className="size-20 rounded-xl bg-base-content/10 shrink-0" />

                    <div className="md:grow w-full space-y-3">
                        <div className="h-7 w-48 max-w-full rounded-lg bg-base-content/10" />
                        <div className="h-4 w-36 max-w-full rounded bg-base-content/10" />
                        <div className="h-4 w-64 max-w-full rounded bg-base-content/10" />
                    </div>
                </div>

            
                <div className="px-5 py-4 bg-c-base-200 rounded-xl text-center w-full md:w-44 space-y-3">
                    <div className="h-4 w-20 mx-auto rounded bg-base-content/10" />
                    <div className="h-9 w-24 mx-auto rounded bg-base-content/10" />
                    <div className="h-4 w-28 mx-auto rounded bg-base-content/10" />
                    <div className="h-4 w-16 mx-auto rounded bg-base-content/10" />
                </div>
            </div>

       
            <div className="p-5 space-y-6 bg-c-base-100 border border-c-base-300 rounded-2xl">

         
                <div className="h-6 w-40 rounded bg-base-content/10" />

           
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div
                            key={index}
                            className="w-full border border-c-base-300 rounded-2xl px-6 py-4 space-y-3"
                        >
                            <div className="h-4 w-24 rounded bg-base-content/10" />
                            <div className="h-8 w-32 rounded bg-base-content/10" />
                            <div className="h-3 w-36 max-w-full rounded bg-base-content/10" />
                        </div>
                    ))}
                </div>

             
                <div className="space-y-3">
                    <div className="h-6 w-52 max-w-full rounded bg-base-content/10" />

                    <div className="p-px rounded-2xl border border-c-base-300 overflow-hidden w-full">

                     
                        <div className="flex items-center justify-between gap-6 px-4 py-4 border-b border-c-base-300 min-w-150">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="h-4 w-16 rounded bg-base-content/10"
                                />
                            ))}
                        </div>

                        
                        {Array.from({ length: 5 }).map((_, index) => (
                            <div
                                key={index}
                                className={`flex items-center justify-between gap-6 px-4 py-4 min-w-150 ${index % 2 === 0 ? "bg-c-base-200" : ""
                                    } ${index !== 4 ? "border-b border-c-base-300" : ""
                                    }`}
                            >
                                {Array.from({ length: 5 }).map((_, colIndex) => (
                                    <div
                                        key={colIndex}
                                        className={`h-4 rounded bg-base-content/10 ${colIndex === 0 ? "w-24" : "w-16"
                                            }`}
                                    />
                                ))}
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsSkeleton;
