

export default function HomePageSkeleton() {
    return (
        <div className="py-6 px-4 mb-12 space-y-10 animate-pulse">

          
            <div className="py-8 px-6 bg-c-base-100 border border-c-base-300 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-4 w-full md:w-2/3">
                  
                    <div className="w-32 h-7 bg-c-base-300 rounded-full"></div>
                   
                    <div className="w-3/4 h-10 bg-c-base-300 rounded-lg"></div>
                    
                    <div className="space-y-2">
                        <div className="w-full h-4 bg-c-base-300 rounded"></div>
                        <div className="w-5/6 h-4 bg-c-base-300 rounded"></div>
                    </div>
                 
                    <div className="w-36 h-10 bg-c-base-300 rounded-xl mt-4"></div>
                </div>
               
                <div className="w-78.75 h-65.75 bg-c-base-300 rounded-2xl shrink-0 hidden md:block"></div>
            </div>

           
            {[1, 2, 3].map((section) => (
                <div key={section} className="space-y-4">
                  
                    <div className="w-48 h-7 bg-c-base-300 rounded-md"></div>

             
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[1, 2, 3].map((card) => (
                            <div
                                key={card}
                                className="p-4 bg-c-base-100 border border-c-base-300 rounded-2xl h-40 flex flex-col justify-between"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-c-base-300 rounded-xl"></div>
                                    <div className="space-y-2 grow">
                                        <div className="w-3/4 h-4 bg-c-base-300 rounded"></div>
                                        <div className="w-1/2 h-3 bg-c-base-300 rounded"></div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center pt-4 border-t border-c-base-200">
                                    <div className="w-20 h-5 bg-c-base-300 rounded"></div>
                                    <div className="w-16 h-8 bg-c-base-300 rounded-lg"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

        </div>
    );
}