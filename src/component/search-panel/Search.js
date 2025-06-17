import React from 'react'
import '../../App.css';
import './search.css';

function Search() {
    return (
        <div className='mt-5 container'>
            <div>
                <p className='text-center text-capitalize custom-font-family instructors-size'>
                    Search among <span className='text-color-custom'>58340</span>  courses and<br></br>
                    find your favorite course
                </p>
            </div>
            <div className='row mt-5'>
                <div className='col-lg-8 col-md-6'>
                    <div className='bg-light p-2 d-flex'>
                        <button type="button" class="btn btn-dark custom-font-family card-button-size">Categories</button>
                        <div class="search-containeer me-3">
                            <i class="bi bi-search"></i>
                            <input class="form-control custom-felid custom-font-family card-text-size" type="search" placeholder="Search anything" aria-label="Search" />
                        </div>
                    </div>
                </div>
                <div className='custom-font-family text-capitalize d-flex align-items-center justify-content-center p-2 col-lg-4 col-md-6'>
                    <span className='fw-medium'>Or view the following courses...</span>
                </div>
            </div>
        </div>
    )
}

export default Search