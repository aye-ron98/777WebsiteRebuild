import React from 'react';
import { AbstractLayout } from './components/AbstractLayout';
import { DropdownComponent, Hero } from './components/PageComponents';

const AboutTheProgram = [
    'The Cadet Program is the largest federally sponsored youth program in Canada.It is a national program for young Canadians aged 12 to 18 who are interested in participating in a variety of fun, challenging, and rewarding activities while learning valuable life and work skills such as teamwork, leadership, and citizenship.',

    'The Cadet Program is community-based, succeeding through strong community support and involvement. Cadets are encouraged to become active, responsible members of society and make valuable contributions through environmental, citizenship, and community activities. Cadets are not members of the Canadian Armed Forces (CAF). There is no requirement or expectation to join the military after the Cadet Program.',
]

const AboutTheSquadron = [
    '777 Neptune meets every Wednesday evening from 6:30 - 9:00pm. Cadets are required to attend these mandatory training nights.  Cadets wear their uniforms to all activities unless otherwise directed and are expected to maintain a high standard of uniform dress and personal conduct since they represent our squadron and the Canadian Cadet Movement.',

    'During weekly training, cadets participate and learn drill, and drill instruction, general knowledge about cadets, physical fitness, leadership, instructional techniques, and effective speaking.  As well they learn about aircraft, airports, weather and, principles of flight.',

    'The Squadron also offers a variety of other events and practices on other evenings and weekends which could include familiarization flying, sports, marksmanship, survival and leadership exercises, tours, parades, and fund-raising activities.',

    'At the end of each training year a formal parade is held called the Annual Ceremonial Review. It is a chance to display what they have learned at Cadets and perhaps receive a variety of awards.',
]

export class About extends AbstractLayout {

    renderHero() {
        return Hero({ title: 'About Us', subtitle: 'Learn more about the program and our squadron' })
    }

    renderBody() {
        return (
            <div className='about-us'>
                <DropdownComponent title='About the Program' openText={AboutTheProgram} />
                <DropdownComponent title='About the Squadron' openText={AboutTheSquadron} />
            </div>
        )
    }

}