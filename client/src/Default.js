import React from 'react';
import SearchAppBar from './components/AppBar';
import Main from './components/Main';
import TopCources from './components/TopCources';
import How from './components/How';
import IndExpert from './components/IndExpert';
import Footer from './components/Footer';
import TabComponent from './components/TabComponent';

function Default() {
  return (
    <div>
      < SearchAppBar />
      <Main />
      <TopCources />
      <How />
      <IndExpert />
      <TabComponent />
      <Footer />
    </div>
  )
}

export default Default