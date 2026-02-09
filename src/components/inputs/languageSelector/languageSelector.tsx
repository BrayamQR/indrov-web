import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

interface Language {
  code: string;
  name: string;
  iso: string;
}

interface LanguageSelectorProps {
  shouldHaveBackground: boolean;
}

const FlagIcon: React.FC<{ countryCode: string; className?: string }> = ({
  countryCode,
  className = "",
}) => {
  return (
    <img
      src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${countryCode}.svg`}
      alt={`${countryCode} flag`}
      className={`inline-block ${className}`}
      style={{ width: "24px", height: "16px", objectFit: "cover" }}
    />
  );
};

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  shouldHaveBackground,
}) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: Language[] = [
    { code: "es", name: "Español", iso: "ES" },
    { code: "en", name: "English", iso: "GB" },
    { code: "el", name: "Ελληνικά", iso: "GR" },
  ];

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-2 transition-colors text-sm ${
          shouldHaveBackground
            ? "text-gray-600 hover:text-gray-900"
            : "text-white hover:text-gray-300"
        }`}
      >
        <FlagIcon countryCode={currentLanguage.iso} />
        <span className="hidden sm:inline">
          {currentLanguage.code.toUpperCase()}
        </span>
        <i
          className={`bi bi-chevron-${isOpen ? "up" : "down"} text-xs transition-transform duration-200`}
        ></i>
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 border border-gray-100 transition-all duration-200 origin-top ${
          isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center space-x-3 ${
              currentLanguage.code === lang.code
                ? "bg-gray-50 text-gray-900 font-medium"
                : "text-gray-700"
            }`}
          >
            <FlagIcon countryCode={lang.iso} className="w-6 h-4" />
            <span>{lang.name}</span>
            {currentLanguage.code === lang.code && (
              <i className="bi bi-check2 ml-auto text-green-600"></i>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
