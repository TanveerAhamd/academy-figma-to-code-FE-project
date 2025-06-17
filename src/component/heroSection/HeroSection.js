import React from 'react'
import './herosection.css';
import '../../App.css';

import Girl from '../../assets/images/1-removebg 1.png'
import Ellipse from '../../assets/images/Ellipse 4.png'
import Frame1 from '../../assets/images/Frame (1).png'
import Frame from '../../assets/images/Frame.png'
import Polygon from '../../assets/images/Polygon 1.png'
// import Arrow from '../../assets/images/arrows.png'
// import Arrow1 from '../../assets/images/arrows (1).png'

function HeroSection() {
    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-md-6 d-flex flex-column justify-content-center'>
                    <p className='text-capitalize custom-font-family instructors-size mb-0'>
                        🙌 Hello friends   I am  Sofia and we want to start A  <span className='text-color-custom'> Web Design</span> web design course together.<br/>Do you like it too 😍 ?
                    </p>

                    <div className='mt-5'>
                        <div className='my-2 d-flex position-relative'>
                            <button type="button" className="btn btn-dark custom-font-family">
                                Start course now
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right ms-3" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                </svg>
                            </button>
                            <div className='persentage-div custom-font-family fw-medium d-flex align-items-center justify-content-center ms-4 rounded-circle '>
                                79%
                            </div>
                            <div className='fw-medium d-flex custom-font-family align-items-center justify-content-center ms-4 rounded-pill bg-light px-3'>
                                Booked
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 position-relative'>
                    <div className='circle-background'></div>
                    <img src={Girl} alt='Sofia' className='img-width  mt-5 shadow-effect' />
                    <div className='ux-ui-text fs-1'>UI & UX</div>
                    <img src={Ellipse} alt='Ellipse' className='position-absolute ellipse-img' />
                    <img src={Frame1} alt='Frame1' className=' position-absolute frame1-img' />
                    <img src={Frame} alt='Frame' className='position-absolute frame-img d-md-block d-none' />
                    <img src={Polygon} alt='Polygon' className='position-absolute polygon-img d-md-block d-none' />
                </div>
            </div>
        </div>
    )
}

export default HeroSection