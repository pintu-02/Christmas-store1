import React from 'react'


const Navbar = () => {
    return (
        <>
            <section>
                <div className='main-container'>
                    <div className='container'>
                        <div className='Header-Navbar'>
                            <nav className="navbar navbar-expand-lg fixed-top">
                                <div className="container">
                                    <a className="navbar-brand" href="!#">
                                        <img src="./images/logo.png " className='image-fluid' alt="logo" />
                                    </a>
                                    <button className="navbar-toggler pe-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                        {/* <span className="navbar-toggler-icon"></span> */}

                                        <i className="fa-fa-bars-staggered navbar-toggler-icon"></i>
                                    </button>
                                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                                        <ul className="navbar-nav">
                                            <li className="nav-item">
                                                <a className="nav-link active" aria-current="page" href="!#" >Home</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="!#">Wish</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="!#">Best-Deals</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="!#">Donate</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="!#">Testimonial</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="!#">Contact</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <section className='banner_wrapper'>
                <div className='container-fluid'>
                    <div className='banner-section'>
                        <div id="carouselExampleSlidesOnly" className="carousel slide " data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            </div>
                            <div class="carousel-inner w-100">
                                <div class="carousel-item active">
                                    <img src=".\images\Slider\slider-1.png" className="d-block w-100 " alt="banner-image" />
                                    <div className='banner-text text-start carousel-caption'>
                                        <h1>Merry <br /> Christmass</h1>
                                        <h3>Gorgeous Collection</h3>
                                        <p>Flat 30% off All Christmass Accessories on Your First Purches</p>
                                        <a href="!#" className='btn btn-primary'>SHOP NOW</a>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src=".\images\Slider\slider-2.png" className="d-block w-100 " alt="banner-image" />
                                    <div className='banner-text text-start carousel-caption '>
                                        <h1>Marry <br /> Christmass</h1>
                                        <h3>Gorgeous Collection</h3>
                                        <p>Flat 30% off All Christmass Accessories on Your First Purches</p>
                                        <a href="!#" className='btn btn-primary'>SHOP NOW</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
            </section>
        </>
    )
}

export default Navbar;
