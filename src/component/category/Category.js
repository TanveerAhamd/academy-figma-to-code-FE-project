import React from 'react';
import './category.css';

function Category() {
    return (
        <div className='container'>
            <div className='row mt-3'>
                <div className='col-lg-4 col-md-6 col-12 d-flex flex-wrap gap-2 p-1'>
                    <div className='code-icon rounded py-2 px-3'>
                        <span className='fw-medium custom-font-family'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgba(0, 158, 104, 1)" className="bi bi-code-slash" viewBox="0 0 16 16">
                                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
                            </svg>
                        </span>
                    </div>
                    <div className='text-div rounded py-2 px-3'>
                        <span className='fw-medium custom-font-family'>Python</span>
                    </div>
                    <div className='text-div  rounded py-2 px-3'>
                        <span className='fw-medium custom-font-family'>React</span>
                    </div>
                    <div className='text-div  rounded py-2 px-3'>
                        <span className='fw-medium custom-font-family'>Unity</span>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-12 d-flex flex-wrap gap-2 p-1'>
                    <div className='pen-icon  rounded py-2 px-3'>
                        <span className='fw-medium custom-font-family'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgba(158, 92, 242, 1)" className="bi bi-vector-pen" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5.5 0 0 1 5.43 3.377l3.313-.828zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z" />
                                <path fillRule="evenodd" d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086z" />
                            </svg>
                        </span>
                    </div>
                    <div className='text-div  rounded py-2 px-3'>
                        <span className='fw-medium custom-font-family'>ui & ux</span>
                    </div>
                    <div className='text-div  rounded py-2 px-3'>
                        <span className='fw-medium custom-font-family'>vector</span>
                    </div>
                    <div className='video-icon  rounded py-2 px-3'>
                        <span className='fw-medium custom-font-family'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgba(255, 60, 49, 1)" className="bi bi-camera-video" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z" />
                            </svg>
                        </span>
                    </div>

                </div>
                <div className='col-lg-4 col-md-12 col-12 d-flex flex-wrap gap-2 p-1'>
                    <div className='text-div  rounded p-2'>
                        <span className='fw-medium custom-font-family'>AfterEffects</span>
                    </div>
                    <div className='text-div  rounded p-2'>
                        <span className='fw-medium custom-font-family'>Lightroom</span>
                    </div>
                    <div className='text-div rounded p-2'>
                        <span className='fw-medium custom-font-family'>Photography</span>
                    </div>
                    <div className='p-2 d-lg-none d-block d-xl-block'>
                        <span className='fw-medium custom-font-family'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Category;
