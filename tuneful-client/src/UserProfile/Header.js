import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import atoms from './instapaper/components/atoms';
import LibraryMusic from '@material-ui/icons/LibraryMusic';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

const { Divider, Toolbar } = atoms;

//const logo =  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhbW8vOS9If-qdZ7-4SL30yXffg9sRyryDcil-2I8JoKSp36CKxw';
//const label = '/static/themes/instapaper/logo.png';

const useStyles = makeStyles(theme => ({
  avatar: {
  },
  header1: {
    height: "auto"
  },
  header2: {
    marginRight: theme.spacing(2)
  }
}));


const Header = () => {
  const classes = useStyles()
  return (
    <AppBar className={classes.header1} position="sticky" color="default" elevation={0}>
      <Toolbar narrow>
        <Grid container alignItems="center">
          <Grid item xs>
            <Grid container alignItems="center" >
              <LibraryMusic />
              <Divider vertical />
              <Typography variant="h5" >Tuneful</Typography>
            </Grid>
          </Grid>
         
          <Grid item className={classes.header2} >
            <Grid container justify="flex-end" >
              <Button href = "/share-music" variant="outlined">Share Music</Button>
              <Button >Discover</Button>
              <Button >Messages</Button>
              <Avatar className={classes.avatar}>T</Avatar>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )

}



export default Header;


// <img alt="label" className="image__instagram-label" src={label} />   