import React, { useState } from "react";
import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className='border-b border-gray-800 flex items-center justify-between'>
            <nav>
                <div className="hidden md:flex md:gap-4 text-sm p-4">
                    <Link to="/" className="font-bold text-green-500" onClick={closeMenu}>COMIDAS</Link>
                    <Link to="/category/vegan" onClick={closeMenu}>VEGANAS</Link>
                    <Link to="/category/glutenfree" onClick={closeMenu}>SIN GLUTEN</Link>
                </div>
                <div className="md:hidden" onClick={toggleMenu}>
                    <img src="/img/menu-hamburguesa.png" className="p-4" alt="Menu Hamburguesa" />
                </div>
                {isOpen && (
                    <div className="md:hidden absolute top-16 bg-white py-2 px-4 shadow-md">
                        <Link to="/" className="block mb-2 hover:text-green-500" onClick={closeMenu}>
                            COMIDAS
                        </Link>
                        <Link to="/category/vegan" className="block mb-2 hover:text-green-500" onClick={closeMenu}>
                            VEGANAS
                        </Link>
                        <Link to="/category/glutenfree" className="block hover:text-green-500" onClick={closeMenu}>
                            SIN GLUTEN
                        </Link>
                    </div>
                )}
            </nav>
            <div className='justify-center'>
                <Link to="/">
                    <img src="/img/logo-viviendo-sano.png" alt="Logo Viviendo Sano" />
                </Link>
            </div>

            <div className="mr-4">
                <CartWidget />
            </div>
        </header>

    )
}

export default Navbar
