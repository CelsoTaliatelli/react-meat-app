import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import { Container, CssBaseline, Grid, makeStyles } from '@material-ui/core';
import Brand from './components/Brand';
import Search from './components/Search';
import Restaurant from './components/Restaurant';
import RestaurantList from './components/RestaurantList';


ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Header />
    <main>
      <Container maxWidth="sm">
        <Brand />
        <Grid container justify="center">
          <Search />
        </Grid>
      </Container>
      <RestaurantList />
      
    </main>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
