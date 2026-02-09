import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const CentroAyuda: React.FC = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  // Scroll al inicio cuando se carga el componente
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí irá la lógica de envío del formulario
    console.log("Formulario enviado:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-2xl mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          {/* Header con icono */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-900 rounded-full mb-4">
              <i className="bi bi-headset text-white text-3xl"></i>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {t("helpCenter.title")}
            </h1>
            <p className="text-gray-600">
              {t("helpCenter.subtitle")}{" "}
              <span className="font-semibold">
                {t("helpCenter.subtitleBold")}
              </span>{" "}
              {t("helpCenter.subtitleEnd")}
            </p>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nombre */}
            <div>
              <input
                type="text"
                name="nombre"
                placeholder={t("helpCenter.form.name")}
                value={formData.nombre}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder={t("helpCenter.form.email")}
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Asunto */}
            <div>
              <input
                type="text"
                name="asunto"
                placeholder={t("helpCenter.form.subject")}
                value={formData.asunto}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Mensaje */}
            <div>
              <textarea
                name="mensaje"
                placeholder={t("helpCenter.form.message")}
                value={formData.mensaje}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>

            {/* reCAPTCHA - placeholder */}
            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200">
              <input
                type="checkbox"
                id="recaptcha"
                required
                className="w-5 h-5"
              />
              <label htmlFor="recaptcha" className="text-gray-700 text-sm">
                {t("helpCenter.form.notRobot")}
              </label>
              <div className="ml-auto">
                <i className="bi bi-recycle text-blue-500 text-2xl"></i>
              </div>
            </div>

            {/* Botón enviar */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-4 rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              {t("helpCenter.form.submit")}
            </button>
          </form>

          {/* Información de contacto */}
          <div className="mt-8 pt-8 border-t border-gray-200 space-y-4 text-center">
            <div className="flex items-center justify-center gap-2 text-gray-700">
              <i className="bi bi-envelope text-xl"></i>
              <a
                href={`mailto:${t("helpCenter.contact.email")}`}
                className="hover:text-blue-600 transition-colors"
              >
                {t("helpCenter.contact.email")}
              </a>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-700">
              <i className="bi bi-telephone text-xl"></i>
              <a
                href={`tel:${t("helpCenter.contact.phone").replace(/\s/g, "")}`}
                className="hover:text-blue-600 transition-colors"
              >
                {t("helpCenter.contact.phone")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CentroAyuda;
