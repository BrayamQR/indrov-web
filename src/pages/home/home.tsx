import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import phoneImg from "../../assets/phone.png";
import fondoImg from "../../assets/fondo.jpeg";
import cardheardImg from "../../assets/cardheard.png";
import cardPhoneImg from "../../assets/cardphone.png";
import cardPersonImg from "../../assets/cardperson.png";
import cardPositionImg from "../../assets/cardposition.png";
import fondo2Img from "../../assets/fondo2.jpg";
import fondo3Img from "../../assets/fondo3.jpg";

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero Section con fondo */}
      <section
        className="relative min-h-screen flex items-center pt-32"
        id="inicioSection"
      >
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          <img
            src={fondoImg}
            alt="Persona usando la aplicación inDrov en un paisaje costero"
            className="w-full h-full lg:h-auto object-cover"
          />
          {/* Overlay oscuro para mejorar legibilidad - más sutil */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Contenido */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            {/* Título principal */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {t("home.hero.title")}
            </h1>

            {/* Descripción */}
            <p className="text-lg md:text-xl text-white/95 mb-8 leading-relaxed">
              {t("home.hero.description")}
            </p>

            {/* Botones de descarga */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a
                href="#"
                className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
                aria-label="Descargar en App Store"
              >
                <i className="bi bi-apple text-3xl mr-3"></i>
                <div className="text-left">
                  <p className="text-xs">{t("home.hero.downloadOn")}</p>
                  <p className="text-lg font-semibold">
                    {t("home.hero.appStore")}
                  </p>
                </div>
              </a>

              <a
                href="#"
                className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
                aria-label="Disponible en Google Play"
              >
                <i className="bi bi-google-play text-3xl mr-3"></i>
                <div className="text-left">
                  <p className="text-xs">{t("home.hero.availableOn")}</p>
                  <p className="text-lg font-semibold">
                    {t("home.hero.googlePlay")}
                  </p>
                </div>
              </a>
            </div>

            {/* Texto adicional */}
            <p className="text-sm text-white/90">
              {t("home.hero.downloadText")}
            </p>
          </div>
        </div>
      </section>

      {/* Segunda sección - Problemas que resuelve con fondo diferente */}
      <section className="relative py-24 bg-white">
        {/* Fondo overlay diferente */}
        <div className="absolute inset-0 bg-linear-to-b from-purple-50/20 to-white/50"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contenido izquierdo */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  {t("home.problems.title")}
                </h2>
                <p className="text-lg text-gray-600">
                  {t("home.problems.subtitle")}
                </p>
              </div>
              {/* Lista de problemas con checkmarks */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <i className="bi bi-check-lg text-blue-600 text-xl font-bold"></i>
                  </div>
                  <p className="text-gray-700 text-lg flex-1">
                    {t("home.problems.point1")}
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <i className="bi bi-check-lg text-blue-600 text-xl font-bold"></i>
                  </div>
                  <p className="text-gray-700 text-lg flex-1">
                    {t("home.problems.point2")}
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <i className="bi bi-check-lg text-blue-600 text-xl font-bold"></i>
                  </div>
                  <p className="text-gray-700 text-lg flex-1">
                    {t("home.problems.point3")}
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <i className="bi bi-check-lg text-blue-600 text-xl font-bold"></i>
                  </div>
                  <p className="text-gray-700 text-lg flex-1">
                    {t("home.problems.point4")}
                  </p>
                </div>
              </div>
              <p className="text-gray-900 text-lg font-medium pt-4">
                <span className="font-bold">inDrov</span>{" "}
                {t("home.problems.conclusion")}
              </p>
            </div>
            {/* Imagen del celular - derecha con fondo oscuro */}
            <div className="relative flex justify-center lg:justify-end items-center">
              <div className="relative inline-block">
                <div className="absolute -inset-8 bg-linear-to-br from-gray-800 to-gray-900 rounded-3xl blur-2xl opacity-20 -z-10"></div>
                <img
                  src={phoneImg}
                  alt="inDrov App Features"
                  className="max-w-50 sm:max-w-60 md:max-w-70 lg:max-w-[320px] w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Separador decorativo */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="h-px bg-linear-to-r from-transparent  to-transparent"></div>
      </div>

      {/* Nueva sección - Primero incertidumbre, Después confianza */}
      <section className="relative py-24 bg-white">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative grid grid-cols-1 lg:grid-cols-[48%_52%] gap-4 items-center">
            {/* Imagen izquierda - Usuario con teléfono */}
            <div className="relative rounded-4xl overflow-hidden shadow-xl h-125 lg:h-137">
              <img
                src={fondo2Img}
                alt="Usuario verificando información del conductor en la app inDrov"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Imagen derecha - Conductor saludando */}
            <div className="relative rounded-4xl overflow-hidden shadow-xl h-100 lg:h-105">
              <img
                src={fondo3Img}
                alt="Conductor verificado saludando al pasajero"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Texto posicionado abajo entre las dos imágenes */}
            <div className="absolute left-1/2 bottom-8 lg:bottom-12 transform -translate-x-1/2 bg-white rounded-3xl px-10 py-7 shadow-2xl z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight text-center">
                {t("home.trust.title1")}
                <br />
                {t("home.trust.title2")}
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Separador decorativo */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="h-px bg-linear-to-r from-transparent  to-transparent"></div>
      </div>

      {/* Tercera sección - Tarjetas informativas con fondo */}
      <section className="relative py-24 bg-white" id="como-funciona">
        {/* Fondo overlay para esta sección */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Tarjeta 1: ¿Por qué existe inDrov? */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {t("home.cards.card1.title")}
                </h3>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p>{t("home.cards.card1.text1")}</p>
                  <p>{t("home.cards.card1.text2")}</p>
                </div>
                <div className="w-full flex justify-center pt-4">
                  <img
                    src={cardPositionImg}
                    alt="Ubicación"
                    className="w-auto h-40 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Tarjeta 2: ¿Para quién es? */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {t("home.cards.card2.title")}
                </h3>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p>{t("home.cards.card2.text")}</p>
                </div>
                <div className="w-full flex justify-center pt-4">
                  <img
                    src={cardPersonImg}
                    alt="Personas"
                    className="w-auto h-40 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Tarjeta 3: ¿Qué no somos? */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {t("home.cards.card3.title")}
                </h3>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p>{t("home.cards.card3.text")}</p>
                </div>
                <div className="w-full flex justify-center pt-4">
                  <img
                    src={cardPhoneImg}
                    alt="Tecnología"
                    className="w-auto h-40 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Tarjeta 4: Nuestra visión */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {t("home.cards.card4.title")}
                </h3>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p>{t("home.cards.card4.text1")}</p>
                  <p>{t("home.cards.card4.text2")}</p>
                </div>
                <div className="w-full flex justify-center pt-4">
                  <img
                    src={cardheardImg}
                    alt="Visión"
                    className="w-auto h-40 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Separador decorativo */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="h-px bg-linear-to-r from-transparent to-transparent"></div>
      </div>

      {/* Sección de Partners/Socios */}
      <section className="relative py-24 bg-white">
        <div className="absolute inset-0 "></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                {t("home.partners.title")}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {t("home.partners.subtitle")}
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 py-8">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center">
                  <i className="bi bi-egg-fried text-3xl text-amber-600"></i>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-500">Logo</p>
                  <p className="text-sm font-semibold text-gray-700">
                    {t("home.partners.restaurant")}
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center">
                  <i className="bi bi-building text-3xl text-blue-600"></i>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-blue-600">
                    {t("home.partners.hotel")}
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <div className="text-center">
                  <p className="text-xl font-bold text-gray-900">
                    {t("home.partners.company")}
                  </p>
                  <p className="text-xl font-bold text-blue-600">
                    {t("home.partners.web")}
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
                  <i className="bi bi-bag-x text-3xl text-gray-600"></i>
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-700">
                    {t("home.partners.localBrand")}
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center">
                  <i className="bi bi-shop text-3xl text-blue-600"></i>
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-700">
                    {t("home.partners.commerce")}
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center border-2 border-dashed border-amber-300">
                  <span className="text-xs text-amber-600 font-medium">
                    Logo
                  </span>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-amber-600">
                    {t("home.partners.yourLogo")}
                  </p>
                  <p className="text-sm font-semibold text-gray-700">
                    {t("home.partners.here")}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl inline-flex items-center gap-2">
                {t("home.partners.viewMore")}
                <i className="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white backdrop-blur-sm py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h4 className="font-bold text-gray-900 mb-4">
                {t("home.footer.information")}
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#como-funciona"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {t("home.footer.howItWorks")}
                  </a>
                </li>
                <li>
                  <Link
                    to="/conductores"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {t("home.footer.forDrivers")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/preguntas-frecuentes"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {t("home.footer.faq")}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4">
                {t("home.footer.support")}
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/centro-ayuda"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {t("home.footer.helpCenter")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/legal#soporte"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {t("home.footer.contact")}
                  </Link>
                </li>
                <li>
                  <a
                    href="mailto:indrovhelp@gmail.com"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    indrovhelp@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4">
                {t("home.footer.legal")}
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/legal#terminos"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {t("home.footer.terms")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/legal#privacidad"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {t("home.footer.privacy")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/legal#datos"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {t("home.footer.dataProcessing")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center space-y-4 py-8 border-t border-gray-200">
            <h2 className="text-4xl font-bold text-gray-900">inDrov</h2>
            <p className="text-gray-600 text-lg">
              {t("home.footer.platformDescription")}
            </p>
          </div>

          <div className="text-center pt-8">
            <p className="text-gray-500 text-sm">
              {t("home.footer.copyright")}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
