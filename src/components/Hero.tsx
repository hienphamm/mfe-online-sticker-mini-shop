import {Sparkles} from "lucide-react"

function Hero() {
    return (
        <section className="relative bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 py-20">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="flex items-center space-x-2">
                            <Sparkles className="h-6 w-6 text-pink-500"/>
                            <div className="text-xs font-semibold p-1 px-4 rounded-4xl bg-pink-100 text-pink-700">
                                New Collection Available
                            </div>
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                            Express Yourself with
                            <span
                                className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                                    Mini Stickers
                            </span>
                        </h1>
                        <p className="text-lg text-gray-600 max-w-md">
                            Discover thousands of cute, kawaii, and unique stickers to personalize your world. From
                            laptops to
                            phones, make everything adorable!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <ui-button
                                variant={'primary'}
                                class={'flex'}
                            >
                                Shop Now
                            </ui-button>
                            <ui-button variant="secondary">
                                View Collections
                            </ui-button>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-300 rounded-full opacity-20"></div>
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-300 rounded-full opacity-20"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;