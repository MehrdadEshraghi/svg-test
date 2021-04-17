import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import { useStyles } from './styles/NavbarStyles';

export function Navbar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" />
					<Typography variant="h6" className={classes.title}>
						PantoHealth
					</Typography>
					<Link to="/">
						<Button color="inherit">Circle</Button>
					</Link>
					<Link to="/pentagon">
						<Button color="inherit">Pentagon</Button>
					</Link>
					<Link to="/logo">
						<Button color="inherit">Logo</Button>
					</Link>
				</Toolbar>
			</AppBar>
		</div>
	);
}
