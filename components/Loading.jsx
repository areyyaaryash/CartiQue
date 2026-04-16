const Loading = () => {
    return (
        <div className="px-6 md:px-16 lg:px-32 py-10 space-y-6">

            
            <div className="h-6 w-40 bg-white/10 rounded animate-pulse" />

            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="space-y-3">

                        <div className="h-52 bg-white/10 rounded-xl animate-pulse" />

                        <div className="h-4 w-3/4 bg-white/10 rounded animate-pulse" />

                        <div className="h-4 w-1/2 bg-white/10 rounded animate-pulse" />

                    </div>
                ))}
            </div>

        </div>
    );
};

export default Loading;