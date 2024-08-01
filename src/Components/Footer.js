import Logo from '../Images/Logo.png';
import '../App.css';
import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';

function Footer() {
    const url = "http://localhost/PP5/1stPP5/videogame.php";
    const [footerCard, setFooterCard] = useState([]);
  
  
    useEffect(() => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setFooterCard(data);
        })
        
    }, []);

    const videoOpts = {
        height: '150',
        width: '260'
    };

    return (
        <>
            <footer>
                <div className='container'>
                    <div className="row" id='topfooter'>
                        <div className="col-6"><img src={Logo} alt="logo" /></div>
                        <div className="col-6" id='socialmed'>
                            <ul>
                                <ol>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="blue" className="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                    </svg>
                    </ol>
                    <ol>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-instagram" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
              </svg>
                    </ol>
                    <ol>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-envelope-at" viewBox="0 0 16 16">
              <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"/>
              <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
            </svg>
                    </ol>
                    <ol>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="lightblue" className="bi bi-twitter" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
              </svg>
                    </ol>
                    <ol>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red" className="bi bi-youtube" viewBox="0 0 16 16">
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
              </svg>
                    </ol>
                            </ul>
                        </div>
                    </div>
                    <hr style={{ height: '4px', backgroundColor: 'black' }} />
                    <div className='row' id='footerContenet'>
                        <div className='col-3'>
                            <h4>PPG</h4>
                    
                        <p>123 Example Street City, State, ZIP Code Country <br />
                        Customer Support: (123) 456-7890 <br />
                        Sales Inquiries: (123) 456-7891 <br />
                        Support: support@example.com</p>
                   
                        </div>
                        <div className='col-3'> 
                            <h4 style={{ textAlign: "center" }}>NEW RELEASE</h4>
                            <div className='d-flex-wrap'>
                                {footerCard.slice(0,3).map((card) => (
                                    <div className="col-md-4 mb-1 cardItem" key={card.id}>
                                        <img src={card.main_img} className="img-fluid rounded-start" alt="cardpic" style={{ width: "100%", height: "120px", objectFit: 'fill' }} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='col-3'>
                            <h4 style={{ textAlign: "center" }}>BEST SELLER</h4>
                            <div className='d-flex-wrap'>
                                {footerCard.slice(3, 6).map((card) => (
                                    <div className="col-md-4 mb-1 cardItem" key={card.id}>
                                        <img src={card.main_img} className="img-fluid rounded-start" alt="cardpic" style={{ width: "100%", height: "120px", objectFit: 'fill' }}  />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='col-3'>
                            <h4 style={{ textAlign: "center" }}>Youtube</h4>
                            <YouTube videoId="7KFEtvPBbzc" opts={videoOpts} />
                        </div>
                    </div>
                </div>
            </footer>
            <div className='container-fluid' id='copyright'>
                <p className="m-0">
                    &copy; 2024 <a href="https://yourwebsite.com">PPG</a>. All rights reserved.
                </p>
            </div>
        </>
    );
}

export default Footer;
