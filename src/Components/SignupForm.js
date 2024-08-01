import React from 'react'
import useCode from '../Code/Code';
import '../App.css';

const SignupForm = () => {
    const { 
        signUp, 
        handleSignup,
        errors,
        handleSignUpChange
        } = useCode();
  return (
    <>
    <div style={{paddingRight: "50px"}}>
    <form onSubmit={handleSignup}>
          <p className='promo-message' style={{color: "#870000"}}>
          We are giving a discount of up to 50% to new members.
          </p>
            <fieldset className='p-10'>
            <legend style={{textAlign: "center", fontFamily: 'fantasy'}}>Register Here. . .</legend>
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
    </>
  )
}

export default SignupForm;