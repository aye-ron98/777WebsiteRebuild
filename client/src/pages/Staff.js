import React from "react";
import { AbstractLayout } from "./components/AbstractLayout";
import { NoticeCard, Hero } from "./components/PageComponents";

const staffDirectory = [
    { title: "John Doe", date: "President", text: "email@email.com", img: "Squadron.jpg" },
    { title: "John Doe", date: "President", text: "email@email.com", img: "Squadron.jpg" },
    { title: "John Doe", date: "President", text: "email@email.com", img: "Squadron.jpg" },
    { title: "John Doe", date: "President", text: "email@email.com", img: "Squadron.jpg" },
    { title: "John Doe", date: "President", text: "email@email.com", img: "Squadron.jpg" },
    { title: "John Doe", date: "President", text: "email@email.com", img: "Squadron.jpg" },
]

export class Staff extends AbstractLayout {

    renderHero() {
        return <Hero title='Staff Directory' />
    }

    renderNotices() {
        return <NoticeCard data={staffDirectory} />
    }
}