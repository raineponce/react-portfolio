import { useEffect } from 'react';

export const Navbar = ({ menuOpen, setMenuOpen }) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen])

    return (
        <nav className="fixed top-0 w-full z-40 bg-[#a6ccad] backdrop-blur-lg border-b border-black/10 ">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="font-mono text-xl font-bold text-white hover:text-[#75917a] transition-colors">Raine Ponce</a>

                    {/* mobile menu */}
                    <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                        &#9776;
                    </div>

                    {/* wider display menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-black hover:text-[#75917a] transition-colors"> Home </a>
                        <a href="#projects" className="text-black hover:text-[#75917a] transition-colors"> Projects </a>
                        <a href="#about" className="text-black hover:text-[#75917a] transition-colors"> About </a>
                        <a href="#contact" className="text-black hover:text-[#75917a] transition-colors"> Contact </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}