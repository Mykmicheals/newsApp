import React from 'react'
import head from '../assests/head.jpg'
import iphone from '../assests/iphone11.jpg'
import mouse from '../assests/mouse.jpg'

function HomeScreen() {
    return (
        <div id="carouselExampleIndicators" class="carousel slide f-section" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner s-section">
                <div class="carousel-item active">
                    <img class="d-block w-100" src={head} alt="First slide" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>good</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sint delectus ut quisquam. </p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src={iphone} alt="Second slide" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>good</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sint delectus ut quisquam. </p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src={mouse} alt="Third slide" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>good</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sint delectus ut quisquam. </p>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    )
}

export default HomeScreen
