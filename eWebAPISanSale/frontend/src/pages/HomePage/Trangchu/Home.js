import React, { Component } from 'react';
import './Home.css';
import Slidecare from '../../../components/caterory_menu/caterory_menu';
import Slides from '../../../components/slide/slide';

import EmployeeList from '../../../components/productimage/EmployeeList';
import Dealsock from '../../../components/dealsock/dealsock';

class Home extends Component {
    render() {
        return (
            <div>
      
            <Slides/>
           <Slidecare/>
           <Dealsock/>
            </div>
        );
    }
};

export default Home;