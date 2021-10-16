import React from "react";
import { getToken, getUser, removeUserSession } from "../../Utils/Common";
// import Nav from "./Nav";
import axios from "axios";
import { BsShop ,BsFillJournalBookmarkFill,BsCartDashFill} from "react-icons/bs";
import { MdCategory } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
import { RiAdminLine } from "react-icons/ri";
import { Route, Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard(props) {
  const name = getUser();
  const token = getToken();

  const handleLogout = () => {
    removeUserSession();
    props.history.push("/login");
  };
  axios
    .get("https://localhost:5001/api/Tags", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(
      (response) => {
        //var response = response.data;
      },
      (error) => {
        removeUserSession();
        props.history.push("/login");
      }
    );
    const menus = [
     
      {
        name: "DashBoard",
        to: "/dashboard",
        exact: true,
        icon:<BsCartDashFill/>,
      },
      {
        name: "Product",
        to: "/productlist",
        exact: true,
        icon:<BsShop/>,
      },
      {
        name: "Category",
        to: "/category",
        exact: true,
        icon:<MdCategory/>,
      },
      {
        name: "Setting Slides",
        to: "/slides",
        exact: true,
        icon:<AiFillSetting/>,
      },
      {
        name: "Admin",
        to: "/admin",
        exact: true,
        icon:<RiAdminLine/>,
      },
      {
        name: "Bài Viết ",
        to: "/info",
        exact: true,
        icon:<BsFillJournalBookmarkFill/>,
      },
      
     
    ];
    const MenuLink = ({ icon,label, to, activeOnlyWhenExact }) => {
      return (
        <Route
          path={to}
          exact={activeOnlyWhenExact}
          children={({ match }) => {
            var active = match ? "active" : "";
            return (
              <li className={active}>
                <Link to={to}><i>{icon}</i> <p>{label}</p> </Link>
              </li>
            );
          }}
        />
      );
    };
    const showMenus = (menus) => {
      var result = null;
      if (menus.length > 0) {
        result = menus.map((menu, index) => {
          return (
            <MenuLink
              key={index}
              label={menu.name}
              to={menu.to}
              icon={menu.icon}
              activeOnlyWhenExact={menu.exact}
            />
          );
        });
      }
      return result;
    };
    const state = {
      toggle: false,
    };
    const Toggle = () => {
      this.setState({ toggle: !this.state.toggle });
    };


  return (
    <div>
   
      <div class="wrapper ">
    <div class="sidebar" data-color="white" data-active-color="danger">
      <div class="logo">
        <a href="/" class="simple-text logo-mini">
          <div class="logo-image-small">
            <img src="../assets/img/logo-small.png"/>
          </div>
     
        </a>
        <a href="/" class="simple-text logo-normal">
          {name}
       
        </a>
      </div>
      <div class="sidebar-wrapper">
      <ul className={state.toggle ? "nav active" : "nav"}>
              
       <li> {showMenus(menus)} </li>
        </ul>
        
        
      </div>
    </div>
    <div class="main-panel">
      {/* <!-- Navbar --> */}
      <nav class="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
        <div class="container-fluid">
          <div class="navbar-wrapper">
            <div class="navbar-toggle">
              <button type="button" class="navbar-toggler">
                <span class="navbar-toggler-bar bar1"></span>
                <span class="navbar-toggler-bar bar2"></span>
                <span class="navbar-toggler-bar bar3"></span>
              </button>
            </div>
            <a class="navbar-brand" href="javascript:;">QUẢN LÝ SẢN PHẨM</a>
          </div>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-bar navbar-kebab"></span>
            <span class="navbar-toggler-bar navbar-kebab"></span>
            <span class="navbar-toggler-bar navbar-kebab"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navigation">
            <form>
              <div class="input-group no-border">
                <input type="text" value="" class="form-control" placeholder="Search..."/>
                <div class="input-group-append">
                  <div class="input-group-text">
                    <i class="nc-icon nc-zoom-split"></i>
                  </div>
                </div>
              </div>
            </form>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link btn-magnify" href="javascript:;">
                  <i class="nc-icon nc-layout-11"></i>
                  <p>
                    <span class="d-lg-none d-md-block">Stats</span>
                  </p>
                </a>
              </li>
              <li class="nav-item btn-rotate dropdown">
                <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="nc-icon nc-bell-55"></i>
                  <p>
                    <span class="d-lg-none d-md-block">Some Actions</span>
                  </p>
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li class="nav-item btn-rotate dropdown">
                <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="nc-icon nc-settings-gear-65"></i>
                  <p>
                    <span class="d-lg-none d-md-block">Account</span>
                  </p>
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                  <a class="dropdown-item" href="#"type="button" onClick={handleLogout} value="Logout">LogOut</a>
                  <a class="dropdown-item" href="#">Setting</a>
                  
                </div>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- End Navbar --> */}
      <div class="content">
       
      </div>
      <footer class="footer footer-black  footer-white ">
        <div class="container-fluid">
          <div class="row">
            <nav class="footer-nav">
              <ul>
                <li><a href="" target="_blank">{name}</a></li>
                <li><a href="" target="_blank">Blog</a></li>
                <li><a href="" target="_blank">Licenses</a></li>
              </ul>
            </nav>
            <div class="credits ml-auto">
              <span class="copyright">
                © <script>
                  document.write(new Date().getFullYear())
                </script>, made with <i class="fa fa-heart heart"></i> by {name}
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
    </div>
  );
}
export default Dashboard;
