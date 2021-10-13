import React, { Component } from 'react';
import './Home.css';
import slide1 from '../../../wwwroot/Image/slide1.jpg'
import Menuhome from '../../../components/menuhome/menuhome';
import Baiviet from '../BaiViet/Baiviet';
class Home extends Component {
    render() {
        return (
            <div>
            <Menuhome/>
            <img src={slide1}/>
            <Baiviet/>
            </div>
        );
    }
};

export default Home;