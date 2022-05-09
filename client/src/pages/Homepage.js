import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PostsList } from '../components/PostList';
import { Post } from '../components/Post';
import { AddPostForm } from '../components/PostForm';
import butter1 from '../assets/img/megumi-nachev-xhOUnxVVb6s-unsplash.jpg';
import butter2 from '../assets/img/sorin-gheorghita-094mP_CBdpM-unsplash.jpg';
import butter3 from '../assets/img/sorin-gheorghita-nnRdjlAhShI-unsplash.jpg';
import '../App.css';

function HomePage() {
  return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 justify-content-center home">

        <div className='home__carousel'>
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={butter1} className="d-block w-100" alt="..."></img>
                <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={butter2} className="d-block w-100" alt="..."></img>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={butter3} className="d-block w-100" alt="..."></img>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="card mb-3">
        <img src="..." class="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>

      </div>
  );
}

export default HomePage;
