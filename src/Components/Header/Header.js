import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <section className='header-section'>
                <div className='header-content row container'>

                    <div className='col-6'>
                        <h3>Learn Development</h3>
                        <p>Business, Technology and Creative Skills taught by industry experts. Explore a wide range of skills with our professional tutorials.</p>

                        <button className='btn btn-light'>Browse Courses</button>
                    </div>
{/* <a href="https://ibb.co/b2vmFcR"><img src="https://i.ibb.co/mXyT0fF/macbook.png" alt="macbook" border="0"></a> */}
                    <div className='col-6 bg-img'>
                        <img src="https://i.ibb.co/mXyT0fF/macbook.png" alt="" />
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Header;