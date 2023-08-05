import React from "react";
import { NavBar, Footer } from "./PageComponents";

/**
 * class AbstractLayout 
 * provides template for all pages
 */
export class AbstractLayout extends React.Component {


    renderHeader() {
        return <NavBar />;
    }

    renderHero() {
        return null;
    }

    renderBody() {
        return null;
    }

    renderNotices() {
        return null;
    }

    renderFooter() {
        return <Footer />;
    }

    render() {

        return (
            <div className="layout">
                <>{ this.renderHeader() }</>
                <>{ this.renderHero() }</>
                <>{ this.renderBody() }</>
                <>{ this.renderNotices() }</>
                <>{ this.renderFooter() }</>
            </div>
        )
    }


}