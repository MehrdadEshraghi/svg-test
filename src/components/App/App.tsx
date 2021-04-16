import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Circle } from '../Circle';
import { Navbar } from '../Navbar';

export function App() {
	return (
		<div>
			<Navbar />
			<BrowserRouter>
				<Switch>
					<Route exact path="/" render={(routeProps) => <Circle routeProps={routeProps} />} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}
