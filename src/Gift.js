import React from "react";
import "./App.css";
import pic1 from './gift-pics/pic1.png'
import pic2 from './gift-pics/pic2.png'
import pic3 from './gift-pics/pic3.png'
import pic4 from './gift-pics/pic4.png'

const Gift = () => {
    const giftOptions = [
        {
            id: 1,
            name: "Personalized Engraved Clock",
            price: "$120",
            image: pic4,
        },
        {
            id: 2,
            name: "Modern Smart Clock",
            price: "$180",
            image: pic3,
        },
        {
            id: 3,
            name: "Vintage Wall Clock",
            price: "$150",
            image: pic2,
        },
        {
            id: 4,
            name: "Classic Pocket Watch",
            price: "$90",
            image: pic1,
        },
    ];

    return (
        <div className="container my-5" id="gift-link">
            {/* Hero Section */}
            <div className="text-center mb-4">
                <h1 className="display-5 fw-bold text-dark">Timeless Gifts for Every Occasion</h1>
                <p className="text-muted fs-5">Find the perfect gift for your loved ones.</p>
            </div>

            {/* Gift Grid Section */}
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                {giftOptions.map((gift) => (
                    <div key={gift.id} className="col">
                        <div className="card shadow-sm border-0">
                            <img
                                src={gift.image}
                                className="card-img-top"
                                alt={gift.name}
                                style={{ height: "220px", objectFit: "cover" }}
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title">{gift.name}</h5>
                                <p className="card-text">{gift.price}</p>
                                <button className="btn btn-primary">Explore</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gift;
