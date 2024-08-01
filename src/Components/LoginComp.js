import React from 'react';
import useCode from '../Code/Code';

function LoginComp({showLoginModal, showSignupModal, setShowSignupModal, setShowLoginModal}) {
    const { 
        userLogin,
        signUp, 
        handleLogin, 
        handleSignup,
        errors,
        handleSignUpChange, 
        handleLoginChange,
        } = useCode();

    return (
        <>
            {/* Login Modal */}
            <div className="modal" id="login" style={{ display: showLoginModal ? 'block' : 'none' }}>
                <div className="modal-dialog modal-dialog-centered" style={{ width: "400px" }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                onClick={() => setShowLoginModal(false)}
                            ></button>
                        </div>
                        <form onSubmit={handleLogin}>
                            <fieldset>
                                <div className="form-floating">
                                    <input
                                        name='uname'
                                        id="uname"
                                        className="form-control"
                                        value={userLogin.uname}
                                        onChange={(e) => handleLoginChange('uname', e.currentTarget.value)}
                                        required
                                    />
                                    <label htmlFor="uname" style={{ fontStyle: "italic", fontFamily: "sans-serif", fontWeight: "bolder" }}>USERNAME:</label>
                                </div>
                                <br />
                                <div className="form-floating">
                                    <input
                                        name='upass'
                                        type="password"
                                        id="upass"
                                        className="form-control"
                                        value={userLogin.upass}
                                        onChange={(e) => handleLoginChange('upass', e.currentTarget.value)}
                                        required
                                    />
                                    <label
                                        style={{
                                            fontStyle: "italic",
                                            fontFamily: "sans-serif",
                                            fontWeight: "bolder"
                                        }}>PASSWORD:</label>
                                </div>
                                <br />
                                <button
                                    id='openlogin'
                                    type="submit"
                                    className="btn btn-primary form-control"
                                >Login</button>
                                <br /> <br />
                                <p style={{ color: "red" }}>Forgot password?</p>
                                <br />
                                <p>Not a member?</p>
                                <button
                                    className='btn btn-success form-control'
                                    type='button'
                                    onClick={() => {
                                        setShowLoginModal(false);
                                        setShowSignupModal(true);
                                    }}
                                >Sign Up</button>
                                <br /><br />
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
            {/* End Login Modal */}

            {/* Sign up Modal */}
            <div className="modal" id="signup"
                style={{ display: showSignupModal ? 'block' : 'none' }}
            >
                <div className="modal-dialog modal-dialog-centered" style={{ width: "400px" }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5>SIGN UP</h5>
                            <button type="button"
                                className="btn-close" aria-label="Close"
                                onClick={() => setShowSignupModal(false)}
                            ></button>
                        </div>
                        <form onSubmit={handleSignup}>
                            <fieldset>

                                <div className='mb-2'>
                                    <div className="input-group input-group-sm">
                                        <span className="input-group-text">First Name</span>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name='firstname' 
                                            id="firstname" 
                                            value={signUp.firstname} 
                                            onChange={(e) => handleSignUpChange('firstname', e.target.value)} />
                                    </div> {errors.firstname && <span className='text-danger'>{errors.firstname}</span>}
                                </div>

                                <div className='mb-2'>
                                    <div className="input-group input-group-sm">
                                        <span className="input-group-text">Last Name</span>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name='lastName' 
                                            id='lastName' 
                                            value={signUp.lastname}
                                            onChange={(e) => handleSignUpChange('lastname', e.target.value)} />
                                    </div>{errors.lastname && <span className='text-danger'>{errors.lastname}</span>}
                                </div>

                                <div className='mb-2'>
                                    <div className="input-group input-group-sm">
                                        <span className="input-group-text">Email</span>
                                        <input 
                                            type="email" 
                                            className="form-control" 
                                            name='email' 
                                            id='email' 
                                            value={signUp.email} 
                                            onChange={(e) => handleSignUpChange('email', e.target.value)} />
                                    </div>{errors.email && <span className='text-danger'>{errors.email}</span>}
                                </div>

                                <div className='mb-2'>
                                    <div className="input-group input-group-sm">
                                        <span className="input-group-text">Address</span>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name='address' 
                                            id='address' 
                                            value={signUp.address} 
                                            onChange={(e) => handleSignUpChange('address', e.target.value)} />
                                    </div>{errors.address && <span className='text-danger'>{errors.address}</span>}
                                </div>

                                <div className='mb-2'>
                                    <div className="input-group input-group-sm">
                                        <span className="input-group-text">City</span>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name='city' 
                                            id='city' 
                                            value={signUp.city} 
                                            onChange={(e) => handleSignUpChange('city', e.target.value)} />
                                    </div>{errors.city && <span className='text-danger'>{errors.city}</span>}
                                </div>

                                <div className='mb-2'>
                                    <div className="input-group input-group-sm">
                                        <span className="input-group-text">Create Username</span>
                                        <input
                                            name='username'
                                            id='username'
                                            className="form-control"
                                            type="text"
                                            value={signUp.username} 
                                            onChange={(e) => handleSignUpChange('username', e.target.value)}
                                        />
                                    </div>{errors.username && <span className='text-danger'>{errors.username}</span>}
                                </div>

                                <div className='mb-2'>
                                    <div className="input-group input-group-sm">
                                        <span className="input-group-text">Create Password</span>
                                        <input
                                            name='pass'
                                            id='pass'
                                            className="form-control"
                                            type="password"
                                            value={signUp.pass} 
                                            onChange={(e) => handleSignUpChange('pass', e.target.value)}
                                        />
                                    </div>{errors.pass && <span className='text-danger'>{errors.pass}</span>}
                                </div>

                                <div className='mb-2'>
                                    <div className="input-group input-group-sm">
                                        <span className="input-group-text">Re-Enter Password</span>
                                        <input
                                            name='repass'
                                            id='repass'
                                            className="form-control"
                                            type="password"
                                            value={signUp.repass} 
                                            onChange={(e) => handleSignUpChange('repass', e.target.value)}
                                        /> 
                                    </div>{errors.repass && <span className='text-danger'>{errors.repass}</span>}
                                </div>
                                <br />
                                <button
                                    id='opensignup'
                                    className="btn btn-success form-control"
                                    type='submit'
                                >SUBMIT</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
            {/* End Sign Up Modal */}
        </>
    );
}

export default LoginComp;
