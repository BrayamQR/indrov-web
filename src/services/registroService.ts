import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

interface RegistroData {
  nombre: string;
  email: string;
  emailConfirmacion: string;
  codigoPais: string;
  telefono: string;
  password: string;
  pais: string;
  terminos: boolean;
  privacidad: boolean;
}

interface RegistroResponse {
  success: boolean;
  message: string;
  data?: {
    id: string;
    nombre: string;
    email: string;
    fechaRegistro: string;
  };
}

export const registroService = async (
  data: RegistroData,
): Promise<RegistroResponse> => {
  try {
    const response = await axios.post<RegistroResponse>(
      `${API_URL}/registro`,
      data,
    );
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data;
    }
    throw new Error("Error en el servicio de registro");
  }
};
