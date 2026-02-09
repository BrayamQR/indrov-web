import React, { useState, useRef, useEffect } from "react";
import { Search, ChevronDown } from "lucide-react";

interface Country {
  code: string;
  country: string;
  iso: string;
}

const countries: Country[] = [
  { code: "es", country: "España", iso: "ES" },
  { code: "mx", country: "México", iso: "MX" },
  { code: "ar", country: "Argentina", iso: "AR" },
  { code: "pe", country: "Perú", iso: "PE" },
  { code: "co", country: "Colombia", iso: "CO" },
  { code: "cl", country: "Chile", iso: "CL" },
  { code: "ve", country: "Venezuela", iso: "VE" },
  { code: "ec", country: "Ecuador", iso: "EC" },
  { code: "uy", country: "Uruguay", iso: "UY" },
  { code: "bo", country: "Bolivia", iso: "BO" },
  { code: "py", country: "Paraguay", iso: "PY" },
  { code: "us", country: "Estados Unidos", iso: "US" },
  { code: "gb", country: "Reino Unido", iso: "GB" },
  { code: "fr", country: "Francia", iso: "FR" },
  { code: "de", country: "Alemania", iso: "DE" },
  { code: "it", country: "Italia", iso: "IT" },
  { code: "pt", country: "Portugal", iso: "PT" },
  { code: "nl", country: "Países Bajos", iso: "NL" },
  { code: "be", country: "Bélgica", iso: "BE" },
  { code: "se", country: "Suecia", iso: "SE" },
  { code: "no", country: "Noruega", iso: "NO" },
  { code: "dk", country: "Dinamarca", iso: "DK" },
  { code: "fi", country: "Finlandia", iso: "FI" },
  { code: "pl", country: "Polonia", iso: "PL" },
  { code: "gr", country: "Grecia", iso: "GR" },
  { code: "at", country: "Austria", iso: "AT" },
  { code: "ch", country: "Suiza", iso: "CH" },
  { code: "ie", country: "Irlanda", iso: "IE" },
  { code: "cz", country: "República Checa", iso: "CZ" },
  { code: "hu", country: "Hungría", iso: "HU" },
  { code: "ro", country: "Rumania", iso: "RO" },
];

interface CountryResidenceSelectorProps {
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => void;
  name: string;
  error?: boolean;
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
      style={{ width: "32px", height: "24px", objectFit: "cover" }}
    />
  );
};

const CountryResidenceSelector: React.FC<CountryResidenceSelectorProps> = ({
  value,
  onChange,
  onBlur,
  name,
  error = false,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedCountry = countries.find((c) => c.code === value);

  const filteredCountries = countries.filter(
    (c) =>
      c.country.toLowerCase().includes(search.toLowerCase()) ||
      c.code.toLowerCase().includes(search.toLowerCase()),
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

  const handleButtonBlur = () => {
    const syntheticEvent = {
      target: {
        name,
        value: value,
      },
    } as React.FocusEvent<HTMLSelectElement>;

    onBlur(syntheticEvent);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onBlur={handleButtonBlur}
        className={`w-full px-4 py-4 border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white flex items-center justify-between`}
      >
        <span className="flex items-center gap-3">
          {selectedCountry ? (
            <>
              <FlagIcon countryCode={selectedCountry.iso} />
              <span className="text-gray-900">{selectedCountry.country}</span>
            </>
          ) : (
            <span className="text-gray-500">País</span>
          )}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-2 w-full bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
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
                  key={country.code}
                  type="button"
                  onClick={() => handleSelectCountry(country)}
                  className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-blue-50 transition-colors text-left ${
                    selectedCountry?.code === country.code ? "bg-blue-50" : ""
                  }`}
                >
                  <FlagIcon countryCode={country.iso} />
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">
                      {country.country}
                    </div>
                  </div>
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

export default CountryResidenceSelector;
