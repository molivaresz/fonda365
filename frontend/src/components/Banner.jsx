import React from 'react'
import { useContext } from 'react';
import { Fonda365Context } from '../context/Fonda365ContextProvider';

const Banner = () => {

    const {dataProductoBanner} = useContext(Fonda365Context)

    return (
        <>
        <div className="container-fluid d-flex justify-content-center">
            <div id="carouselFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {    
                        dataProductoBanner &&
                        dataProductoBanner.map((dataProdBanner,index) => (
                                <div key={index} className="carousel-item active">
                                    <p key={index}>{index}</p>
                                    <img key={index} src={dataProdBanner.img} className="d-block w-100" alt="..." />
                                </div>
                        ))
                    }
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
        </>
    )
}

export default Banner