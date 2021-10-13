import React, { Component } from 'react';
import './Home.css';
import Slidecare from '../../../components/slidecare/slidecare';
import Slides from '../../../components/slide/slide';

class Home extends Component {
    render() {
        return (
            <div>
      
            <Slides/>
           <Slidecare/>
            </div>
        );
    }
};

export default Home;