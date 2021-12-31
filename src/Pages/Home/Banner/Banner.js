import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import bikeBanner from '../../../image/bike-share.png';
import carBanner from '../../../image/car-share.png';

const Banner = () => {
    return (
        <>
            <Container className="my-3 py-3">
                <Carousel>
                    <Carousel.Item>
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h2 className='fw-bold fst-italic'>Hero Bike Shareing</h2>
                                <p className='fst-italic'>Hero Rider is a Bike and Car Shareing Platform. You Can Share Your Ride with Others and You will Earn Some Extra Money. Hero Rider is not your permanent job, you just share your ride when you are free and you have scope to earn money. So register your Ride at Hero Rider and Enjoy Riding.</p>
                                <button className="btn btn-dark">Getting Started</button>
                            </div>
                            <div className="col-md-6">
                                <img src={bikeBanner} width="580px" height="400px" alt="Bike Banner" />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h2 className='fw-bold fst-italic'>Hero Car Shareing</h2>
                                <p className='fst-italic'>Hero Rider is a Bike and Car Shareing Platform. You Can Share Your Ride with Others and You will Earn Some Extra Money. Hero Rider is not your permanent job, you just share your ride when you are free and you have scope to earn money. So register your Ride at Hero Rider and Enjoy Riding.</p>
                                <button className="btn btn-dark">Getting Started</button>
                            </div>
                            <div className="col-md-6">
                                <img src={carBanner} width="580px" height="400px" alt="Bike Banner" />
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </>
    );
};

export default Banner;