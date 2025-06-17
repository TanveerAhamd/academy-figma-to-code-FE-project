import React from 'react'
import './newsLetter.css';

function NewsLetter() {
    return (
        <div className='container'>
            <div className='bg-light rounded-start rounded-5'>
                <div className='row mt-5 justify-content-end'>
                    <div className='col-md-6 d-flex align-items-center'>
                        <p className='text-capitalize ps-5 mb-0 fw-bold instructors-size'>Find out about the latest courses with the <span className='text-color-custom1'>academy</span> newsletter</p>
                    </div>
                    <div className='col-md-6 pe-0 d-flex justify-content-center justify-content-md-end'>
                        <div className='bg-color-custom rounded-5 py-5 px-3'>
                            <div className='bg-white bg-white-custom p-2 d-flex justify-content-center rounded-3 shadow-lg my-5'>
                                <input
                                    type="email"
                                    placeholder="Email address..."
                                    className="form-control  border-0 custom-font-family"
                                />
                                <button type="button" className="btn btn-dark custom-font-family fw-medium card-button-size">SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter;
