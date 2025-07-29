import {Link} from "react-router-dom";

export default function Header() {
    return (
        <header
            className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div
                            className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 to-purple-600">
                            <span className="text-sm font-bold text-white">S</span>
                        </div>

                        <Link
                            to={"/"}
                            className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                            StickerMini
                        </Link>
                    </div>

                    <nav className="flex items-center space-x-6">
                        <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
                            Home
                        </Link>
                        <Link to="/new" className="text-sm font-medium hover:text-primary transition-colors">
                            New Arrivals
                        </Link>
                        <Link to="/best" className="text-sm font-medium hover:text-primary transition-colors">
                            Best Sellers
                        </Link>
                    </nav>

                    <div className="flex items-center space-x-6 flex-1 max-w-md mx-6">
                        <div className="relative w-full">
                            <ui-input placeholder="Search stickers"/>
                        </div>

                        <Link to="/cart" className="text-sm font-medium hover:text-primary transition-colors">
                            Cart
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
