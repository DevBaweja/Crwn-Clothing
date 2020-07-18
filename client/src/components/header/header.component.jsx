import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { signOutStart } from '../../redux/user/user.actions';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { HeaderContainer, OptionContainer, LogoContainer, OptionLink } from './header.styles';

const Header = ({ currentUser, hidden, signOutStart }) => {
    const renderUser = () => {
        if (currentUser) {
            return (
                <OptionLink as="div" onClick={signOutStart}>
                    Sign Out
                </OptionLink>
            );
        } else {
            return <OptionLink to="/sign">Sign In</OptionLink>;
        }
    };

    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo></Logo>
            </LogoContainer>
            <OptionContainer>
                <OptionLink to="/shop">Shop</OptionLink>
                <OptionLink to="/contact">Contact</OptionLink>
                {renderUser()}
                <CartIcon />
            </OptionContainer>
            {!hidden ? <CartDropdown /> : null}
        </HeaderContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
});
const mapDispatchToProps = dispatch => bindActionCreators({ signOutStart }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
