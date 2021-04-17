import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Circle } from '../Circle';
import { Logo } from '../Logo';
import { Navbar } from '../Navbar';
import { Pentagon } from '../Pentagon';
import './styles/MainStyles.css';

export function App() {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route exact path="/" render={(routeProps) => <Circle routeProps={routeProps} />} />
					<Route exact path="/pentagon" render={(routeProps) => <Pentagon routeProps={routeProps} />} />
					<Route exact path="/logo" render={(routeProps) => <Logo routeProps={routeProps} />} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}
