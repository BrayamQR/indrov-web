import React, { useState, useRef, useEffect } from "react";
import { Search, ChevronDown } from "lucide-react";

interface Country {
  code: string;
  country: string;
  iso: string;
}

const countries: Country[] = [
  { code: "+1", country: "Estados Unidos", iso: "US" },
  { code: "+51", country: "Perú", iso: "PE" },
  { code: "+52", country: "México", iso: "MX" },
  { code: "+34", country: "España", iso: "ES" },
  { code: "+54", country: "Argentina", iso: "AR" },
  { code: "+57", country: "Colombia", iso: "CO" },
  { code: "+56", country: "Chile", iso: "CL" },
  { code: "+44", country: "Reino Unido", iso: "GB" },
  { code: "+33", country: "Francia", iso: "FR" },
  { code: "+49", country: "Alemania", iso: "DE" },
  { code: "+39", country: "Italia", iso: "IT" },
  { code: "+351", country: "Portugal", iso: "PT" },
  { code: "+31", country: "Países Bajos", iso: "NL" },
  { code: "+32", country: "Bélgica", iso: "BE" },
  { code: "+46", country: "Suecia", iso: "SE" },
  { code: "+47", country: "Noruega", iso: "NO" },
  { code: "+45", country: "Dinamarca", iso: "DK" },
  { code: "+358", country: "Finlandia", iso: "FI" },
  { code: "+48", country: "Polonia", iso: "PL" },
  { code: "+55", country: "Brasil", iso: "BR" },
  { code: "+58", country: "Venezuela", iso: "VE" },
  { code: "+593", country: "Ecuador", iso: "EC" },
  { code: "+598", country: "Uruguay", iso: "UY" },
  { code: "+591", country: "Bolivia", iso: "BO" },
  { code: "+595", country: "Paraguay", iso: "PY" },
  { code: "+30", country: "Grecia", iso: "GR" },
  { code: "+43", country: "Austria", iso: "AT" },
  { code: "+41", country: "Suiza", iso: "CH" },
  { code: "+353", country: "Irlanda", iso: "IE" },
  { code: "+420", country: "República Checa", iso: "CZ" },
  { code: "+36", country: "Hungría", iso: "HU" },
  { code: "+40", country: "Rumania", iso: "RO" },
];

interface CountrySelectorProps {
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  name: string;
}

// Componente de bandera usando country-flag-icons
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

const CountrySelector: React.FC<CountrySelectorProps> = ({
  value,
  onChange,
  name,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedCountry =
    countries.find((c) => c.code === value) || countries[3]; // Default España

  const filteredCountries = countries.filter(
    (c) =>
      c.country.toLowerCase().includes(search.toLowerCase()) ||
      c.code.includes(search),
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSearch("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelectCountry = (country: Country) => {
    const syntheticEvent = {
      target: {
        name,
        value: country.code,
      },
    } as React.ChangeEvent<HTMLSelectElement>;

    onChange(syntheticEvent);
    setIsOpen(false);
    setSearch("");
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-20 shrink-0 px-2 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white flex items-center justify-center gap-1"
      >
        <FlagIcon countryCode={selectedCountry.iso} />
        <ChevronDown
          className={`w-3 h-3 text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
          <div className="p-3 border-b border-gray-200 bg-gray-50">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar país..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                autoFocus
              />
            </div>
          </div>

          <div className="max-h-64 overflow-y-auto">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country) => (
                <button
                  key={country.iso}
                  type="button"
                  onClick={() => handleSelectCountry(country)}
                  className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-blue-50 transition-colors text-left ${
                    selectedCountry.iso === country.iso ? "bg-blue-50" : ""
                  }`}
                >
                  <FlagIcon countryCode={country.iso} className="w-8 h-6" />
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-900 truncate text-sm">
                      {country.country}
                    </div>
                  </div>
                  <span className="text-gray-600 font-mono text-sm">
                    {country.code}
                  </span>
                </button>
              ))
            ) : (
              <div className="px-4 py-8 text-center text-gray-500 text-sm">
                No se encontraron países
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CountrySelector;
