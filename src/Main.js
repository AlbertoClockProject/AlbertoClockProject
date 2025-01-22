import React from "react";
import image1 from './assets/image1.png';
import image2 from './assets/image2.png';
import image3 from './assets/image3.png';
import image4 from './assets/image4.png';
import image5 from './assets/image5.png';
import image6 from './assets/image6.png';
import image7 from './assets/image7.png';
import image8 from './assets/image8.png';
import image9 from './assets/image9.png';

const Main = () => {
  const watches = [
    {
      brand: "Compas",
      model: "Cold Hour Black",
      price: "$255.00",
      image: image1,
    },
    {
      brand: "Driini",
      model: "Movado Bold Mid-Size Two-Tone Rose Gold Watch",
      price: "$550.00",
      image: image9,
    },
    {
      brand: "Orbit",
      model: "Bienne By Night",
      price: "$209.00",
      image: image3,
    },
    {
      brand: "Atom 95",
      model: "Sistem Meche",
      price: "$236.50",
      image: image4,
    },
    {
      brand: "RowEX",
      model: "Oyster Perpetual",
      price: "$5,000.00",
      image: image5,
    },
    {
      brand: "SHYFOY 18",
      model: "Carrera Chronograph",
      price: "$3,500.00",
      image: image6,
    },
    {
      brand: "Bernhard",
      model: "Grant Chronograph",
      price: "$180.00",
      image: image7,
    },
    {
      brand: "LEIKE",
      model: "PRX Powermatic 80",
      price: "$650.00",
      image: image8,
    },
  ];

  return (
    <div className="container my-4" id="luxury-link">
      <div className="text-center mb-5" >
        <h1 className="display-5 fw-bold text-dark" id="luxury-link" style={{ fontFamily: "Georgia, serif" }}>
        Where Time Meets Luxury
        </h1>
        <p className="text-muted fs-5">Discover elegance redefined through our exquisite clock collection</p>
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
  );
};

export default Main;
