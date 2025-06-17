import React from 'react';
import './footer.css';
import FooterLogo from '../../assets/images/logo.png';
import Footerimg from '../../assets/images/image.png';

function Footer() {
    return (
        <footer className='container'>
            <div className='bg-light p-3 rounded my-5'>
                <div className='footer-top'>
                    <div className='row'>
                        <div className='col-md-9'>
                            <div className='custom-bg p-3 rounded-3'>
                                <p className='mb-0 course-text custom-font-family'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
                                    congue mauris rhoncus aenean vel elit scelerisque.
                                    In egestas erat imperdiet sed euismod nisi porta lorem mollis.
                                    Morbi tristique senectus et netus. Mattis pellentesque id nibh
                                    tortor id aliquet lectus proin. Sapien faucibus et molestie ac
                                    feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper
                                    morbi tincidunt ornare massa eget. Dictum varius duis at consectetur
                                    lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim.
                                    Velit ut tortor pretium
                                </p>
                            </div>
                        </div>
                        <div className='col-md-3 text-center'>
                            <img src={FooterLogo} className='img-fluid' alt='Footer logo' />
                        </div>
                    </div>
                </div>
                <div className='footer-middle py-4'>
                    <div className="container-footer w-container">
                        <div className="row">
                            <div className="footer-column col-md-4 mb-2">
                                <p className="fw-semibold course-heading mb-0 text-uppercase pb-3 ps-2">Membership Certificate</p>
                                <img src={Footerimg} alt="Footer Logo" className=" img-fluid" />
                            </div>
                            <div className="footer-column col-md-8 my-2">
                                <div className="row custom-font-family">
                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-7 col-sm-6">
                                                <p className="footer-titles fw-semibold course-heading mb-0 text-uppercase pb-3">Categories</p>
                                                <p className="footer-links">
                                                    <a href="" className="footer-link fw-medium card-text-size">Designing<br /></a>
                                                    <a href="" className="footer-link fw-medium card-text-size">Programming<br /></a>
                                                    <a href="" className="footer-link fw-medium card-text-size">Graphics<br /></a>
                                                    <a href="" className="footer-link fw-medium card-text-size">Front End<br /></a>
                                                    <a href="" className="footer-link fw-medium card-text-size">Composition<br /></a>
                                                    <a href="" className="footer-link fw-medium card-text-size">Tailoring<br /></a>
                                                    <a href="" className="footer-link fw-medium card-text-size">Database<br /></a>
                                                    <a href="" className="footer-link fw-medium card-text-size">Sport<br /></a>
                                                    <a href="" className="footer-link fw-medium card-text-size">Cooking<br /></a>
                                                    <a href="" className="footer-link fw-medium card-text-size">Driving<br /></a>
                                                    <a href="" className="footer-link fw-medium card-text-size">Photography<br /></a>
                                                    <a href="" className="footer-link fw-medium card-text-size">Camerawork<br /></a>
                                                </p>
                                            </div>
                                            <div className="col-5 col-sm-6">
                                                <p className="footer-titles fw-semibold course-heading mb-0 text-uppercase pb-3">Quick Access</p>
                                                <p className="footer-links">
                                                    <a href="" className="footer-link fw-medium card-text-size fw-medium card-text-size">What We Offer<br /></a>
                                                    <a href="" className="footer-link fw-medium card-text-size">Careers<br /></a>
                                                    <a href="" className="footer-link fw-medium card-text-size">Leadership<br /></a>
                                                    <a href="" className="footer-link fw-medium card-text-size">About<br /></a>
                                                    <a href="" className="footer-link fw-medium card-text-size">Catalog<br /></a>
                                                    <a href="" className="footer-link fw-medium card-text-size">Degrees<br /></a>
                                                    <a href="" className="footer-link fw-medium card-text-size">For Enterprise<br /></a>
                                                    <a href="" className="footer-link fw-medium card-text-size">For Government<br /></a>
                                                    <a href="" className="footer-link fw-medium card-text-size">For Campus<br /></a>
                                                    <a href="" className="footer-link fw-medium card-text-size">Become a Partner<br /></a>
                                                    <a href="" className="footer-link fw-medium card-text-size">Terms<br /></a>
                                                    <a href="" className="footer-link fw-medium card-text-size">Accessibility<br /></a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <p className="footer-titles fw-semibold course-heading mb-0 text-uppercase pb-3">new comment</p>
                                        <div className='coment-bg-light p-2 my-2 text-capitalize rounded'>
                                            <p className='mb-1 fw-medium '>ellsmartx</p>
                                            <p className='mb-0 card-text-size-12'>how nice does this look 😍 I feel it should be delicious, thank you</p>
                                        </div>
                                        <div className='coment-bg-light p-2 my-2 text-capitalize rounded'>
                                            <p className='mb-1 fw-medium '>ellsmartx</p>
                                            <p className='mb-0 card-text-size-12'>how nice does this look 😍 I feel it should be delicious, thank you</p>
                                        </div>
                                        <div className='coment-bg-light p-2 my-2 text-capitalize rounded'>
                                            <p className='mb-1 fw-medium '>ellsmartx</p>
                                            <p className='mb-0 card-text-size-12'>how nice does this look 😍 I feel it should be delicious, thank you</p>
                                        </div>
                                        <div className='coment-bg-light p-2 my-2 text-capitalize rounded'>
                                            <p className='mb-1 fw-medium '>ellsmartx</p>
                                            <p className='mb-0 card-text-size-12'>how nice does this look 😍 I feel it should be delicious, thank you</p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer-end p-3 coment-bg-light rounded'>
                    <div className='d-flex flex-column flex-md-row justify-content-between align-items-center'>
                        <p className='mb-0'>&copy; 2019 Something. All rights reserved.</p>
                        <div className='legal__links mt-2 mt-md-0'>
                            <span>Practice by <span className='heart'>♥Tanveer</span> from siteoffie</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
