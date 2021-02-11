import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import { Container, CssBaseline, Grid } from '@material-ui/core';
import Brand from './components/Brand';
import Search from './components/Search';
import Restaurant from './components/Restaurant';

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
      <Container maxWidth="md">
        <Grid item xs={12} sm={6} md={4}>
          <Restaurant />
        </Grid>
      </Container>
    </main>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
