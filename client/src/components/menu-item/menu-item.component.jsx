import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';
const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => {
    const generateUrl = () => {
        history.push(`${match.url}${linkUrl}`);
    };
    const style = { backgroundImage: `url(${imageUrl})` };
    return (
        <div className={`menu-item ${size ? size : ''}`} onClick={generateUrl}>
            <div style={style} className="background-image" />
            <div className="content">
                <h1 className="content__title">{title}</h1>
                <span className="content__cta">Shop Now</span>
            </div>
        </div>
    );
};
export default withRouter(MenuItem);
