import React from 'react';
import { RouteProps } from 'react-router-dom';
import {useStyles} from './styles/LogoStyles';

interface LogoProps {
	routeProps: RouteProps;
}

export function Logo(props: LogoProps) {
	const classes = useStyles();
	return (
		<div className={classes.root} >
			<h1>Hover Me To Rotate</h1>
			<svg className={classes.logo} width="250px" height="250px"  x="0px" y="0px"
				viewBox="0 0 512 512">
			<path  fill="#FAB334" d="M190.58,43.74L65.35,137.74c-36.84,27.65-52.22,75.48-38.42,119.37l49.34,156.87
				c14.25,45.29,56.28,76.1,103.82,76.1h151.83c47.54,0,89.58-30.81,103.82-76.1l49.34-156.87c13.8-43.89-1.59-91.72-38.42-119.37
				L321.42,43.74C282.65,14.65,229.32,14.65,190.58,43.74z"/>
			<polygon  fill="#FFFFFF" points="139.54,227.39 260.3,313.32 449.99,132.95 401.46,96.61 251.68,234.27 180.95,184.41 "/>
			</svg>
		</div>
	);
}
