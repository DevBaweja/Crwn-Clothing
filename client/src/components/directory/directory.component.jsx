import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selector';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

const Directory = ({ sections }) => {
    const renderMenuItem = () => {
        return sections.map(({ id, ...other }) => <MenuItem key={id} {...other} />);
    };

    return <div className="directory-menu">{renderMenuItem()}</div>;
};

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections,
});
export default connect(mapStateToProps)(Directory);
