
const SignInSkeleton = () => {
    return (
        <div className="bg-c-base-100 border border-c-base-300 rounded-2xl p-6 space-y-4 animate-pulse">

           
            <div className="space-y-2 mb-4">
                <div className="h-4 w-16 rounded bg-base-content/10" />
                <div className="h-10 w-full rounded-xl border border-c-base-300 bg-base-content/5" />
            </div>

         
            <div className="space-y-2 mb-4">
                <div className="h-4 w-20 rounded bg-base-content/10" />
                <div className="h-10 w-full rounded-xl border border-c-base-300 bg-base-content/5" />
                <div className="h-3 w-64 max-w-full rounded bg-base-content/10" />
            </div>

         
            <div className="h-10 w-full rounded-xl bg-base-content/10" />

      
            <div className="flex items-center gap-4 w-full">
                <div className="h-px flex-1 bg-base-content/10" />
                <div className="h-3 w-10 rounded bg-base-content/10" />
                <div className="h-px flex-1 bg-base-content/10" />
            </div>

            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="h-10 rounded-xl border border-c-base-300 bg-base-content/5" />
                <div className="h-10 rounded-xl border border-c-base-300 bg-base-content/5" />
            </div>

         
            <div className="flex items-center justify-center gap-2 pt-1">
                <div className="h-3 w-24 rounded bg-base-content/10" />
                <div className="h-3 w-20 rounded bg-base-content/10" />
            </div>

        </div>
    );
};

export default SignInSkeleton;
