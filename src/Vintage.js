import React from "react";
import "./App.css";
import image1 from './vintage-folder/image1.png';
import image2 from './vintage-folder/image2.png';
import image3 from './vintage-folder/image3.png';
import image4 from './vintage-folder/image4.png';
import image5 from './vintage-folder/image5.png';
import image6 from './vintage-folder/image6.png';
import image7 from './vintage-folder/image7.png';
import image8 from './vintage-folder/image8.png';

const Vintage = () => {
    const watches = [
        {
            brand: "Compas",
            model: "Navigator Midnight",
            price: "$255.00",
            image: image1,
        },
        {
            brand: "Victorian",
            model: "Heritage Rose Gold",
            price: "$550.00",
            image: image2,
        },
        {
            brand: "360 Orbit",
            model: "Stellar Horizon",
            price: "$209.00",
            image: image3,
        },
        {
            brand: "Time Glass",
            model: "Crystal Era",
            price: "$236.50",
            image: image4,
        },
        {
            brand: "Antique Echoes",
            model: "Timeless Oyster",
            price: "$5,000.00",
            image: image5,
        },
        {
            brand: "Mahogany 88",
            model: "Ebony Carrera",
            price: "$3,500.00",
            image: image6,
        },
        {
            brand: "Classic Chronometers",
            model: "Regency Chronograph",
            price: "$180.00",
            image: image7,
        },
        {
            brand: "GrandFather",
            model: "Legacy Powermatic",
            price: "$650.00",
            image: image8,
        },
    ];

    return (
        <>
            <div className="container my-4">
                
                <div className="text-center mb-5" >
                    <h1 className="display-5 fw-bold text-dark" id="vintage-link" style={{ fontFamily: "Georgia, serif" }}>
                        Step Into Timeless Elegance
                    </h1>
                    <p className="text-muted fs-5">Discover the charm of our vintage clocks collection</p>
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
