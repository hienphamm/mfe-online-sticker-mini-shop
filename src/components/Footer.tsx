function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div
                                className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 to-purple-600">
                                <span className="text-sm font-bold text-white">S</span>
                            </div>
                            <span className="text-xl font-bold">StickerMini</span>
                        </div>
                        <p className="text-gray-400 mb-4">
                            Your one-stop shop for the cutest mini stickers to express your personality.
                        </p>
                        <div className="flex space-x-4">
                            <div
                                className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-700">
                                <span className="text-xs">f</span>
                            </div>
                            <div
                                className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-700">
                                <span className="text-xs">ig</span>
                            </div>
                            <div
                                className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-700">
                                <span className="text-xs">tw</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Shop</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <a href="#" className="hover:text-white">
                                    All Stickers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    New Arrivals
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Best Sellers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Sale
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Support</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <a href="#" className="hover:text-white">
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Shipping Info
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Returns
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <a href="#" className="hover:text-white">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2024 StickerMini. All rights reserved. Made with 💕 for sticker lovers.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;