import React, { useEffect } from 'react';
import NavLogin from '../../Components/NavLogin';
import Footer from '../../Components/Footer';
import LoginCards from '../../Components/LoginCards';
import Carou from '../../Components/Carou';
import axios from 'axios';
import useCode from '../../Code/Code';
import ViewNadd2cart from '../../Components/ViewNadd2cart';

function MemberHome() {
  const {cartCount, setCartCount, 
    cartUrl, addToCart,
    view, setView, viewItem, 
    changeImage, currentImg,
    expandedDesc, showMoreDesc,
    handleViewItem, pcUrl,
    gamingPhoneUrl, setGamingPhone,
    pcImages, gPhoneImages, prod, setProd, addCart, addNew  } = useCode();

  useEffect(() => {
    axios.get(cartUrl)
      .then((response) => {
        setCartCount(response.data.length);
      });
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
  }, [cartUrl]);

  return (
    <>
      <NavLogin cartCount={cartCount} />
      <div className="background"></div>
      <Carou />
      <br />
      <br />
      <div className="row">
        <div className="col-xl-8 mb-5 px-5">
          <p className="text-uppercase text-muted fw-bold mb-1">Top choices</p>
          <h3>Popular this week</h3>
        </div>
      </div>
      <LoginCards 
      handleViewItem={handleViewItem} 
      addToCart={addToCart}
      pcImages={pcImages} 
      gPhoneImages={gPhoneImages} 
      prod={prod}
      addNew={addNew}
      />
      <ViewNadd2cart
       viewItem={viewItem} 
       changeImage={changeImage}
       currentImg={currentImg}
       expandedDesc={expandedDesc}
       showMoreDesc={showMoreDesc}
       view={view}
       setView={setView}
       addCart={addCart}
      />
      <br />
      <br />
      <Footer />
    </>
  );
}

export default MemberHome;
