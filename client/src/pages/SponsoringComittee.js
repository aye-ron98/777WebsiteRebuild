import React from "react";
import { AbstractLayout } from "./components/AbstractLayout";
import { Hero, DropdownComponent, NoticeCard } from "./components/PageComponents";

const Sponsors = [
    'The 777 Neptune Squadron Sponsoring Committee is responsible for raising funds for the Sponsoring Committee supported aspects of the training program, such as power familiarization flying, weekend exercises, band expenses, entrance fees and transportation for various outings, as well as rent, insurance and operating costs.',
    'Members are of the comitte are parents of cadets, and are appointed by the Squadron Sponsoring Committee. The committee meets once a month, and is responsible for squadron finances, fundraising, and other administrative duties.'
]

const staffDirectory = [
    { title: "John Doe", date: "President", text: "email@email.com", img: "Squadron.jpg" },
    { title: "John Doe", date: "President", text: "email@email.com", img: "Squadron.jpg" },
    { title: "John Doe", date: "President", text: "email@email.com", img: "Squadron.jpg" },
]

const style = {
    textAlign: 'center',
}

export class SponsoringComittee extends AbstractLayout {

    renderHero() {
        return (
            <Hero title="Sponsoring Comittee" />
        );
    }

    renderBody() {
        return (
            <>
                <DropdownComponent title='Who we are' openText={Sponsors} />
                <br />
                <h3 style={style}>Meet the Committe!</h3>
                <br />
            </>
        )
    }

    renderNotices() {
        return (
            <NoticeCard data={staffDirectory} />
        )
    }

}