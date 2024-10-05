import React from 'react'

const Banner = () => {
  return (
    <div className="container-fluid d-flex justify-content-center">
        <div id="carouselFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="src\assets\imgproducto\cerveza1.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="src\assets\imgproducto\ron1.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="src\assets\imgproducto\vinocd1.jpg" className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    )
}

export default Banner