import React from 'react';
import { AbstractLayout } from './components/AbstractLayout';
import { Hero, DropdownComponent } from './components/PageComponents';
import { NavLink, Link } from 'react-router-dom';
import './components/CSS/components.css'

const register = () => {
    window.open('https://registration.cadets.gc.ca/get-started.html?unitid=95', '_blank');
}

const style = {
    whiteSpace: 'pre-line',
}


const requiredDocumentation = [
    'Once you have completed the online registration we will need to see  at least one of original documents for proof of age, as well as an original document for proof of health insurance. \n \n See verifying proof of age, and verifying proof of health insurance below for accepted documents.'
]

const verifyingProofOfAge = [
    'Accepted documents for proof of age: \n -a valid Canadian passport; \n -a birth certificate issued by a Canadian provincial, territorial or federal government agency; \n -any card, visa or permit(work, study, permanent resident, etc.)(with photo) issued by the Canadian government which legally authorizes the person to reside in Canada for an extended period of time; or \n -any identification card(with or without photo) issued by a Canadian provincial, territorial or federal government agency. No certificates of live birth please.'
]

const verifyingProofOfHealthInsurance = [
    'The following are accepted proofs of health insurance \n -BC Care card(Preferred) \n -Territorial health insurance card \n -Private insurance(ie.Blue Cross) card.' 
]

const returningCadets = [
    'If you are a returning Cadet, you will need to reregister each training year. To do so, come down to the squadron on registration night. No prior paperwork or documentation is required. \n Registration takes place every September. See our schedule for exact timings and details.'
]

export class Join extends AbstractLayout {
    renderHero() {
        return <Hero title='Join Us!' />
    }

    renderBody() {
        return (
            <div className='join-body' style={style} >
                <div className='join-text'>
                    <text>
                        All youths aged 12 to 18 years are welcome to join this youth-oriented program. <br /> Follow the steps below to register. For frequently asked questions, visit our <NavLink to='/faq'>FAQ page.</NavLink>
                    </text>
                    <br />
                    <input type='button' className='jumbo-button' value='Register' onClick={register} />
                    <br />
                    <br />
                    <text>
                        Once you have completed the online registration form come visit us at <Link to='https://www.google.com/maps/place/777+Neptune+Squadron/@49.2756865,-122.7632773,17z/data=!3m1!4b1!4m6!3m5!1s0x54867f42e61a4991:0x8860697091cb2dd8!8m2!3d49.2756865!4d-122.7610886!16s%2Fg%2F11bccd3yk7?entry=ttu' target="_blank">École de Pionniers de Maillardville</Link>, 1618 Patricia Avenue, Port Coquitlam, BC V3B 4A8, Wednesdays from 6:30 - 9:00 pm, with your required documentation to complete your registration. <br />

                        For a full schedule of when we operate, see <NavLink to='/calendar'>our schedule</NavLink>.
                    </text>
                </div>
                <DropdownComponent title='Required Documentation' openText={requiredDocumentation} />
                <DropdownComponent title='Verifying Proof of Age' openText={verifyingProofOfAge} />
                <DropdownComponent title='Verifying Proof of Health Insurance' openText={verifyingProofOfHealthInsurance} />
                <DropdownComponent title='Returning Cadets' openText={returningCadets} />


            </div>
        )

    }
}