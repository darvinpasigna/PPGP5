import React, { useState, useEffect } from 'react';
import '../App.css';
import Carou from '../Components/Carou';
import Card from '../Components/Card';
import NavBar from '../Components/Nav';
import Footer from '../Components/Footer';
import LoginComp from '../Components/LoginComp';
import useCode from '../Code/Code';
import ViewItem from '../Components/ViewItem';
import SignupForm from '../Components/SignupForm';

function Home() {
  const [showForgot, setShowForgot] = useState(false);
  const { 
    setShowLoginModal, showLoginModal, 
    showSignupModal, setShowSignupModal, 
    view, setView, 
    pcUrl, viewItem, 
    changeImage, currentImg,
    expandedDesc, showMoreDesc,
    handleViewItem, gamingPhoneUrl, setGamingPhone,
    pcImages, gPhoneImages, prod, setProd
      } = useCode();
 
  useEffect(() => {
    fetch(pcUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProd(data);
      });
      fetch(gamingPhoneUrl)
      .then((response) => response.json())
      .then((data) => {
        setGamingPhone(data);
      })
  }, []);

  return (
    
    <>
    <div className="background"></div>
      <NavBar setShowLoginModal={setShowLoginModal} />

      <LoginComp 
        showLoginModal={showLoginModal} 
        showSignupModal={showSignupModal} 
        setShowSignupModal={setShowSignupModal} 
        setShowLoginModal={setShowLoginModal} 
      />
      
        <div className='row mt-1'>
          <div className='col-8'><Carou /></div>
          <div className='col-4'><SignupForm /> </div>
      </div>

      <Card
        prod={prod} setProd={setProd}
        handleViewItem={handleViewItem}
        showForgot={showForgot}
        setShowForgot={setShowForgot}
        setShowSignupModal={setShowSignupModal} 
        setShowLoginModal={setShowLoginModal}
        pcImages={pcImages} 
        gPhoneImages={gPhoneImages}
      />,
      <br />
      <br />
      <ViewItem 
        viewItem={viewItem} 
        changeImage={changeImage}
        currentImg={currentImg}
        expandedDesc={expandedDesc}
        showMoreDesc={showMoreDesc}
        view={view}
        setView={setView}
      />
      <Footer />
    </>
  );
}

export default Home;
