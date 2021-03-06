import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import { ConfigProvider } from "antd";
import { ROUTES } from "../../config/routes";
import UISiteHeader from "../../components/UISiteHeader";
import UISiteFooter from "../../components/UISiteFooter";
import Error404 from "../../screens/Error404";
import pt_BR from 'antd/es/locale/pt_BR';
import '../../styles/app.scss';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

class Main extends Component {
	render() {
		return (
			<ConfigProvider locale={pt_BR}>
				<UISiteHeader />
				<Switch>
					{ROUTES.map((route, i) => (
						<Route
							key={i}
							exact={route?.exact ?? true}
							path={route.path}
							component={(props) => {
								// if( route.hasOwnProperty('logged') )
								// {
								// 	// Only logged
								// 	if( route.logged && !this.props.isAuthenticated )
								// 	{
								// 		const currentUrl = new URL(window.location.href);

								// 		return <Redirect to={{pathname: "/login", search: `?origin=${encodeURIComponent(`${currentUrl.pathname}${currentUrl.search}`)}`}} />;
								// 	}
								// 	// Only logged out
								// 	else if( !route.logged && this.props.isAuthenticated )
								// 	{
								// 		return <Redirect to="/account" />;
								// 	}
								// }

								return <route.component {...props} />;
							}}
						/>
					))}
					<Route path="*" component={Error404} />
				</Switch>
				<UISiteFooter />
			</ConfigProvider>
		)
	}
}

export default withRouter(Main);