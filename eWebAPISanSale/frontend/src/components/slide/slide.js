import React, { Component } from 'react';
import '../slide/slide.css';

const slide =[
    './img/side1113.png',
    './img/side1111.png',
    './img/side1112.png',
     './img/br1.jpg'

//src={slide[1]}
];

const slide2 =[
    './img/slidesex.PNG',
    './img/slidesex2.png',
    './img/sideqc.jpg'
    



//src={slide2[1]}
];

class slides extends Component{
    render() {
       
           
        return (
            <div className="bgimg">
               
                
            <div className="container-fluid">
                <section className="section-home">
        
                    {/* <!--slide--> */}
                    <div className="slideqc">
                        <div className="slides "><img src={slide2[0]} alt="slidesex" /></div>
                        <div className="slides1 "><img src={slide2[1]} alt="slidesex" /></div>
                    </div>
        
        
                    <div id="myCarousel" className="carousel slide" data-ride="carousel">
                        {/* <!-- Indicators --> */}
                        <ol className="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                        </ol>
        
                        {/* <!-- Wrapper for slides --> */}
                        <div className="carousel-inner">
                            <div className="item active">
                                <img src={slide[0]} alt="bannershope"/>
                            </div>
        
                            <div className="item">
                                <img src={slide[1]} alt="bannerlazada"/>
                            </div>
        
                            <div className="item">
                                <img src={slide[2]} alt="bannersendo"/>
                            </div>
                        </div>
        
                        {/* <!-- Left and right controls --> */}
                        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#myCarousel" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                    <div className="slides2    align-self-stretch"><img src={slide2[2]} alt="bannershoppe" /></div>
        
                </section>
               
           
                
            </div>
        </div>
        );
    }
    
    
};


export default slides;