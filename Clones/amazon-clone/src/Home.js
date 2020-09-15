import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image "src="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2016/02/AMAZON-1200x537.png" alt="Background_Image"></img>

                <div className="home__row">
                    <Product />
                    <Product />
                </div>
                <div className="home__row">
                    
                </div>
                <div className="home__row">
                    
                </div>

            </div>
        </div>
    )
}

export default Home
