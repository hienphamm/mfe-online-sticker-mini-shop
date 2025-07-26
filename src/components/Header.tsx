export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        {/* Main Header */}
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 to-purple-600">
              <span className="text-sm font-bold text-white">S</span>
            </div>
            <span
              className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              StickerMini
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              New Arrivals
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Best Sellers
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </a>
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center space-x-2 flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <ui-input placeholder="Search stickers..." />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
