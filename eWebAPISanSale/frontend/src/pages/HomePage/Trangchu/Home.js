import React, { Component } from 'react';
import './Home.css';
import Categorymenu from '../../../components/caterory_menu/caterory_menu';
import Slides from '../../../components/slide/slide';
import Dealsock from '../../../components/dealsock/dealsock';



class Home extends Component {
    render() {
        return (
            <div>
      
            <Slides/>
           <Categorymenu/>
           <Dealsock/>
            </div>
        );
    }
};

export default Home;