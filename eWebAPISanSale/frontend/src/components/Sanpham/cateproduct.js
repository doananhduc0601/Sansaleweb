import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./cateproduct.css";
import { BiChevronLeft,BiChevronRight} from 'react-icons/bi';
import {AiOutlineHeart} from 'react-icons/ai';

import { Card, CardColumns } from "react-bootstrap";

export default function Cateproduct() {
    const [employeeList, setEmployeeList] = useState([]);
  
    useEffect(() => {
      refreshEmployeeList();
    }, []);
  
    const employeeAPI = (url = "https://localhost:5001/api/Products") => {
      return {
        fetchAll: () => axios.get(url),

      };
    };
  
    function refreshEmployeeList() {
      employeeAPI()
        .fetchAll()
        .then((res) => {
          setEmployeeList(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    }
    return (
        
        <div className="app_container">
          <div className="grid">
           <div className="grid__row">
               <div className="grid__column-12">
                  <div className="home-filter">
                  <span className="home-filler_label"> Sắp xếp theo</span> 
                  
                  <button class="home-filler_btn btn-cate btn-primary ">Phổ Biến</button>
                  <button class="home-filler_btn btn-cate ">Mới Nhất</button>
                  <button class="home-filler_btn btn-cate ">Bán Chạy</button>
                  <select type="text" class="select-input"  name="categoryId"
                  
                      >
                        <option value={1}>1 . Thiết Bị Điển Tử</option>
                        <option value={2}>2 . Quẩn Áo </option>
                        <option value={3}>3 . Food</option>
                        <option value={4}>4 . Nội Thất</option>
                      </select>
                  
                  <div className="home-filter__page">
                    <span className="home-filler__page-num">
                        <span className=" ">1</span>/14
                    </span>
                  </div>
                  <div className="home-filler__page-control">
                     <a href="" className="home-filler__page-btn home-filler__page-btn-disable">
                     <i className="home-filler__page-icon"><BiChevronLeft/></i>
                     </a>
                     <a href="" className="home-filler__page-btn">
                     <i className="home-filler__page-icon"><BiChevronRight/></i>
                     </a>
                  </div>
                  </div>
                  <div className="home-product">
                      {/* grid ->row -Column */}
                      <div className="grid_row">
                      {employeeList.map((item) => {
                        return(
                          <div className="gird__column-2">
                          {/* product item */}
                          <a className="home-product-item" href={item.link}>
                            <div className="home-product-item-img">
                              <img src={item.imageSrc}></img>
                              
                            </div>
                                <h4 className="home-product-item__name">{item.name} </h4>
                                 <div className="home-product-item__price">
                                   <span className="home-product-item__price-old">{item.promotionPrice}.000</span>
                                   <span className="home-product-item__price-new">{item.price}.000</span>

                                 </div>
                                 <div className="home-product-item__action">
                                   <span className="home-product-item__like">
                                     <i><AiOutlineHeart/></i>
                                   </span>
                                   <span className="home-product-item__sub">
                                     <i>Đã bán{item.quantity}</i>
                                   </span>
                                 </div>
                                 <div className="home-product-item__origin">
                                   <span className="home-product-item__brand">Whoo</span>
                                   <a href="" className="home-product-item__origin-btn btn-primary"><p>Mua ngay</p></a>
                                 </div>
                                 {/* <div className="home-product-item__favourite">
                                    Yêu thích
                                 </div> */}
                                 <div className="home-product-item__saleoff">
                                    <span className="home-product-item__saleoff-percent">{item.detail}%</span>
                                    <span className="home-product-item__saleoff-label">GIẢM</span>
                                 </div>

                          </a>
                        </div>
                        );
                      })} 
                        
                      </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
        
    );
}
  {/* // <div class="slider-box">
                    //     <p class="time">New</p>
                    //     <div class="img-box">
                    //         <img src={item.imageSrc} alt=""/>
                    //     </div>
                    //     <p class="detail">
                    //     {item.name}
                    //         <a href="#" class="price">{item.price}</a>
                    //     </p>
                    //     <div class="cart">
                    //         <a href="#">Add to card</a>
                    //     </div>
                    // </div> 
                   */}