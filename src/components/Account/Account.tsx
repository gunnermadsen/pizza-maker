import * as React from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

import './Account.scss';
import { connect } from 'react-redux';

import { mapStateToProps, mapDispatchToProps } from '../../store/actions/pizza.actions';

@connect(mapStateToProps, mapDispatchToProps)
export default class Account extends React.PureComponent {
    
    render() {
        return (
            <div>
                Account component works
            </div>
        );
    }

}
