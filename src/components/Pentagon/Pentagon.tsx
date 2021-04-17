import React from 'react';
import { RouteProps } from 'react-router-dom';

interface PentagonProps {
	routeProps: RouteProps;
}

export function Pentagon(props: PentagonProps) {
	return (
		<div>
			<svg width="250" height="400">
				<polygon points="120 26,220 96,184 220,60 220,26 96" fill="white" stroke="teal" strokeWidth="3" />
			</svg>
		</div>
	);
}
