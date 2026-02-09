import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../inputs/languageSelector/languageSelector";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (): void => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // NUEVA FUNCIÓN: Navegar a sección del Home
  const navigateToSection = (sectionId: string) => {
    if (isHomePage) {
      // Si ya estamos en Home, solo hacer scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // Si estamos en otra página, ir al Home con el hash
      navigate(`/#${sectionId}`);
    }
    setIsMenuOpen(false);
  };

  // NUEVA FUNCIÓN: Navegar a página Legal
  const navigateToLegal = (tab: string) => {
    navigate(`/legal#${tab}`);
    setIsMenuOpen(false);
  };

  // Detectar scroll para cambiar el fondo del navbar
  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Manejar scroll cuando llegamos al Home con un hash
  useEffect(() => {
    if (isHomePage && location.hash) {
      setTimeout(() => {
        const id = location.hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [isHomePage, location.hash]);

  // Prevenir scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const shouldHaveBackground = !isHomePage || isScrolled || isMenuOpen;

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        shouldHaveBackground ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            to="/"
            className={`text-2xl font-semibold ${shouldHaveBackground ? "text-gray-900" : "text-white"} `}
          >
            inDrov
          </Link>

          {/* Menú Desktop - oculto en móvil */}
          <nav className="hidden md:flex items-center space-x-10">
            <button
              onClick={() => navigateToSection("como-funciona")}
              className={` ${shouldHaveBackground ? "text-gray-600 hover:text-gray-900" : "text-white hover:text-gray-200"}  transition-colors text-sm cursor-pointer`}
            >
              {t("nav.howItWorks")}
            </button>
            <Link
              to="/conductores"
              className={` ${shouldHaveBackground ? "text-gray-600 hover:text-gray-900" : "text-white hover:text-gray-200"}  transition-colors text-sm cursor-pointer`}
            >
              {t("nav.forDrivers")}
            </Link>
            <button
              onClick={() => navigateToLegal("soporte")}
              className={` ${shouldHaveBackground ? "text-gray-600 hover:text-gray-900" : "text-white hover:text-gray-200"}  transition-colors text-sm cursor-pointer`}
            >
              {t("nav.support")}
            </button>
          </nav>

          {/* Botones Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Selector de Idioma */}
            <LanguageSelector shouldHaveBackground={shouldHaveBackground} />

            {/* Dropdown Entrar */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className={`flex items-center space-x-1  transition-colors text-sm ${shouldHaveBackground ? "text-gray-600 hover:text-gray-900" : "text-white  hover:text-gray-300"}`}
              >
                <span>{t("nav.enter")}</span>
                <i
                  className={`bi bi-chevron-${isDropdownOpen ? "up" : "down"} text-xs transition-transform duration-200`}
                ></i>
              </button>

              {/* Dropdown Menu con animación */}
              <div
                className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 border border-gray-100 transition-all duration-200 origin-top ${
                  isDropdownOpen
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <Link
                  to="/login"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  onClick={toggleDropdown}
                >
                  {t("nav.login")}
                </Link>
                <Link
                  to="/register"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  onClick={toggleDropdown}
                >
                  {t("nav.createAccount")}
                </Link>
              </div>
            </div>

            {/* Ícono de búsqueda */}
            <button
              className={` ${shouldHaveBackground ? "text-gray-600 hover:text-gray-900" : "text-white hover:text-gray-200"}  transition-colors text-sm`}
            >
              <i className="bi bi-search text-xl"></i>
            </button>
          </div>

          {/* Botón hamburguesa - visible solo en móvil */}
          <button
            onClick={toggleMenu}
            className={`md:hidden ${shouldHaveBackground ? "text-gray-600 hover:text-gray-900" : "text-white hover:text-gray-200"}    focus:outline-none`}
            aria-label="Toggle menu"
          >
            <i
              className={`bi ${isMenuOpen ? "bi-x" : "bi-list"} text-3xl transition-transform duration-300 ${isMenuOpen ? "rotate-90" : "rotate-0"}`}
            ></i>
          </button>
        </div>

        {/* Menú Mobile con animación */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="pb-4 space-y-1 border-t border-gray-100 pt-4 bg-white">
            <button
              onClick={() => navigateToSection("como-funciona")}
              className="block w-full text-left px-4 py-3 text-gray-600 hover:bg-gray-50 rounded text-sm transform transition-all duration-200 hover:translate-x-1"
            >
              {t("nav.howItWorks")}
            </button>
            <Link
              to="/conductores"
              className="block w-full text-left px-4 py-3 text-gray-600 hover:bg-gray-50 rounded text-sm transform transition-all duration-200 hover:translate-x-1"
              onClick={toggleMenu}
            >
              {t("nav.forDrivers")}
            </Link>
            <button
              onClick={() => navigateToLegal("soporte")}
              className="block w-full text-left px-4 py-3 text-gray-600 hover:bg-gray-50 rounded text-sm transform transition-all duration-200 hover:translate-x-1"
            >
              {t("nav.support")}
            </button>

            {/* Selector de idioma en móvil */}
            <div className="px-4 py-3">
              <LanguageSelector shouldHaveBackground={true} />
            </div>

            <div className="border-t border-gray-100 pt-3 mt-3">
              <Link
                to="/login"
                className="block px-4 py-3 text-gray-600 hover:bg-gray-50 rounded text-sm transform transition-all duration-200 hover:translate-x-1"
                onClick={toggleMenu}
              >
                {t("nav.login")}
              </Link>
              <Link
                to="/register"
                className="block px-4 py-3 text-gray-600 hover:bg-gray-50 rounded text-sm transform transition-all duration-200 hover:translate-x-1"
                onClick={toggleMenu}
              >
                {t("nav.createAccount")}
              </Link>
            </div>

            <button className="w-full px-4 py-3 text-gray-600 hover:bg-gray-50 rounded text-sm flex items-center transform transition-all duration-200 hover:translate-x-1">
              <i className="bi bi-search mr-2"></i>
              {t("nav.search")}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
