export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          {/* Logo with image and text */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <img 
              src="https://i.ibb.co/mCM2yqjQ/logo.png" 
              alt="شعار أرضي" 
              className="h-10 w-auto"
            />
            <span className="text-2xl font-semibold text-black">ARDHI</span>
          </div>
        </div>
      </div>
    </header>
  );
}
