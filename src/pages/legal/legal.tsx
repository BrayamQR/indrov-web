import React, { useState, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Legal: React.FC = () => {
  const { t } = useTranslation();

  // Helper function para obtener arrays de contenido con tipo explícito
  const getContentArray = (key: string): string[] => {
    const content = t(key, { returnObjects: true }) as any;
    if (Array.isArray(content)) {
      return content;
    }
    return typeof content === "string" ? [content] : [];
  };

  type TabType = "terminos" | "privacidad" | "datos" | "soporte";

  interface Tab {
    id: TabType;
    label: string;
  }

  const location = useLocation();
  const navigate = useNavigate();

  const tabs: Tab[] = [
    { id: "terminos", label: t("legal.tabs.terms") },
    { id: "privacidad", label: t("legal.tabs.privacy") },
    { id: "datos", label: t("legal.tabs.dataProcessing") },
    { id: "soporte", label: t("legal.tabs.support") },
  ];

  // Derivar el tab activo directamente de la URL usando useMemo
  const activeTab = useMemo((): TabType => {
    const hash = location.hash.replace("#", "") as TabType;
    if (hash && tabs.some((tab) => tab.id === hash)) {
      return hash;
    }
    return "terminos";
  }, [location.hash]);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Scroll al inicio cuando cambia el activeTab
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab]);

  const getActiveTabLabel = () => {
    return tabs.find((tab) => tab.id === activeTab)?.label || "";
  };

  const handleTabChange = (tabId: TabType) => {
    navigate(`/legal#${tabId}`, { replace: true });
    setIsDropdownOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-12" id="legal-privacidad">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center space-y-4 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {t("legal.header.title")}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("legal.header.subtitle")}
            </p>
          </div>

          {/* Tabs Navigation - Desktop */}
          <div className="hidden md:flex gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`
                  flex-1 py-3 px-6 rounded-lg font-medium transition-all duration-300
                  ${
                    activeTab === tab.id
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tabs Navigation - Mobile (Dropdown) */}
          <div className="md:hidden mb-8">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full bg-gray-100 p-4 rounded-xl shadow-sm flex items-center justify-between"
            >
              <span className="font-medium text-gray-900">
                {getActiveTabLabel()}
              </span>
              <i
                className={`bi bi-chevron-${isDropdownOpen ? "up" : "down"} text-gray-600`}
              ></i>
            </button>

            {isDropdownOpen && (
              <div className="mt-2 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`
                      w-full text-left p-4 transition-colors border-b border-gray-100 last:border-b-0
                      ${
                        activeTab === tab.id
                          ? "bg-blue-50 text-blue-600 font-medium"
                          : "text-gray-700 hover:bg-gray-50"
                      }
                    `}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Content Container */}
          <div className="bg-gray-50 rounded-2xl shadow-lg p-8 md:p-12 border border-gray-200">
            {/* Términos del Servicio */}
            {activeTab === "terminos" && (
              <div className="space-y-8 animate-fadeIn">
                <div className="space-y-3">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {t("legal.terms.title")}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {t("legal.lastUpdated")}
                  </p>
                </div>

                <div className="space-y-8">
                  {/* Sección 1 */}
                  <div className="space-y-4">
                    <h4 className="text-lg md:text-xl font-semibold text-gray-900">
                      {t("legal.terms.section1.title")}{" "}
                      <span className="text-gray-500 font-normal text-base">
                        {t("legal.terms.section1.subtitle")}
                      </span>
                    </h4>
                    <div className="space-y-3 text-gray-700 leading-relaxed">
                      {getContentArray("legal.terms.section1.content").map(
                        (text, index) => (
                          <p key={index}>{text}</p>
                        ),
                      )}
                    </div>
                  </div>

                  {/* Secciones 2-10 */}
                  {[2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <div key={num} className="space-y-4">
                      <h4 className="text-lg md:text-xl font-semibold text-gray-900">
                        {t(`legal.terms.section${num}.title`)}
                      </h4>
                      <div className="space-y-3 text-gray-700 leading-relaxed">
                        {getContentArray(
                          `legal.terms.section${num}.content`,
                        ).map((text, index) => (
                          <p key={index}>{text}</p>
                        ))}
                      </div>
                    </div>
                  ))}

                  {/* Disposiciones Finales */}
                  <div className="space-y-4">
                    <h4 className="text-sm md:text-md font-semibold text-gray-900">
                      {t("legal.terms.finalProvisions.title")}
                    </h4>
                    <div className="text-xs space-y-3 text-gray-700 leading-relaxed">
                      {getContentArray(
                        "legal.terms.finalProvisions.content",
                      ).map((text, index) => (
                        <p key={index}>{text}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Política de Privacidad */}
            {activeTab === "privacidad" && (
              <div className="space-y-8 animate-fadeIn">
                <div className="space-y-3">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {t("legal.privacy.title")}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {t("legal.lastUpdated")}
                  </p>
                </div>

                <div className="space-y-8">
                  {/* Sección 1 */}
                  <div className="space-y-4">
                    <h4 className="text-lg md:text-xl font-semibold text-gray-900">
                      {t("legal.privacy.section1.title")}
                    </h4>
                    <div className="space-y-3 text-gray-700 leading-relaxed">
                      {getContentArray("legal.privacy.section1.content").map(
                        (text, index) => (
                          <p key={index}>{text}</p>
                        ),
                      )}
                    </div>
                  </div>

                  {/* Sección 2 */}
                  <div className="space-y-4">
                    <h4 className="text-lg md:text-xl font-semibold text-gray-900">
                      {t("legal.privacy.section2.title")}
                    </h4>
                    <div className="space-y-3 text-gray-700 leading-relaxed">
                      <ul>
                        {getContentArray("legal.privacy.section2.content").map(
                          (text, index) => (
                            <li key={index}>
                              <p>{text}</p>
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                  </div>

                  {/* Sección 3 */}
                  <div className="space-y-4">
                    <h4 className="text-lg md:text-xl font-semibold text-gray-900">
                      {t("legal.privacy.section3.title")}
                    </h4>
                    <div className="space-y-3 text-gray-700 leading-relaxed">
                      <p>{t("legal.privacy.section3.intro")}</p>
                      <ul>
                        {getContentArray("legal.privacy.section3.content").map(
                          (text, index) => (
                            <li key={index}>
                              <p>{text}</p>
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                  </div>

                  {/* Secciones 4-10 */}
                  {[4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <div key={num} className="space-y-4">
                      <h4 className="text-lg md:text-xl font-semibold text-gray-900">
                        {t(`legal.privacy.section${num}.title`)}
                      </h4>
                      <div className="space-y-3 text-gray-700 leading-relaxed">
                        {getContentArray(
                          `legal.privacy.section${num}.content`,
                        ).map((text, index) => (
                          <p key={index}>{text}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tratamiento de Datos */}
            {activeTab === "datos" && (
              <div className="space-y-8 animate-fadeIn">
                <div className="space-y-3">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {t("legal.dataProcessing.title")}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {t("legal.lastUpdated")}
                  </p>
                </div>

                <div className="space-y-8">
                  {/* Secciones 1-8 */}
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <div key={num} className="space-y-4">
                      <h4 className="text-lg md:text-xl font-semibold text-gray-900">
                        {t(`legal.dataProcessing.section${num}.title`)}
                      </h4>
                      <div className="space-y-3 text-gray-700 leading-relaxed">
                        {getContentArray(
                          `legal.dataProcessing.section${num}.content`,
                        ).map((text, index) => (
                          <p key={index}>{text}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Soporte */}
            {activeTab === "soporte" && (
              <div className="space-y-8 animate-fadeIn">
                <div className="space-y-3">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {t("legal.support.title")}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {t("legal.lastUpdated")}
                  </p>
                </div>

                <div className="space-y-8">
                  {/* Secciones 1-7 */}
                  {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                    <div key={num} className="space-y-4">
                      <h4 className="text-lg md:text-xl font-semibold text-gray-900">
                        {t(`legal.support.section${num}.title`)}
                      </h4>
                      <div className="space-y-3 text-gray-700 leading-relaxed">
                        {getContentArray(
                          `legal.support.section${num}.content`,
                        ).map((text, index) => (
                          <p key={index}>{text}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Botón volver al inicio */}
          <div className="text-center mt-8 mb-8">
            <a
              href="/"
              className="text-gray-600 hover:text-gray-900 transition-colors inline-flex items-center gap-2"
            >
              <i className="bi bi-arrow-left"></i>
              {t("legal.backToHome")}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Legal;
