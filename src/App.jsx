import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
