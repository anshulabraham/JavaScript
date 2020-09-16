import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image "src="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2016/02/AMAZON-1200x537.png" alt="Background_Image"></img>

                <div className="home__row">
                <Product 
                    id="1232"
                    title="The lean Startup" 
                    price={29.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                    rating={3}/>
                <Product
                    id="1231"
                    title="The lean Startup" 
                    price={79.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                    rating={4}/> 
                </div>
                <div className="home__row">
                <Product
                    id="1230"
                    title="The lean Startup" 
                    price={229.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                    rating={5}/> 
                <Product 
                    id="1239"
                    title="The lean Startup" 
                    price={299.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                    rating={5}/>
                <Product 
                    id="1238"
                    title="The lean Startup" 
                    price={2229.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                    rating={5}/>
                </div>
                <div className="home__row">
                <Product 
                    id="1232"
                    title="The lean Startup" 
                    price={9.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                    rating={0}/>
                </div>

            </div>
        </div>
    )
}

export default Home
