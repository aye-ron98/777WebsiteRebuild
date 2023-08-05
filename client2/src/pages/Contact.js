import React from 'react';
import { AbstractLayout } from './components/AbstractLayout';
import { Hero } from './components/PageComponents';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Facebook } from './components/assets/facebook.svg'; // import svg as react component
import { ReactComponent as Instagram } from './components/assets/instagram.svg'; // import svg as react component
export class Contact extends AbstractLayout {

    getTime() {
        const date = new Date();
        const day = date.getDay();
        const hour = date.getHours();
        const minute = date.getMinutes();

        return day === 3 && ((hour >= 18 && minute >= 30) || (hour <= 21 && minute <= 30));
    }


    renderHero() {
        return <Hero title='Contact Us' image='notice.jpg' />
    }


    renderBody() {
        return (
            <div className='contact-container'>
                <div className='contact-info'>
                    <p>For frequently asked questions, please see our <NavLink to='/faq'> FAQ page.</NavLink></p>
                    <h3>General Inquires</h3>
                    <p>
                        <a href='mailto:777Neptune@777aircadets.ca'>
                            Admin | 777Neptune@777aircadets.ca
                        </a>
                    </p>
                    <p>
                        <a href='mailto:777SSC@777aircadets.ca'>
                            Sponsoring Committee | 777SSC@777aircadets.ca
                        </a>
                    </p>
                    <h4>Phone</h4>
                    <p>604-941-4800</p>
                    <h3>Follow Us</h3>
                    <div className='icon-wrapper'>
                        <p>
                            <a href='https://www.facebook.com/777NeptuneSquadron/' target='_blank' rel='noopener noreferrer'>
                                <Facebook />
                            </a>
                        </p>
                        <p>
                            <a href='https://www.instagram.com/777neptunesquadron/' target='_blank' rel='noopener noreferrer'>
                                <Instagram />
                            </a>
                        </p>
                    </div>
                </div>
                <div className='visit-us'>
                    <h2>Visit Us</h2>
                    <p>1730 Coquitlam Ave, Port Coquitlam, BC V3B 1H6</p>
                    <p>
                        <a className='direction-button' href='https://www.google.com/maps/place/777+Neptune+Squadron/@49.2756865,-122.7632773,17z/data=!3m1!4b1!4m6!3m5!1s0x54867f42e61a4991:0x8860697091cb2dd8!8m2!3d49.2756865!4d-122.7610886!16s%2Fg%2F11bccd3yk7?entry=ttu' target='blank' rel='noopener'>Get Directions</a>
                    </p>
                    <p>We parade Wednesday nights at Ecole de pioneers 6:30 - 9:00pm. For our full schedule please see our <NavLink to='/calendar'>calendar.</NavLink></p>
                    <p>{this.getTime() ? 'Come by, we are open!' : 'Sorry, we are closed.'}</p>

                </div>
            </div>
        )
    }
}

