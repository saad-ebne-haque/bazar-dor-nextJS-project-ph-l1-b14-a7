
const ProfileSkeleton = () => {
    return (
        <div className="max-w-3xl mx-auto py-6 px-4 space-y-6 animate-pulse">

     
            <div className="space-y-2">
                <div className="h-8 w-40 rounded-md bg-base-content/10" />
                <div className="h-4 w-64 max-w-full rounded bg-base-content/10" />
            </div>

        
            <div className="p-6 bg-c-base-100 border border-c-base-300 rounded-2xl flex flex-col md:flex-row items-center gap-4">

         
                <div className="w-20 h-17.5 shrink-0 rounded-xl bg-c-base-200" />

              
                <div className="grow w-full flex flex-col items-center md:items-start gap-2">
                    <div className="h-6 w-40 max-w-full rounded-md bg-base-content/10" />
                    <div className="h-5 w-52 max-w-full rounded-md bg-base-content/10" />
                </div>

           
                <div className="h-10 w-28 rounded-xl bg-base-content/10" />
            </div>

    
            <div className="p-5 space-y-5 bg-c-base-100 border border-c-base-300 rounded-2xl">

       
                <div className="h-6 w-20 rounded-md bg-base-content/10" />

          
                <div className="space-y-2">
                    <div className="h-5 w-12 rounded bg-base-content/10" />

      
                    <div className="h-10 w-full rounded-xl border border-c-base-300 bg-c-base-200" />
                </div>

        
                <div className="h-10 w-full rounded-xl bg-base-content/10" />
            </div>

        </div>
    );
};

export default ProfileSkeleton;
