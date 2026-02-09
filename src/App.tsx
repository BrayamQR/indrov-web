import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/home/home";
import Register from "./pages/register/register";
import Login from "./pages/login/login";
import Legal from "./pages/legal/legal";
import CentroAyuda from "./pages/centroayuda/centroayuda";
import PreguntasFrecuentes from "./pages/preguntasfrecuentes/preguntasfrecuentes";
import Conductores from "./pages/conductores/conductores";
import Navbar from "./components/navbar/navbar";

// Componente wrapper para manejar el padding
function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="relative z-0 bg-neutral-50">
      <Navbar />
      <main className={!isHomePage ? "pt-20" : ""}>{children}</main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/centro-ayuda" element={<CentroAyuda />} />
          <Route path="/conductores" element={<Conductores />} />
          <Route
            path="/preguntas-frecuentes"
            element={<PreguntasFrecuentes />}
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
