import Home from "./../screens/Home";
import Portfolio from "./../screens/Portfolio";
import Documentacao from "../screens/Arquitetura/documentacao";
import Exemplos from "../screens/Paradigmas/exemplos";
import Error404 from "./../screens/Error404";

// -----------------------------------------------------------------------------
// Routes
// -----------------------------------------------------------------------------
export const ROUTES = [
	{path: "/", component: Home},
	{path: "/portfolio/:period?", component: Portfolio},
	{path: "/portfolio/arquitetura-de-software/documentacao", component: Documentacao},
	{path: "/portfolio/paradigmas/exemplos", component: Exemplos},
	{path: "/error/404", component: Error404},
];