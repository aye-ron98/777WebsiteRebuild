import React from "react";
import { AbstractLayout } from "./components/AbstractLayout";
import { DropdownComponent, Hero } from "./components/PageComponents";

const Purpose = [
    'The motto of the Canadian Air Cadet program is “To learn. To serve. To advance.” The program is designed to develop in youth the attributes of good citizenship and leadership; promote physical fitness; and stimulate the interest of youth in the air activities of the Canadian Forces.',
]

const AboutCadets = [
    "With over 65, 000 Cadets across Canada, we're an organization with a proud history. Many former cadets say that the Cadet Program gave them a head start in their successful careers. For example, did you know that astronaut Chris Hadfield, actor Jim Carrey, and comedian/television personality Rick Mercer were once Cadets?",
]

const Uniforms = [
    'No. A complete uniform is on loan to you from the Canadian Armed Forces.  You are required to maintain your uniform washing and ironing and polishing boots for each parade night.',
]

const School = [
    "Education is very important to Cadets. Cadet training is a hands-on, activity-based program that should complement school studies. In fact, you can receive up to a maximum of 6 school credits for obtaining the rank of Flight Sergeant and Warrant Officer and attending a national summer camp. The skills you develop at Cadets will benefit you with your schoolwork. You'll be more organized, you'll be better able to focus and you'll learn to work in a team.As well, there are several scholarships available through Cadets.",
]

const Costs = [
    "The Squadron Sponsoring Committee collects a $200 assessment fee per cadet, but we will not turn away any cadet due to their financial situation. Also, the Squadron Sponsoring Committeee requires parental and cadet support to raise the funds necessary to provide programs and equipment as well as pay the rent for the squadron's quarters.Finally, there are nominal charges for some social activities such as dinners and optional activities.",
]

const Parades = [
    'Cadets will participate in drill, sports nights, and classroom activities where they will learn about subjects such as aircraft identification, navigation, citizenship, meteorology, principles of flight, and a number of other subjects.',
]

const Activites = [
    ' In addition to the regular training nights, our Squadron also offers drill, band, biathlon, effective speaking, first aid, ground school which our cadets are encouraged to participate in. Occasional weekend activities including field training exercises, where you will learn to build shelters, make a fire and survive in the wilderness. We also have weekend flying and gliding trips where you will get a chance to go up in an small aircraft or glider and learn about flying.  We also do several team building activities through out the year like rock climbing or bowling.',
]

const SummerTrainig = [
    'If you are interested in attending summer camps, there are a number of different camps located across Canada. Cadets can go to camp for two to seven weeks on a variety of courses. Each camp offers a unique mixture of outdoor activities and valuable instruction. Attendance at cadet summer camps is free. The Canadian Armed Forces provide all transportation, meals, lodging and special equipment. Every cadet attending summer camp receives a training allowance; cadets in staff positions at camp receive remuneration. Please Note: Cadets who join after January 31st of each year will not be eligible for summer training that year.',
]

const AvailableTraining = [
    'Summer camps include training in leadership, instructional techniques, music, marksmanship, flying, navigation, meteorology, air traffic control, ceremonial drill, physical education, survival training, aerospace studies and citizenship. Senior cadets can qualify for international exchange, glider flying scholarships and power flying scholarships.year.',
]

const Instructor = [
    ' Cadets learn from members of the Cadet Instructors Cadre, members of the Canadian Armed Forces, officers who are enrolled as supplementary reserve officers specifically trained to work with youth. In some cases, civilian instructors or volunteers who possess special skills are called in to assist cadet instructors. Both the cadet instructors and civilian volunteers have chosen to dedicate their valuable time to helping cadets reach their potential.',
]

const Requirments = [
    ' Cadets are not members of the military and make absolutely no commitments regarding future military service. Cadets is a great way to learn more about Canada, make friends and develop new skills that will be with you for life, no matter what career you choose.',
]

const Cadet365 = [
    'Cadet365 is a collaborative platform for Cadets and Adult Staff across Canada. The suite provides access to familiar products like Outlook, Word, Excel, PowerPoint, Teams, Planner, OneNote and OneDrive. The aim of the suite is to promote collaboration and facilitate remote work.',
    'Announcements, and event signup, are first posted on cadet 365 before updated here on the website.'
]

const Body = () => {
    return (
        <div className="faq">
            <DropdownComponent title="What is our purpose?" openText={Purpose} />
            <DropdownComponent title="Who Joins Cadets?" openText={AboutCadets} />
            <DropdownComponent title="Do I have to buy my uniform?" openText={Uniforms} />
            <DropdownComponent title="Will Cadet training affect my school work?" openText={School} />
            <DropdownComponent title="What does it cost to join?" openText={Costs} />
            <DropdownComponent title="What is cadet 365?" openText={Cadet365} />
            <DropdownComponent title="What will I do at a weekly parade?" openText={Parades} />
            <DropdownComponent title="Are there other activities that I can participate in?" openText={Activites} />
            <DropdownComponent title="What is summer training?" openText={SummerTrainig} />
            <DropdownComponent title="What type of summer training is available?" openText={AvailableTraining} />
            <DropdownComponent title="Who instructs cadets?" openText={Instructor} />
            <DropdownComponent title="Is there a requirement to join the Canadian Armed Forces?" openText={Requirments} />
        </div>
    )
};

export class FAQ extends AbstractLayout {

    renderHero() {
        return (
            <Hero title="Let us answer some of your questions" />
        )
    }

    renderBody() {
        return (
            <Body />
        )
    }

}
