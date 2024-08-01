import { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import SignupValidation from '../Components/SignupValidation';

const useCode = () => {
    const url = "http://localhost/PP5/1stPP5/dbcon.php";
    const cartUrl = "http://localhost/PP5/1stPP5/cart.php";
    const pcUrl = "http://localhost/PP5/1stPP5/PC.php";
    const videoGameUrl = "http://localhost/PP5/1stPP5/videogame.php";
    const gamingPhoneUrl = "http://localhost/PP5/1stPP5/gamingphone.php";
    const PurchUrl = "http://localhost/PP5/1stPP5/purchases.php";
    const [signUp, setSignUp] = useState({
        firstname: "",
        lastname: "",
        email: "",
        address: "",
        city: "",
        username: "",
        pass: "",
        repass: ""
    });
    const [gamingPhone, setGamingPhone] = useState([]);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignupModal, setShowSignupModal] = useState(false);
    const [prod, setProd] = useState([]);
    const [viewItem, setViewItem] = useState(null);
    const [expandedDesc, setExpandedDesc] = useState(null);
    const [currentImg, setCurrentImg] = useState(null);
    const [view, setView] = useState(false);
    const [userLogin, setUserLogin] = useState({ uname: "", upass: "" });
    const navigate = useNavigate();
    const [arr, setArr] = useState([]);
    const [errors, setErrors] = useState({});
    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const [payment, setPayment] = useState("");
    const [showConfirmPayment, setShowConfirmPayment] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const contactContent = useState('We\'d love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out to us using the information below.');
    const biTelephone = <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="black" className="bi bi-telephone" viewBox="0 0 16 16">
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
          </svg>;
    const biEnvelope =  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="black"className="bi bi-envelope-at" viewBox="0 0 16 16">
    <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"/>
    <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
  </svg>;
  const biMessenger =  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="blue"className="bi bi-messenger" viewBox="0 0 16 16">
  <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.64.64 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.64.64 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76m5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z"/>
</svg>;
const contactInfo =  <h5>Customer Support: (123) 456-7890 <br />
Sales Inquiries: (123) 456-7891
<br />Cellphone Number<br />09757367195</h5>;
const emailInfo = <h5>Email us your questions or <br />conerns and we will give you <br />the help you need<br /><br /><a href="https://mail.google.com/">PPGgameshop@gmail.com</a></h5>;
const messengerInfo = <h5>Chat us we are <br />online during office hours <br />Mondays to Sundays<br /><br />
<a href="m.me/mrpdrvn">m.me/PPGgameshop</a><br />
<a href="www.facebook.com">m.me/PPGgameshop</a><br />
<a href="www.instagram.com">instagram.com/yourpage</a>
</h5>;
const aboutIframe = <iframe 
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15443.737144555504!2d121.0725933286987!3d14.602819257811472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b81d8a03f6c5%3A0x2c718a49bf834007!2sEastwood%20Mall!5e0!3m2!1sen!2sph!4v1719747549722!5m2!1sen!2sph" 
width="400" 
height="300" 
style={{border: 0, width: '100%', height: '100%'}}
allowFullScreen="" 
loading="lazy" 
referrerPolicy="no-referrer-when-downgrade"
title="Google Maps location of Eastwood Mall">
</iframe>;
const aboutContent = "PPG is an acronym from the family name of Darvin Pasigna and Kim Pagunsan, Pasigna Pagunsan Game. They were childhood friends who loved to play games and decided to create an online shop on May 30, 2024. The products are ralated to all gaming gadgets, gaming accessories, gaming desktop PC, tablet, smartphone and many more.";
    

    const handleSignup = (e) => {
        e.preventDefault();
        const validationErrors = SignupValidation(signUp);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            let getData = new FormData();
            getData.append('firstname', signUp.firstname);
            getData.append('lastname', signUp.lastname);
            getData.append('email', signUp.email);
            getData.append('address', signUp.address);
            getData.append('city', signUp.city);
            getData.append('username', signUp.username);
            getData.append('pass', signUp.pass);
            getData.append('repass', signUp.repass);
            getData.append('function', 'insert');

            axios({
                method: "POST",
                url: url,
                data: getData,
                config: { header: 'Content-Type: multipart/form-data' }
            }).then(function () {
                axios.get(url).then((response) => {
                    setArr(response.data);
                    setSignUp({
                        firstname: "",
                        lastname: "",
                        email: "",
                        address: "",
                        city: "",
                        username: "",
                        pass: "",
                        repass: ""
                    });
                });
            });
            alert('Successfully Registered');
            setShowSignupModal(false);
           
        }
    };
    // const existingUser = (user) => {
    //   if(user.username === userLogin.uname && user.pass === userLogin.upass){
    //     navigate('/MemberHome');
    //   }else {
    //     alert('not existed')
    //     navigate('/')
    //   }
    
    // };
    const existingUser = (user) => {
       return (user.username === userLogin.uname && user.pass === userLogin.upass);
      };

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(userLogin.uname, userLogin.upass);
        let getData = new FormData();
        getData.append('uname', userLogin.uname);
        getData.append('upass', userLogin.upass);
        getData.append('function', 'login');

        console.log('Sending data:', Object.fromEntries(getData.entries())); 

        axios({
            method: 'POST',
            data: getData,
            url: url
        }).then(() => {
            axios.get(url).then((res) => {
                console.log("Login Response:", res.data); 
                console.log((res.data).filter(existingUser));
            });
        });
        navigate('/MemberHome');
    };

    const handleSignUpChange = (field, value) => {
        setSignUp(prevState => ({
            ...prevState,
            [field]: value
        }));
    };

    const handleLoginChange = (field, value) => {
        setUserLogin(prevState => ({
            ...prevState,
            [field]: value
        }));
    };
    const addToCart = (item) => {
        let getData = new FormData();
        getData.append('Name', item.Name);
        getData.append('price', item.price);
        getData.append('main_img', item.main_img);
        getData.append('function', 'add');
    
        axios({
          method: "POST",
          url: cartUrl,
          data: getData,
          headers: { 'Content-Type': 'multipart/form-data' }
        }).then((response) => {
          if (response.data) {
            axios.get(cartUrl).then((response) => {
              setCartCount(response.data.length);
              alert(item.Name + ' successfully added to your cart');
            });
          } 
        })
      };

      const addCart = () => {
        let getData = new FormData();
        getData.append('Name', viewItem.Name);
        getData.append('price', viewItem.price);
        getData.append('main_img', viewItem.main_img);
        getData.append('description', viewItem.description);
        getData.append('function', 'add');
    
        axios({
          method: "POST",
          url: cartUrl,
          data: getData,
          headers: { 'Content-Type': 'multipart/form-data' }
        }).then((response) => {
          if (response.data) {
            axios.get(cartUrl).then((response) => {
              console.log(response.data);
              setCartCount(response.data.length);
              alert(viewItem.Name + ' successfully added to your cart');
              setView(false);
            });
          } 
        })
      };

      const addNew = () => {
        let getData = new FormData();
        getData.append('Name', prod[10].Name);
        getData.append('price', prod[10].price);
        getData.append('main_img', prod[10].main_img);
        getData.append('function', 'add');
    
        axios({
          method: "POST",
          url: cartUrl,
          data: getData,
          headers: { 'Content-Type': 'multipart/form-data' }
        }).then((response) => {
          if (response.data) {
            axios.get(cartUrl).then((response) => {
              setCartCount(response.data.length);
              alert(prod[10].Name+ ' successfully added to your cart');
            });
          } 
        })
      };

      const handleViewItem = (item) => {
        setViewItem(item);
        setView(true);
        setCurrentImg(item.main_img);
      };
    
      const showMoreDesc = (item) => {
        setExpandedDesc(expandedDesc === item ? null : item);
      };
    
      const changeImage = (img) => {
        setCurrentImg(img);
      };
    
      function paymentMethod() {
        if (payment === "Gcash") {
          return "Gcash";
        } else if (payment === "Maya") {
          return "Maya";
        } else {
          return "Cash On Delivery";
        }
      }
      const chunkArray = (array, chunkSize) => {
        const result = [];
        for (let i = 0; i < array.length; i += chunkSize) {
          result.push(array.slice(i, i + chunkSize));
        }
        return result;
      };
  
      const pcImages = chunkArray(prod, 6); 
      const gPhoneImages = chunkArray(gamingPhone, 6);

    return {
        signUp, setSignUp,
        showLoginModal, setShowLoginModal,
        showSignupModal, setShowSignupModal,
        userLogin, setUserLogin,
        navigate,
        arr, setArr,
        url,
        existingUser,
        handleSignup,
        handleLogin,
        handleSignUpChange, handleLoginChange,
        errors, setErrors,
        contactContent,
        biTelephone,
        biEnvelope,
        biMessenger,
        contactInfo,
        emailInfo,
        messengerInfo,
        aboutIframe,
        aboutContent,
        addToCart,
        cartCount, setCartCount,
        cartUrl, pcUrl, videoGameUrl, gamingPhoneUrl, PurchUrl,
        view, setView,
        prod, setProd,
        viewItem, setViewItem,
        expandedDesc, setExpandedDesc,
        currentImg, setCurrentImg,
        showMoreDesc, handleViewItem,
        changeImage,
        cartItems, setCartItems,
        selectedItems, setSelectedItems,
        payment, setPayment,
        showConfirmPayment, setShowConfirmPayment,
        showSuccess, setShowSuccess,
        paymentMethod, 
        pcImages, gPhoneImages, gamingPhone, 
        setGamingPhone, addCart, addNew
    };
};

export default useCode;
