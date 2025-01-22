import React from "react";
import "./App.css";
import image1 from './smart-pics/image1.png';
import image2 from './smart-pics/image2.png';
import image3 from './smart-pics/image3.png';
import image4 from './smart-pics/image4.png';

const Vintage = () => {
    const watches = [
        {
            brand: "Astro Clock",
            model: "Celestial Black Orbit",
            price: "$185.00",
            image: image1,
        },
        {
            brand: "EchoChrono",
            model: "Resonance Rose Gold",
            price: "$93.00",
            image: image2,
        },
        {
            brand: "Neo Tick",
            model: "Urban Nightfall",
            price: "$109.00",
            image: image3,
        },
        {
            brand: "GlowChron",
            model: "Radiance Edge",
            price: "$102.50",
            image: image4,
        },

    ];

    return (
        <>
            <div className="container my-4">
                
                <div className="text-center mb-5" >
                    <h1 className="display-5 fw-bold text-dark" id="smart-link" style={{ fontFamily: "Georgia, serif" }}>
                    Smart Clocks for Smarter Lives
                    </h1>
                    <p className="text-muted fs-5">Smarter features, sharper designs, better living.</p>
                </div>

                <div className="row">
                    {watches.map((watch, index) => (
                        <div key={index} className="col-md-3 mb-4">
                            <div className="card h-100 text-center">
                                <img
                                    src={watch.image}
                                    className="card-img-top"
                                    alt={watch.model}
                                    style={{
                                        height: "200px",
                                        width: "100%",
                                        objectFit: "contain",
                                        padding: "10px",
                                    }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{watch.brand}</h5>
                                    <p className="card-text">{watch.model}</p>
                                    <p className="card-text text-muted">{watch.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Vintage;
