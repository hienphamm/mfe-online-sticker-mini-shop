const ErrorBoundaryFallback = () => (
    <div className="py-5 flex items-center justify-center bg-background">
        <div className="text-center space-y-4 p-8">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Something went wrong while loading the module.
            </h1>
        </div>
    </div>
)
export default ErrorBoundaryFallback;
