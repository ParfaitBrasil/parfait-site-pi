import Home from "./../screens/Home";
import Portfolio from "./../screens/Portfolio";
import ArquiteturaDocumentacao from "./../screens/ArquiteturaDocumentacao"
import Error404 from "./../screens/Error404";

// -----------------------------------------------------------------------------
// Routes
// -----------------------------------------------------------------------------
export const ROUTES = [
	{path: "/", component: Home},
	{path: "/portfolio/:period?", component: Portfolio},
	{path: "/portfolio/arquitetura-de-software/documentacao", component: ArquiteturaDocumentacao},
	{path: "/error/404", component: Error404},
];