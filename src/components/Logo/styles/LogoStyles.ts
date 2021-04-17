import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		logo: {
			transition: 'all 3s ease-in-out',
			'&:hover': {
				transform: 'rotate(360deg)'
			}
		}
	})
);
