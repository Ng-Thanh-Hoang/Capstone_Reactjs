import React from 'react'

const Carousel = () => {
  return (
    <div className='container carousel'>
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active text-black" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
                </div>
                <div className="carousel-inner">
                    <div className="row d-flex align-items-center">
                        <div className="col-8">
                            <div className="carousel-item active">
                                <img src="../../public/img/Shoes.png" className="d-block" alt="..." />
                            </div>
                        </div>
                        <div className="col-4">
                            <h3>Product name</h3>
                            <p>Product description ...</p>
                            <button type='button' className='border-0' style={{ background: '#F8B653' }}>Buy Now</button>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon bg-dark" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon bg-dark" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
  )
}

export default Carousel