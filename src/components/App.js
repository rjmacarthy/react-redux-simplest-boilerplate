import Footer from '../containers/Footer';
import Body from '../containers/Body';
import Header from '../containers/Header';
import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
    	<section>
    		<Header></Header>
	    	<Body></Body>
	    	<Footer></Footer>
    	</section>
    );
  }
}
