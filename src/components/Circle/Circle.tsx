import React from 'react';
import { RouteProps } from 'react-router-dom';

interface CircleProps {
	routeProps: RouteProps;
}

export function Circle(props: CircleProps) {
	return (
		<div>
			<svg width="200" height="200">
				<circle cx="100" cy="100" r="80" stroke="gray" strokeWidth="3" fill="white" />
			</svg>
		</div>
	);
}
