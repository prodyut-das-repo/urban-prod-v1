import React, { useEffect } from 'react'
import '../style/menu.css';
import $ from 'jquery';
import logo from './../assets/images/logo.png'

export default function Menu() {
    const scroll = 50;
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
          
            $("#image-button-black").click(function(){
              $("#responsive-nav-bar").slideToggle();
            });
          
            $("#responsive-home-item , #responsive-features-item , #responsive-products-item , #responsive-media-item , #responsive-pricing-item").click(function(){
              $("#responsive-nav-bar").slideToggle(200);
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
    return (
        <div>
            <header id="header">
                <div id="normal-header">
                    <a href="#" id="image-link"><img src={logo} alt="Reverse Logo" id="header-img" /></a>
                    <nav id="nav-bar">
                        <ul>
                            <li className="nav-link" id="menu-item"><a href="#hero-header" className="menu-link"> Home </a></li>
                            <li className="nav-link" id="menu-item"><a href="#features-container" className="menu-link"> Features </a></li>
                            <li className="nav-link" id="menu-item"><a href="#presentation-container" className="menu-link"> Products </a></li>
                            <li className="nav-link" id="menu-item"><a href="#main-media-container" className="menu-link"> Media </a></li>
                            <li className="nav-link" id="menu-item"><a href="#prices-section-container" className="menu-link"> Pricing </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div id="responsive-header">
                    <div id="responsive-logo-button">
                        <a href="#" id="image-link"><img src="https://i.ibb.co/0jM3ZvH/reverse-black.png" alt="Reverse Logo" id="header-img-black" /></a>
                        <button id="image-button-black"><img src="https://i.ibb.co/yfM3fdZ/dropdown-menu-black.png" alt="Dropdown Menu" id="dropdown-button-black" /></button>
                    </div>

                    <div id="responsive-nav-bar">
                        <ul>
                            <li className="nav-link" id="responsive-home-item"><a href="#hero-header" className="responsive-menu-link"> Home </a></li>
                            <li className="nav-link" id="responsive-features-item"><a href="#features-container" className="responsive-menu-link"> Features </a></li>
                            <li className="nav-link" id="responsive-products-item"><a href="#presentation-container" className="responsive-menu-link"> Products </a></li>
                            <li className="nav-link" id="responsive-media-item"><a href="#main-media-container" className="responsive-menu-link"> Media </a></li>
                            <li className="nav-link" id="responsive-pricing-item"><a href="#prices-section-container" className="responsive-menu-link"> Pricing </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </header>


            <div id="hero-header">
                <div id="hero-content">
                    <h1 id="hero-title"> Urban Production </h1>

                    <p id="hero-text"> Capture your moment </p>

                    <a href="#features-container"><button id="hero-button"> Next Section </button></a>
                </div>

            </div>

            <div id="main">


                <div id="features-container">

                    <div id="features-description">
                        <h1> Our services offer <span id="red-text"> the best features </span> </h1>

                        <hr id="title-text-separator" />

                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. </p>
                    </div>

                    <div id="service-features">

                        <div id="feature">
                            <img src="https://i.ibb.co/tQrPJGk/like.png" alt="Heart Icon" id="heart-icon" />

                            <h2 id="feature-title"> Short Title </h2>

                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. </p>

                            <a href="#"><button id="feature-button"> See more! </button></a>
                        </div>

                        <div id="feature">
                            <img src="https://i.ibb.co/LY0pq5X/web-programming.png" alt="Code Icon" id="code-icon" />

                            <h2 id="feature-title"> Short Title </h2>

                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. </p>

                            <a href="#"><button id="feature-button"> See more! </button></a>
                        </div>

                        <div id="feature">
                            <img src="https://i.ibb.co/vHjwX9N/smartphone-with-shield.png" alt="Shield on Phone Icon" id="phone-icon" />

                            <h2 id="feature-title"> Short Title </h2>

                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. </p>

                            <a href="#"><button id="feature-button"> See more! </button></a>
                        </div>

                        <div id="feature">
                            <img src="https://i.ibb.co/6D3GmDW/monitor.png" alt="Monitor Icon" id="monitor-icon" />

                            <h2 id="feature-title"> Short Title </h2>

                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. </p>

                            <a href="#"><button id="feature-button"> See more! </button></a>
                        </div>

                    </div>

                </div>
            </div>

            <footer>
                <p> Copy right hahahaha </p>
            </footer>
        </div>
    )
}
