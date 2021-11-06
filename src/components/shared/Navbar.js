import '../../css/navbar.scss';
import { PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR } from '../../Constant'
import { Link } from 'react-router-dom';
import React from 'react';
import { styled, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Fab from '@material-ui/core/Fab';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
import HistoryOutlinedIcon from '@material-ui/icons/HistoryOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

const styles = {
  appBar: {
    background: SECONDARY_COLOR,
    top: '90%',
    bottom: 0,
    borderRadius: '0 0 20px 20px',
  },
  addIcon: {
    fontSize: 70,
  },
  navIcon: {
    color: PRIMARY_COLOR,
    fontSize: 35,
    margin: 10,
		'&:hover': {
			color: "white",
		},
  },
};

const StyledFab = styled(Fab)({
  position: 'absolute',
  color: TERTIARY_COLOR,
  background: SECONDARY_COLOR,
  zIndex: 1,
  top: 'auto',
  bottom: 25,
  left: 0,
  right: 0,
  margin: '0 auto',
  '&:hover': {
    background: TERTIARY_COLOR,
    color: SECONDARY_COLOR
  },
});


function Navbar({ classes }) {
  return (
	  <nav class="menu">
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Grid container spacing={2} direction="row">
						<Grid item xs>
							<Link to='/' style={{ textDecoration: 'none' }}>
									<HomeOutlinedIcon className={classes.navIcon}/>
							</Link>
						</Grid>
            <Grid item xs>
							<Link to='/' style={{ textDecoration: 'none' }}>
								<PersonOutlinedIcon className={classes.navIcon}/>
							</Link>
            </Grid>
            <Grid item xs>
            </Grid>
            <Grid item xs>
							<Link to='/' style={{ textDecoration: 'none' }}>
								<HistoryOutlinedIcon className={classes.navIcon}/>
							</Link>
            </Grid>
            <Grid item xs>
							<Link to='/' style={{ textDecoration: 'none' }}>
								<SearchOutlinedIcon className={classes.navIcon}/>
							</Link>
            </Grid>
          </Grid>
					<Link to='/newSession'>
						<StyledFab aria-label="add">
							<AddCircleRoundedIcon className={classes.addIcon}/>
						</StyledFab>
					</Link>
        </Toolbar>
      </AppBar>
		</nav>
  );
}

export default withStyles(styles)(Navbar);
