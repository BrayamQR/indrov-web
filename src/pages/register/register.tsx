import React, { useState } from "react";
import { registroService } from "../../services/registroService";
import CountrySelector from "../../components/inputs/country-selector-props/country-selector-props";
import CountryResidenceSelector from "../../components/inputs/country-residence-selector-props/country-residence-selector-props";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Register: React.FC = () => {
  const { t } = useTranslation();

  // Estado del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    emailConfirmacion: "",
    codigoPais: "+34",
    telefono: "",
    password: "",
    pais: "",
    terminos: false,
    privacidad: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [mensajeExito, setMensajeExito] = useState("");
  const [mensajeError, setMensajeError] = useState("");

  // Función para validar email
  const validarEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Función para validar contraseña
  const validarPassword = (password: string) => {
    return password.length >= 8;
  };

  // Función para validar teléfono
  const validarTelefono = (telefono: string) => {
    const regex = /^[0-9]{9,15}$/;
    return regex.test(telefono.replace(/\s/g, ""));
  };

  // Validar campos
  const validarCampo = (name: string, value: string | boolean) => {
    let error = "";
    switch (name) {
      case "nombre":
        if (typeof value === "string") {
          if (!value.trim()) {
            error = t("register.errors.nameRequired");
          } else if (value.trim().length < 2) {
            error = t("register.errors.nameMinLength");
          }
        }
        break;
      case "email":
        if (typeof value === "string") {
          if (!value) {
            error = t("register.errors.emailRequired");
          } else if (!validarEmail(value)) {
            error = t("register.errors.emailInvalid");
          }
        }
        break;
      case "emailConfirmacion":
        if (typeof value === "string") {
          if (!value) {
            error = t("register.errors.confirmEmailRequired");
          } else if (value !== formData.email) {
            error = t("register.errors.emailsNotMatch");
          }
        }
        break;
      case "telefono":
        if (typeof value === "string") {
          if (!value) {
            error = t("register.errors.phoneRequired");
          } else if (!validarTelefono(value)) {
            error = t("register.errors.phoneInvalid");
          }
        }
        break;
      case "password":
        if (typeof value === "string") {
          if (!value) {
            error = t("register.errors.passwordRequired");
          } else if (!validarPassword(value)) {
            error = t("register.errors.passwordMinLength");
          }
        }
        break;
      case "pais":
        if (typeof value === "string" && !value) {
          error = t("register.errors.countryRequired");
        }
        break;
      case "terminos":
        if (typeof value === "boolean" && !value) {
          error = t("register.errors.termsRequired");
        }
        break;
      case "privacidad":
        if (typeof value === "boolean" && !value) {
          error = t("register.errors.privacyRequired");
        }
        break;
      default:
        break;
    }
    return error;
  };

  // Manejar cambios en los inputs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    const newValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });

    // Validar en tiempo real si el campo ya fue tocado
    if (touched[name]) {
      const error = validarCampo(name, newValue);
      setErrors({
        ...errors,
        [name]: error,
      });
    }
  };

  // Manejar cuando el usuario sale del campo
  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    const newValue = type === "checkbox" ? checked : value;

    setTouched({
      ...touched,
      [name]: true,
    });

    const error = validarCampo(name, newValue);
    setErrors({
      ...errors,
      [name]: error,
    });
  };

  // Manejar envío del formulario
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Limpiar mensajes previos
    setMensajeExito("");
    setMensajeError("");

    // Marcar todos los campos como tocados
    const allTouched = Object.keys(formData).reduce(
      (acc, key) => {
        acc[key] = true;
        return acc;
      },
      {} as Record<string, boolean>,
    );
    setTouched(allTouched);

    // Validar todos los campos
    const newErrors: Record<string, string> = {};
    Object.keys(formData).forEach((key) => {
      const error = validarCampo(key, formData[key as keyof typeof formData]);
      if (error) {
        newErrors[key] = error;
      }
    });

    setErrors(newErrors);

    // Si hay errores, no continuar
    if (Object.keys(newErrors).length > 0) {
      setMensajeError(t("register.errors.formErrors"));
      return;
    }

    // Enviar datos al backend
    setIsLoading(true);
    try {
      const response = await registroService(formData);
      if (response.success) {
        setMensajeExito(response.message);
        // Limpiar el formulario
        setFormData({
          nombre: "",
          email: "",
          emailConfirmacion: "",
          codigoPais: "+34",
          telefono: "",
          password: "",
          pais: "",
          terminos: false,
          privacidad: false,
        });
        setTouched({});
        setErrors({});
        console.log("Usuario registrado:", response.data);
      } else {
        setMensajeError(
          response.message || t("register.errors.registrationError"),
        );
      }
    } catch (error) {
      console.error("Error:", error);
      setMensajeError(t("register.errors.serverError"));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {t("register.title")}
            </h2>
            <p className="text-gray-600">{t("register.subtitle")}</p>
          </div>

          {/* Mensajes de éxito/error */}
          {mensajeExito && (
            <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              <p className="font-medium">{mensajeExito}</p>
            </div>
          )}
          {mensajeError && (
            <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              <p className="font-medium">{mensajeError}</p>
            </div>
          )}

          <div className="space-y-6">
            {/* Campo Nombre */}
            <div>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={t("register.form.name")}
                className={`w-full px-4 py-4 border ${
                  errors.nombre && touched.nombre
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white`}
              />
              {errors.nombre && touched.nombre && (
                <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>
              )}
            </div>

            {/* Campo Email */}
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={t("register.form.email")}
                className={`w-full px-4 py-4 border ${
                  errors.email && touched.email
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white`}
              />
              {errors.email && touched.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Campo Email confirmación */}
            <div>
              <input
                type="email"
                name="emailConfirmacion"
                value={formData.emailConfirmacion}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={t("register.form.confirmEmail")}
                className={`w-full px-4 py-4 border ${
                  errors.emailConfirmacion && touched.emailConfirmacion
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white`}
              />
              {errors.emailConfirmacion && touched.emailConfirmacion && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.emailConfirmacion}
                </p>
              )}
            </div>

            {/* Campo Teléfono con código de país */}
            <div>
              <div className="flex gap-2">
                <CountrySelector
                  name="codigoPais"
                  value={formData.codigoPais}
                  onChange={handleChange}
                />
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={t("register.form.phone")}
                  className={`flex-1 min-w-0 px-4 py-4 border ${
                    errors.telefono && touched.telefono
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white`}
                />
              </div>
              {errors.telefono && touched.telefono && (
                <p className="text-red-500 text-sm mt-1">{errors.telefono}</p>
              )}
            </div>

            {/* Campo Contraseña */}
            <div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={t("register.form.password")}
                  className={`w-full px-4 py-4 border ${
                    errors.password && touched.password
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all pr-12 bg-white`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <i
                    className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"} text-xl`}
                  ></i>
                </button>
              </div>
              {errors.password && touched.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* Dropdown País */}
            <div>
              <CountryResidenceSelector
                name="pais"
                value={formData.pais}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!(errors.pais && touched.pais)}
              />
              {errors.pais && touched.pais && (
                <p className="text-red-500 text-sm mt-1">{errors.pais}</p>
              )}
            </div>

            {/* Checkbox Términos */}
            <div>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  name="terminos"
                  checked={formData.terminos}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor="terms"
                  className="text-gray-700 leading-relaxed"
                >
                  {t("register.form.acceptTerms")}{" "}
                  <Link
                    to="/legal#terminos"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    {t("register.form.termsLink")}
                  </Link>
                </label>
              </div>
              {errors.terminos && touched.terminos && (
                <p className="text-red-500 text-sm mt-1">{errors.terminos}</p>
              )}
            </div>

            {/* Checkbox Privacidad */}
            <div>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacidad"
                  checked={formData.privacidad}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor="privacy"
                  className="text-gray-700 leading-relaxed"
                >
                  {t("register.form.acceptPrivacy")}{" "}
                  <Link
                    to="/legal#privacidad"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    {t("register.form.privacyLink")}
                  </Link>{" "}
                  {t("register.form.privacyText")}
                </label>
              </div>
              {errors.privacidad && touched.privacidad && (
                <p className="text-red-500 text-sm mt-1">{errors.privacidad}</p>
              )}
            </div>

            {/* Botón Crear cuenta */}
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className={`w-full py-4 ${
                isLoading
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              } text-white rounded-lg font-medium transition-colors shadow-md hover:shadow-lg text-lg`}
            >
              {isLoading
                ? t("register.form.creating")
                : t("register.form.createAccount")}
            </button>
          </div>

          {/* Enlaces fuera del formulario */}
          <div className="mt-6 space-y-4">
            {/* Separador */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">
                  {t("register.form.alreadyHaveAccount")}
                </span>
              </div>
            </div>

            {/* Link Iniciar sesión */}
            <div className="text-center">
              <a
                href="/login"
                className="block w-full py-4 bg-white text-gray-700 rounded-lg font-medium border-2 border-gray-200 hover:border-gray-300 transition-colors"
              >
                {t("register.form.login")}
              </a>
            </div>

            {/* Link volver al home */}
            <div className="text-center">
              <a
                href="/"
                className="text-gray-600 hover:text-gray-900 transition-colors inline-flex items-center gap-2"
              >
                <i className="bi bi-arrow-left"></i>
                {t("register.form.backToHome")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
