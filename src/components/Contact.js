import React from 'react'

const Contact = () => {
    return (
        <>
            <section className='background-banner '>
                <div className='container pt-5 '>
                    <div className='contact-section'>
                        <div className='row pt-5 form-input'>
                            <div className='col col-lg-6'>
                                <h4 className='text-first '>SIGN UP NEWSLETTER</h4>
                                <p className='text-first'>Sign up And get latest offer</p>
                            </div>
                            <div className='col col-lg-6 py-6'>
                                <form className='input-group'>
                                    <input type="email" className='form-control' placeholder='Your Email' />
                                    <button type='submit' className='input-btn'>Submit</button>
                                </form>
                            </div>
                        </div>

                        <div className='footer-item'>
                            <div className='row pt-5 first-box-footer'>
                                <div className='col col-lg-4'>
                                    <img src="./images/logo.png" alt="footer-logo" />

                                    <p className='footer-text text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sunt ex ad, expedita fuga minus error voluptatum ipsa.</p>
                                    <a href="!#" className='footer-icon'>
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                    <a href="!#" className='footer-icon'>
                                        <i class="fab fa-facebook"></i>
                                    </a>
                                    <a href="!#" className='footer-icon'>
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                </div>

                                <div className='col col-lg-4 pt-3 '>
                                    <h4>Your Account</h4>
                                    <div className='account-item'>
                                        <ul className='list-item '>
                                            <li text-unstyle>
                                                <a href="!#">Personal Info</a>
                                            </li>
                                            <li>
                                                <a href="!#">Specials</a>
                                            </li>
                                            <li>
                                                <a href="!#">About us</a>
                                            </li>
                                            <li>
                                                <a href="!#">Contact</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className='col col-lg-4 pt-3'>
                                    <h4>Store Information</h4>
                                    <div className='store-info'>
                                        <div className='account-item'>
                                            <ul className='store-list '>
                                                <li className='d-flex align-item-baseline'>
                                                <i class="fa-solid fa-location-dot pe-2"></i>
                                                <p className='text-white' >Madanpur,Badaraghunathpur,752054</p>
                                                </li>
                                                <li className='d-flex'>
                                                <i class="fa-solid fa-phone pe-2"></i>
                                                <a href="!#">7381572027</a>
                                                </li>
                                                <li className='d-flex list-unstyle'>
                                                <i class="fa-solid fa-envelope pe-2"></i>
                                                <a href="!#">rameswarparida143@gmail.com</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 text-center pt-5'>
                                    <p> @copy: 2023 Mr.Rameswar Parida present All Rights Reserved </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;
