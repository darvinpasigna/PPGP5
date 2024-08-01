import React, { useState, useEffect } from 'react';
import '../App.css';


function Carou() {
 
  const url = "http://localhost/PP5/1stPP5/carouseltbl.php";

  const [carouselImg, setCarouselImg] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCarouselImg(data);
      })
  }, []);

  return (
    <>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {carouselImg.map((item, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`} data-bs-interval="10000">
              <img src={item.image} className="d-block w-100" alt="carousel item" style={{height: "600px"}} />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Carou;
