import React from "react";

const Carousel = () => (
  <div id="carousel-inkling" className="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
        <li data-target="#carousel-inkling" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-inkling" data-slide-to="1"></li>
        <li data-target="#carousel-inkling" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner" role="listbox">
        <div class="carousel-item active">
            <img class="d-block img-fluid" src="http://placehold.it/700x300" alt="First slide"></img>
        </div>
        <div class="carousel-item">
            <img class="d-block img-fluid" src="http://placehold.it/700x300" alt="Second slide"></img>
        </div>
        <div class="carousel-item">
            <img class="d-block img-fluid" src="http://placehold.it/700x300" alt="Third slide"></img>
        </div>
    </div>
    <a class="carousel-control-prev" href="#carousel-inkling" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carousel-inkling" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
</div>
);

export default Carousel;