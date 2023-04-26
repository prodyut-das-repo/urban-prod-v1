import React, { useEffect, useRef } from 'react'
import '../style/menu.css';
import $ from 'jquery';
import logo from './../assets/images/logo.png'
import { Header } from './header';
import { Gallery } from './Album';

export default function Menu() {
    const scroll = 50;
    const menuRef = useRef<HTMLDivElement>(null);
    useEffect(()=> {
        $(document).ready(function(){
            $(window).on("scroll", function() {
              if(($(window).scrollTop() || scroll) > 50) {
                  $("#header").addClass("active-header");
                  $(".menu-link").addClass("active-menu-links");
                  $("#header-img").attr("src", `${logo}`);
              } else {
                  //remove the background property so it comes transparent again (defined in your css)
                 $("#header").removeClass("active-header");
                 $(".menu-link").removeClass("active-menu-links");
                 $("#header-img").attr("src", `${logo}`);
              }
          });
            // Responsive menu
            $("#responsive-nav-bar").hide();
          
            $("#image-button-black").unbind('click').click(function(){
              $("#responsive-nav-bar").slideToggle();
              //handleMenu();
            });
          
            $("#responsive-home-item , #responsive-features-item , #responsive-products-item , #responsive-media-item , #responsive-pricing-item").unbind('click').click(function(){
              $("#responsive-nav-bar").slideToggle();
              handleMenu();
            })
          
          
          
          
          
            // Default sections visibility
            $('.product-content').hide();
            $('#product-container-one').show();
          
          
            // Button variables
            var firstButton = $('#first-product-button');
            var secondButton = $('#second-product-button');
            var thirdButton = $('#third-product-button');
            var fourthButton = $('#fourth-product-button');
            var buttons = $('.product-button');
          
          
          
            // Product variables
            var firstProduct = $('#product-container-one');
            var secondProduct = $('#product-container-two');
            var thirdProduct = $('#product-container-three');
            var fourthProduct = $('#product-container-four');
          
          
            // Visibility variables
            var firstVisible = firstProduct.is(':visible');
            var secondVisible = secondProduct.is(':visible');
            var thirdVisible = thirdProduct.is(':visible');
            var fourthVisible = fourthProduct.is(':visible');
          
          
            // Visible and Hidden Sections .click function
            $(firstButton).click(function(){
              $('.product-content').hide();
              $(firstProduct).fadeIn(600);
              buttons.removeClass('product-button-active');
              firstButton.addClass('product-button-active');
            });
          
            $(secondButton).click(function(){
              $('.product-content').hide();
              $(secondProduct).fadeIn(600);
              $(secondProduct).css('visibility', 'visible');
              buttons.removeClass('product-button-active');
              secondButton.addClass('product-button-active');
            });
          
            $(thirdButton).click(function(){
              $('.product-content').hide();
              $(thirdProduct).fadeIn(600);
              buttons.removeClass('product-button-active');
              thirdButton.addClass('product-button-active');
            });
          
            $(fourthButton).click(function(){
              $('.product-content').hide();
              $(fourthProduct).fadeIn(600);
              buttons.removeClass('product-button-active');
              fourthButton.addClass('product-button-active');
            });
          
          
          
            // First Button Styling hidden/visible
            if (firstVisible === true) {
              firstButton.addClass('product-button-active');
            }
          
          });
    }, [])

    const handleMenu = () => {
        if(menuRef.current){
            menuRef.current.classList.toggle("change");
        }
    }
    return (
        <div>
            <Header />
            {/* <header id="header">
                <div id="normal-header">
                    <a href="#" id="image-link"><img src={logo} alt="Logo" id="header-img" /></a>
                    <nav id="nav-bar">
                        <ul>
                            <li className="nav-link" id="menu-item"><a href="#hero-header" className="menu-link"> Home </a></li>
                            <li className="nav-link" id="menu-item"><a href="#features-container" className="menu-link"> Portfolio </a></li>
                            <li className="nav-link" id="menu-item"><a href="#services" className="menu-link"> Services </a></li>
                            <li className="nav-link" id="menu-item"><a href="#testimonials" className="menu-link"> Testimonials </a></li>
                            <li className="nav-link" id="menu-item"><a href="#aboutus" className="menu-link"> About us </a></li>
                        </ul>
                    </nav>
                </div>
                <div id="responsive-header">
                <div id="responsive-logo-button">
                        <a href="#" id="image-link" className='logo'>Urban Production</a>
                        <div id="image-button-black" className="container" onClick={handleMenu} ref={menuRef}>
                            <div className="bar1"></div>
                            <div className="bar2"></div>
                            <div className="bar3"></div>
                        </div>
                    </div>
                
                    <div id="responsive-nav-bar">
                        <ul>
                            <li className="nav-link" id="responsive-home-item"><a href="#hero-header" className="responsive-menu-link"> Home </a></li>
                            <li className="nav-link" id="responsive-features-item"><a href="#features-container" className="responsive-menu-link"> Features </a></li>
                        </ul>
                    </div>
                </div>

            </header> */}
            <div id="hero-header">
                <div id="hero-content">
                    <h1 id="hero-title"> Urban Production </h1>

                    <p id="hero-text"> Capture your moment </p>

                    <a href="#features-container"><button id="hero-button"> Next Section </button></a>
                </div>

            </div>

            <div id="main">


                <div id="features-container">
                    <Gallery/>
                   
                </div>
            </div>

            <footer>
                <p> Copy right hahahaha </p>
            </footer>
        </div>
    )
}
