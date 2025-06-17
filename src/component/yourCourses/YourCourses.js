import React from 'react';
import './yourCourses.css';
import courseImg from '../../assets/images/05.png';
import Profile from '../../assets/images/IMG_03999 1.png';

const courses = [
    {
        id: 1,
        title: 'Google Ads Training 2021: Profit with Pay',
        lessons: 6,
        students: 198,
        level: 'Beginner',
        progress: 75,
        days: 56,
        instructor: {
            name: 'Behzad Pashaei',
            role: 'UI & UX Designer',
            profileImg: Profile
        }
    },
    {
        id: 1,
        title: 'Google Ads Training 2021: Profit with Pay',
        lessons: 6,
        students: 198,
        level: 'Beginner',
        progress: 75,
        days: 56,
        instructor: {
            name: 'Behzad Pashaei',
            role: 'UI & UX Designer',
            profileImg: Profile
        }
    },
    {
        id: 1,
        title: 'Google Ads Training 2021: Profit with Pay',
        lessons: 6,
        students: 198,
        level: 'Beginner',
        progress: 75,
        days: 56,
        instructor: {
            name: 'Behzad Pashaei',
            role: 'UI & UX Designer',
            profileImg: Profile
        }
    },
    {
        id: 1,
        title: 'Google Ads Training 2021: Profit with Pay',
        lessons: 6,
        students: 198,
        level: 'Beginner',
        progress: 75,
        days: 56,
        instructor: {
            name: 'Behzad Pashaei',
            role: 'UI & UX Designer',
            profileImg: Profile
        }
    },
    // You can add more course objects here
];

function YourCourses() {
    return (
        <div className='container mt-5'>
            <div className='d-flex justify-content-between custom-font-family'>
                <p className='p-2 m-0 custom-font-family fw-semibold course-heading text-uppercase'>Your courses</p>
                <div className='bg-light rounded p-2'>
                    <span className='fw-medium course-text text-capitalize'>see all</span>
                </div>
            </div>
            <div className='row mt-3'>
                {courses.map(course => (
                    <div className='col-lg-6 col-md-12 my-2' key={course.id}>
                        <div className="card border-0 shadow p-2">
                            <div className='row g-0'>
                                <div className='col-md-4 d-flex align-items-center'>
                                    <img src={courseImg} className="img-fluid rounded-start" alt="courseImg" />
                                </div>
                                <div className='col-md-8'>
                                    <div className="card-body custom-font-family py-2">
                                        <p className="card-title fw-medium  text-truncate">{course.title}</p>
                                        <div className='row'>
                                            <div className='  col-lg-6 col-md-6 col-6 my-1'>
                                                <div className=''>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-journal-bookmark" viewBox="0 0 16 16">
                                                        <path fillRule="evenodd" d="M6 8V1h1v6.117L8.743 6.07a.5.5 0 0 1 .514 0L11 7.117V1h1v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8" />
                                                        <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" />
                                                        <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
                                                    </svg>
                                                    <span className='ps-1 card-text-size fw-medium'>Lesson : {course.lessons} </span>
                                                </div>
                                            </div>
                                            <div className='  col-lg-6 col-md-6 col-6 my-1'>
                                                <div className=''>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                                    </svg>
                                                    <span className='ps-1 card-text-size fw-medium'>student : {course.students}</span>
                                                </div>
                                            </div>
                                            <div className='  col-lg-6 col-md-6 col-6 my-1'>
                                                <div className=''>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trophy-fill" viewBox="0 0 16 16">
                                                        <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935" />
                                                    </svg>
                                                    <span className='ps-1 card-text-size fw-medium'>{course.level}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="progress my-2" role="progressbar" aria-label="Basic example" aria-valuenow={course.progress} aria-valuemin="0" aria-valuemax="100" style={{ height: "5px" }}>
                                            <div className="progress-bar custom-progress-bar" style={{ width: `${course.progress}%` }}></div>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <span className='card-text-size-12'>points : {course.progress} / 100</span>
                                            <span className='card-text-size-12'>days : {course.days}</span>
                                        </div>
                                        <div className='row pt-2'>
                                            <div className='col-6'>
                                                <div className='d-flex'>
                                                    <img src={course.instructor.profileImg} className="rounded" height="40" alt={`${course.instructor.name}'s Avatar`} loading="lazy" />
                                                    <div className="ms-2">
                                                        <p className="fw-medium course-text mb-0">{course.instructor.name}</p>

                                                        <small className="text-secondary card-text-size-12">{course.instructor.role}</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-6 text-end'>
                                                <button type="button" className="btn btn-dark card-button-size fw-medium">
                                                    Let's go
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right ms-3" viewBox="0 0 16 16">
                                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                                    </svg>
                                                </button>
                                            </div>
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

export default YourCourses;
