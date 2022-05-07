import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Footer() {
    return (

        <div class="container">
 
            <footer className="footer contentBox">

                <div className="row">  
                <h3>Contact Info:</h3>
                    <div className="col d-flex justify-content-end text-end">
                        <a href="https://www.linkedin.com/in/bowen-zheng-05942713a/"><FontAwesomeIcon icon={faLinkedin} size='lg'/></a> 
                    </div>
                    <div className="col d-flex justify-content-center text-center">
                        <a href="https://github.com/bxz5089"><FontAwesomeIcon icon={faGithub} size='lg'/></a> 
                    </div>
                    <div className="col d-flex justify-content-start text-start">
                        <a href="mailto:bxz5089@gmail.com"><FontAwesomeIcon icon={faEnvelope} size='lg'/></a>       
                    </div>
                </div>           
                <h2>Made by Bowen Z.</h2>
     
            </footer> 
        
        </div>
    )
}

export default Footer;