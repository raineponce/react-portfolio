
export const MobileNav = ({ menuOpen, setMenuOpen }) => {

    return (
        <div className={`fixed top-0 left-0 w-full bg-[#a6ccad] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out

        ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}
        `}>
            <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-black text-3xl focus:outline-none cursor-pointer">
                x
            </button>

            {/* nav links */}
            <a href="#home" className="text-black hover:text-[#75917a] transition-colors" onClick={() => setMenuOpen(false)}> Home </a>
            <a href="#projects" className="text-black hover:text-[#75917a] transition-colors" onClick={() => setMenuOpen(false)}> Projects </a>
            <a href="#about" className="text-black hover:text-[#75917a] transition-colors" onClick={() => setMenuOpen(false)}> About </a>
            <a href="#contact" className="text-black hover:text-[#75917a] transition-colors" onClick={() => setMenuOpen(false)}> Contact </a>

        </div>
    );

}