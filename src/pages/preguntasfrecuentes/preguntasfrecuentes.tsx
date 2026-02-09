import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const PreguntasFrecuentes: React.FC = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Scroll al inicio cuando se carga el componente
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Obtener las preguntas desde las traducciones
  const faqs = (t("faq.questions", { returnObjects: true }) as any[]) || [];

  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("faq.title")}
          </h1>
          <p className="text-lg text-gray-600">
            {t("faq.subtitle")}{" "}
            <span className="font-semibold">{t("faq.subtitleBold")}</span>.
          </p>
        </div>

        {/* Acordeón de preguntas */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden transition-all hover:shadow-lg"
            >
              {/* Pregunta - Botón del acordeón */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="shrink-0 w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                    <i className={`${faq.icon} text-blue-600 text-xl`}></i>
                  </div>
                  <span className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </span>
                </div>
                <i
                  className={`bi ${
                    openIndex === index ? "bi-chevron-up" : "bi-chevron-down"
                  } text-gray-400 text-xl transition-transform`}
                ></i>
              </button>

              {/* Respuesta - Contenido desplegable */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5 pt-2">
                  <p className="text-gray-700 leading-relaxed pl-14">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer de ayuda adicional */}
        <div className="mt-12 text-center bg-white rounded-2xl shadow-md p-8">
          <p className="text-gray-700 text-lg mb-4">{t("faq.notFound")}</p>
          <Link
            to="/centro-ayuda"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            {t("faq.contactSupport")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PreguntasFrecuentes;
