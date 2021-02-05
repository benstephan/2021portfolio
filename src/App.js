import React from "react";
import "./App.scss";
import { Helmet } from 'react-helmet';
import TagManager from 'react-gtm-module';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Posts from "./Pages/Posts";
import Post from "./Pages/Post";
import LogoWatermark from './Assets/LogoWatermark';
import Footer from "./Components/Footer/Footer";

function App() {
  const tagManagerArgs = {
    gtmId: 'GTM-PRWDT5L'
  }

  TagManager.initialize(tagManagerArgs)
  return (
    <>
    <Helmet>
      <title>Ben Stephan Design</title>
      <meta name="description" content="The home of Ben Stephan, Web and Graphic Designer" />
    </Helmet>
    <Router>
      <Header />
      <LogoWatermark />
      <Switch>
        <Route path="/post/:id">
          <Post />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/posts">
          <Posts />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
