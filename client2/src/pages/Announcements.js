import React from "react";
import { AbstractLayout } from "./components/AbstractLayout";
import { NoticeCard } from './components/PageComponents';
import { GraphInterface } from './components/utils/api';
import './components/CSS/components.css'

export class Announcements extends AbstractLayout {
    constructor(props) {
        super(props);
        this.state = {
            notices: [],
        }
    }

    async componentDidMount() {
        try {
            await GraphInterface.getAccessToken();
            await GraphInterface.getChannelMessages().then((data) => {
                data.forEach(element => {
                    const title = element.subject;
                    const date = element.createdDateTime;
                    const text = this.htmlToPlainText(element.body.content);
                    const img = 'Squadron.jpg';
                    const notice = {
                        title: title,
                        date: date,
                        text: text,
                        img: img,
                    };

                    if (text.length > 2) {
                        this.setState(preNotices => ({
                            notices: [...preNotices.notices, notice]
                        }));
                    }
                    
                });
            });
        } catch (error) {
            console.error(error);
            const errorNotice = {
                title: 'Error',
                date: 'Error',
                text: 'We are sorry, we cannot preview announcements at this time.',
                img: 'Squadron.jpg',
            };
            this.setState({ notices: [...this.state.notices, errorNotice] });
        }
    }

    // Function to remove HTML tags from the HTML content
    htmlToPlainText(html) {
        const plainText = html.replace(/<[^>]*>/g, '');
        return plainText;
    }


    renderHero() {
        return (
            <div>
                <h1>Announcements</h1>
            </div>
        )
    }

    renderNotices() {
        const noticeInfo = this.state.notices;
        return (
            <div className="announcements-container">
                <div className='notice-title'>
                    <h2>Squadron Notices</h2>
                </div>
                <NoticeCard data={noticeInfo} />
            </div>

        )

    }

}