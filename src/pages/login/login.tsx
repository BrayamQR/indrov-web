import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Login: React.FC = () => {
  const { t } = useTranslation();

  // Estado del formulario
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
    acceptTerms: false,
    rememberMe: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Función para validar email
  const validarEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Función para validar teléfono
  const validarTelefono = (telefono: string) => {
    const regex = /^[0-9]{9,15}$/;
    return regex.test(telefono.replace(/\s/g, ""));
  };

  // Validar campo email o teléfono
  const validarEmailOTelefono = (value: string) => {
    if (!value) {
      return t("login.errors.emailOrPhoneRequired");
    }
    // Si contiene @ lo tratamos como email
    if (value.includes("@")) {
      if (!validarEmail(value)) {
        return t("login.errors.emailInvalid");
      }
    } else {
      // Si no contiene @, lo tratamos como teléfono
      if (!validarTelefono(value)) {
        return t("login.errors.phoneInvalid");
      }
    }
    return "";
  };

  // Validar campos
  const validarCampo = (name: string, value: string | boolean) => {
    let error = "";
    switch (name) {
      case "emailOrPhone":
        if (typeof value === "string") {
          error = validarEmailOTelefono(value);
        }
        break;
      case "password":
        if (typeof value === "string") {
          if (!value) {
            error = t("login.errors.passwordRequired");
          } else if (value.length < 8) {
            error = t("login.errors.passwordMinLength");
          }
        }
        break;
      case "acceptTerms":
        if (typeof value === "boolean" && !value) {
          error = t("login.errors.termsRequired");
        }
        break;
      default:
        break;
    }
    return error;
  };

  // Manejar cambios en los inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
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
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
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
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Marcar todos los campos como tocados
    const allTouched = Object.keys(formData).reduce(
      (acc, key) => {
        if (key !== "rememberMe") {
          // rememberMe es opcional
          acc[key] = true;
        }
        return acc;
      },
      {} as Record<string, boolean>,
    );
    setTouched(allTouched);

    // Validar todos los campos obligatorios
    const newErrors: Record<string, string> = {};
    ["emailOrPhone", "password", "acceptTerms"].forEach((key) => {
      const error = validarCampo(key, formData[key as keyof typeof formData]);
      if (error) {
        newErrors[key] = error;
      }
    });

    setErrors(newErrors);

    // Si hay errores, no continuar
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // Aquí iría la lógica de login cuando tengas el servicio
    console.log("Datos de login:", formData);
    alert("Formulario válido. Aquí se conectaría con el servicio de login.");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {t("login.title")}
            </h2>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Campo Email o Teléfono */}
            <div>
              <div className="relative">
                <i className="bi bi-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg"></i>
                <input
                  type="text"
                  name="emailOrPhone"
                  value={formData.emailOrPhone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={t("login.form.emailOrPhone")}
                  className={`w-full pl-12 pr-4 py-4 border ${
                    errors.emailOrPhone && touched.emailOrPhone
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white`}
                />
              </div>
              {errors.emailOrPhone && touched.emailOrPhone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.emailOrPhone}
                </p>
              )}
            </div>

            {/* Campo Contraseña */}
            <div>
              <div className="relative">
                <i className="bi bi-lock absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg"></i>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={t("login.form.password")}
                  className={`w-full pl-12 pr-24 py-4 border ${
                    errors.password && touched.password
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 text-sm font-medium"
                >
                  {showPassword
                    ? t("login.form.hidePassword")
                    : t("login.form.showPassword")}
                </button>
              </div>
              {errors.password && touched.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* Checkbox Aceptar términos */}
            <div>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="acceptTerms"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor="acceptTerms"
                  className="text-gray-700 leading-relaxed text-sm"
                >
                  {t("login.form.acceptTerms")}{" "}
                  <Link
                    to="/legal#terminos"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    {t("login.form.termsLink")}
                  </Link>
                </label>
              </div>
              {errors.acceptTerms && touched.acceptTerms && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.acceptTerms}
                </p>
              )}
            </div>

            {/* Checkbox Guardar mis datos */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor="rememberMe"
                className="text-gray-700 text-sm leading-relaxed"
              >
                {t("login.form.rememberMe")}
              </label>
            </div>

            {/* Botón Iniciar sesión */}
            <button
              type="submit"
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-md hover:shadow-lg text-lg"
            >
              {t("login.form.loginButton")}
            </button>

            {/* Link Olvidaste tu contraseña */}
            <div className="text-center">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
              >
                {t("login.form.forgotPassword")}
              </a>
            </div>

            {/* Separador */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">
                  {t("login.form.noAccount")}
                </span>
              </div>
            </div>

            {/* Link Crear cuenta */}
            <div className="text-center">
              <Link
                to="/register"
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                {t("login.form.createAccount")}
              </Link>
            </div>

            {/* Link volver al home */}
            <div className="text-center pt-2">
              <Link
                to="/"
                className="text-gray-600 hover:text-gray-900 transition-colors inline-flex items-center gap-2 text-sm"
              >
                <i className="bi bi-arrow-left"></i>
                {t("login.form.backToHome")}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
