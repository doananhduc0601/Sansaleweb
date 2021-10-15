import React, { Component } from 'react';
import './Home.css';
import Categorymenu from '../../../components/caterory_menu/caterory_menu';
import Slides from '../../../components/slide/slide';



class Home extends Component {
    render() {
        return (
            <div>
      
            <Slides/>
           <Categorymenu/>
            </div>
        );
    }
};

export default Home;