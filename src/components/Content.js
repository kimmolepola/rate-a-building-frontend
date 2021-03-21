import React from 'react';
import {
  AppBar, Toolbar, Typography, Paper, Grid, Button, TextField, Tooltip, IconButton,
} from '@material-ui/core';
import { Search as SearchIcon, Refresh as RefreshIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import Theme from '../Theme';

const useStyles = makeStyles({
  paper: {
    maxWidth: 936,
    margin: 'auto',
    overflow: 'hidden',
  },
  searchBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  searchInput: {
    fontSize: Theme.typography.fontSize,
  },
  block: {
    display: 'block',
  },
  addUser: {
    marginRight: Theme.spacing(1),
  },
  contentWrapper: {
    margin: '40px 16px',
  },
});

const Content = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <SearchIcon className={classes.block} color="inherit" />
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                placeholder="Search by email address, phone number, or user UID"
                InputProps={{
                  disableUnderline: true,
                  className: classes.searchInput,
                }}
              />
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" className={classes.addUser}>
                Add user
              </Button>
              <Tooltip title="Reload">
                <IconButton>
                  <RefreshIcon className={classes.block} color="inherit" />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.contentWrapper}>
        <Typography color="textSecondary" align="center">
          No users for this project yet
        </Typography>
      </div>
      <iframe title="makkaratalo" src="https://www.google.com/maps/embed?pb=!4v1616273267730!6m8!1m7!1sBExowUvQrdzUEYY455KmWA!2m2!1d60.17054981471117!2d24.94288974567125!3f209.4625051853661!4f18.551747384359047!5f0.7820865974627469" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" />
    </Paper>
  );
};

export default Content;
