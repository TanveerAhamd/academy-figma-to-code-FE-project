import React from 'react';

import courseImg from '../../assets/images/10.png';

const courses = [
    { id: 1, title: 'Learn Figma - UI/UX Design Essential Training', lessons: 6, students: 198, level: 'Beginner'},
    { id: 2, title: 'Learn Figma - UI/UX Design Essential Training', lessons: 6, students: 198, level: 'Beginner'},
    { id: 3, title: 'Learn Figma - UI/UX Design Essential Training', lessons: 6, students: 198, level: 'Beginner'},
    { id: 1, title: 'Learn Figma - UI/UX Design Essential Training', lessons: 6, students: 198, level: 'Beginner'},
    { id: 2, title: 'Learn Figma - UI/UX Design Essential Training', lessons: 6, students: 198, level: 'Beginner'},
    { id: 3, title: 'Learn Figma - UI/UX Design Essential Training', lessons: 6, students: 198, level: 'Beginner'},
];

function NewCourses() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-4 col-lg-4'>
                    <p className='p-2 m-0 custom-font-family fw-semibold course-heading text-uppercase'>New Courses</p>
                </div>

                <div className='col-lg-8 col-md-8'>
                    <div className='row'>
                        <div className='col-lg-2 col-md-4 col-6 p-1'>
                            <div className='bg-light rounded p-2 text-center custom-font-family'>
                                <span className='fw-medium course-text text-capitalize'>All Courses</span>
                            </div>
                        </div>
                        <div className='col-lg-2 col-md-4 col-6 p-1'>
                            <div className='bg-light rounded p-2 text-center custom-font-family'>
                                <span className='fw-medium course-text'>Design</span>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-4 col-6 p-1'>
                            <div className='bg-light rounded p-2 text-center custom-font-family'>
                                <span className='fw-medium course-text'>Development</span>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-4 col-6 p-1'>
                            <div className='bg-light rounded p-2 text-center custom-font-family'>
                                <span className='fw-medium course-text'>Photography</span>
                            </div>
                        </div>
                        <div className='col-lg-2 col-md-4 col-6 p-1'>
                            <div className='bg-light rounded p-2 text-center custom-font-family'>
                                <span className='fw-medium course-text'>Music</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row mt-3'>
                {courses.map(course => (
                    <div className='col-lg-4 col-md-6 py-2' key={course.id}>
                        <div className="card border-0 shadow p-2">
                            <img src={courseImg} className="img-fluid" alt="courseImg" />
                            <div className="card-body custom-font-family">
                                <p className="card-title fw-medium text-truncate">{course.title}</p>
                                <div className='row mt-3'>
                                    <div className=' col-lg-6 col-md-6 col-6 my-1'>
                                        <div className=''>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-journal-bookmark" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M6 8V1h1v6.117L8.743 6.07a.5.5 0 0 1 .514 0L11 7.117V1h1v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8" />
                                                <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" />
                                                <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
                                            </svg>
                                            <span className='ps-1 card-text-size fw-medium'>Lesson: {course.lessons}</span>
                                        </div>
                                    </div>
                                    <div className=' col-lg-6 col-md-6 col-6 my-1'>
                                        <div className=''>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                            </svg>
                                            <span className='ps-1 card-text-size fw-medium'>Student: {course.students}</span>
                                        </div>
                                    </div>
                                    <div className=' col-lg-6 col-md-6 col-6 my-1'>
                                        <div className=''>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trophy-fill" viewBox="0 0 16 16">
                                                <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935" />
                                            </svg>
                                            <span className='ps-1 card-text-size fw-medium'>{course.level}</span>
                                        </div>
                                    </div>
                                </div>
                              
                                <div className='d-flex justify-content-between mt-3'>
                                    <button type="button" className="btn btn-dark card-button-size fw-medium">
                                        Start course now
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right ms-3" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                    </svg>
                                    </button>
                                    <div>
                                    <div className='persentage-div fw-medium d-flex align-items-center justify-content-center ms-4 rounded-circle '>
                                        79%
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NewCourses;
