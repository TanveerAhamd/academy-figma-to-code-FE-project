import React from 'react';
import './bestInstructors.css';
import courseImg from '../../assets/images/10.png';

const instructors = [
    { id: 1, name: 'Tanni', role: 'Developer' },
    { id: 2, name: 'Tanni', role: 'Developer' },
    { id: 3, name: 'Tanni', role: 'Developer' },
    { id: 4, name: 'Tanni', role: 'Developer' },
    { id: 5, name: 'Tanni', role: 'Developer' },
    { id: 6, name: 'Tanni', role: 'Developer' },
];

function BestInstructors() {
    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-md-5 d-flex flex-column justify-content-center'>
                    <div className='row custom-font-family'>
                        <p className='text-capitalize lh-lg instructors-size'>
                            <span className='text-color-custom'>best</span> Instructors<br />
                        </p>
                        <p className='text-capitalize course-text mt-3'>
                            At the Academy, we strive to bring together the best<br />
                            professors for the best courses
                        </p>
                    </div>

                    <div className='row mt-5'>
                        <div className='my-2 d-flex position-relative'>
                            <button type="button" className="btn btn-dark fw-medium card-button-size">
                                Start course now
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right ms-3" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                </svg>
                            </button>
                            <div className='fw-medium d-flex align-items-center ms-4 rounded-pill bg-light px-3'>
                                54 Instructor
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-md-7'>
                    <div className='row mt-3'>
                        {instructors.map(instructor => (
                            <div className='col-lg-4 col-md-6 py-2' key={instructor.id}>
                                <div className="card border-0 shadow p-2">
                                    <img src={courseImg} className="img-fluid" alt="courseImg" />
                                    <div className="card-body">
                                        <div className='d-flex justify-content-between pt-2'>
                                            <p className='fw-bolder mb-0 card-text-size'>{instructor.name}</p>
                                            <span className='card-text-size-12'>{instructor.role}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BestInstructors;
