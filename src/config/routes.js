import Home from "./../screens/Home";
import Portfolio from "./../screens/Portfolio";	
import Error404 from "./../screens/Error404";

// -----------------------------------------------------------------------------
// Routes
// -----------------------------------------------------------------------------
export const ROUTES = [
	{path: "/", component: Home},
	{path: "/portfolio/:period?", component: Portfolio},
	{path: "/error/404", component: Error404},
];