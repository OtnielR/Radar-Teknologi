
function Header() {
  return (
    <header className="flex justify-between items-center text-white px-6 md:px-20 py-4 bg-[#2a3240] top-0 left-0 right-0 z-50">

      <div className="flex items-center gap-3">
        <img src="logo.png" alt="Logo" className="w-[40px] md:w-[50px]" />
        <h1 className="font-bold text-base md:text-xl tracking-wide leading-none">
          RADAR TEKNOLOGI <br className="block md:hidden" /> KOMPUTER
        </h1>
      </div>

      <nav className="hidden md:flex gap-8 text-[16px] font-medium">
        <a href="#" className="hover:text-[#e34040] transition-colors">Home</a>
        <a href="#about" className="hover:text-[#e34040] transition-colors">About</a>
        <a href="#services" className="hover:text-[#e34040] transition-colors">Services</a>
        <a href="#portofolio" className="hover:text-[#e34040] transition-colors">Portofolio</a>
        <a href="#blogs" className="hover:text-[#e34040] transition-colors">Blogs</a>
      </nav>

      <div className="md:hidden text-2xl font-bold cursor-pointer">
        ☰
      </div>
    </header>
  );
}

export default Header;
