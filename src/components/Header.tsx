export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-20 py-4">
          {/* Logo with image and text */}
          <div className="flex items-center space-x-3">
            <img 
              src="https://i.ibb.co/wZy2Cnjz/459279692-907587088073691-400628220378730618-n-removebg-preview.png" 
              alt="MAZED Logo" 
              className="h-16 w-auto"
            />
            <span className="text-2xl font-semibold text-black">MAZED</span>
          </div>
        </div>
      </div>
    </header>
  );
}
