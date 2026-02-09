import React from "react";
import { useTranslation } from "react-i18next";
import conductoresImg from "../../assets/conductores.png";

const Conductores: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Sección Principal de Conductores */}
      <section className="relative py-24 bg-white">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Imagen izquierda */}
            <div className="flex justify-center lg:justify-start">
              <img
                src={conductoresImg}
                alt="Conductor local usando inDrov"
                className="w-full max-w-md h-auto object-contain"
              />
            </div>

            {/* Contenido derecho */}
            <div className="space-y-8">
              {/* Título y descripción */}
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  {t("drivers.title")}
                </h1>
                <p className="text-xl text-gray-700">{t("drivers.subtitle")}</p>
                <p className="text-lg text-gray-600">
                  {t("drivers.description")}{" "}
                  <span className="font-semibold">
                    {t("drivers.descriptionBold1")}
                  </span>{" "}
                  {t("drivers.descriptionMiddle")}{" "}
                  <span className="font-semibold">
                    {t("drivers.descriptionBold2")}
                  </span>{" "}
                  {t("drivers.descriptionEnd")}
                </p>
              </div>

              {/* Lista de beneficios */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <i className="bi bi-check-lg text-blue-600 text-xl font-bold"></i>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900 font-semibold text-lg">
                      {t("drivers.benefits.benefit1")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <i className="bi bi-check-lg text-blue-600 text-xl font-bold"></i>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900 font-semibold text-lg">
                      {t("drivers.benefits.benefit2")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <i className="bi bi-check-lg text-blue-600 text-xl font-bold"></i>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900 font-semibold text-lg">
                      {t("drivers.benefits.benefit3")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <i className="bi bi-check-lg text-blue-600 text-xl font-bold"></i>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900 font-semibold text-lg">
                      {t("drivers.benefits.benefit4")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Cómo funciona */}
              <div className="bg-white rounded-2xl p-6 shadow-lg space-y-4">
                <h3 className="text-xl font-bold text-gray-900">
                  {t("drivers.howItWorks.title")}
                </h3>
                <ol className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span className="font-bold text-blue-600">1.</span>
                    <span>{t("drivers.howItWorks.step1")}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-blue-600">2.</span>
                    <span>{t("drivers.howItWorks.step2")}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-blue-600">3.</span>
                    <span>{t("drivers.howItWorks.step3")}</span>
                  </li>
                </ol>
              </div>

              {/* Botón de registro */}
              <div className="space-y-3">
                <button className="w-full lg:w-auto px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
                  {t("drivers.registerButton")}
                </button>
                <p className="text-sm text-gray-500">
                  {t("drivers.requirements")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Conductores;
