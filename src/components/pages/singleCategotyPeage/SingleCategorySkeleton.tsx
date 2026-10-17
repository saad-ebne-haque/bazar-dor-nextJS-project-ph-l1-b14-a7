
const SingleCategorySkeleton = () => {
    return (
        <div className="py-6 px-4 space-y-6 mb-23 animate-pulse">

        
            <div className="p-5.25 bg-c-base-100 border border-c-base-300 rounded-2xl flex items-center gap-3 w-full">
                <div className="size-14 rounded-2xl bg-base-content/10 shrink-0" />

                <div className="flex-1 space-y-2">
                    <div className="h-6 w-40 max-w-full rounded-lg bg-base-content/10" />
                    <div className="h-4 w-64 max-w-full rounded-lg bg-base-content/10" />
                </div>
            </div>


            <div>
                <div className="p-4.25 bg-c-base-100 border border-c-base-300 flex items-center justify-end gap-2 rounded-2xl">
                    <div className="h-4 w-12 rounded bg-base-content/10" />

                    <div className="h-10 w-50 rounded-xl border border-c-base-300 bg-base-content/5" />
                </div>

           
                <div className="mt-4 h-4 w-48 rounded bg-base-content/10" />

          
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div
                            key={index}
                            className="bg-c-base-100 border border-c-base-300 rounded-2xl p-4 space-y-3"
                        >
                   
                            <div className="flex items-start gap-3">
                                <div className="size-14 rounded-2xl bg-base-content/10 shrink-0" />

                                <div className="flex-1 space-y-2 pt-1">
                                    <div className="h-4 w-32 max-w-full rounded bg-base-content/10" />
                                    <div className="h-3 w-20 rounded bg-base-content/10" />
                                </div>
                            </div>

                         
                            <div className="flex justify-between items-end gap-3">
                                <div className="space-y-2">
                                    <div className="h-3 w-20 rounded bg-base-content/10" />
                                    <div className="h-6 w-28 rounded bg-base-content/10" />
                                </div>

                                <div className="h-7 w-16 rounded-full bg-base-content/10" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default SingleCategorySkeleton;
