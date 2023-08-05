import React from 'react';
import { AbstractLayout } from './components/AbstractLayout';
import { NoticeCard, Jumbotron } from './components/PageComponents';
// import { GraphInterface } from './components/utils/api';


const noticeInfo = [
  { title: 'Announcements', date: '', text: "See what we've been up to", img: 'Squadron.jpg', link: '/announcements' },
  { title: 'Staff Directory', date: '', text: 'See our Staff', img: 'Squadron.jpg', link: '/staff' },
  { title: 'Calendar', date: '', text: 'See our Calendar', img: 'Squadron.jpg', link: '/calendar' },
]


export class Home extends AbstractLayout {
  constructor(props) {
    super(props);
    this.state = {
      notices: [],
    }
  }


  renderHero() {
    return <Jumbotron image='Squadron.jpg' message='777 Neptune' subtitle='From the ashes to the blues.' button='Join' link='/join' />
  }

  renderNotices() {
    // const noticeInfo = this.state.notices;
    return (
      <div>
        <div className='notice-title'>
          <h2>Explore our Site</h2>
        </div>
        <NoticeCard data={noticeInfo} />
      </div>

    )

  }
}
