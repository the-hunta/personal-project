import React from 'react'
import { connect } from 'react-redux'

import { Link, withRouter } from 'react-router-dom'

import { logout } from '../redux/reducers/user'

function Header(props) {
    let { user } = props
    if (user) {
        return (
            <div style={styles.header}>
                <div id="logo" style={styles.logo}>
                    <Link to="/posts">logo</Link>
                </div>
                <div style={styles.navbar}>
                    <Link to="/posts">Home</Link>
                    <Link to="/profile">Profile</Link>
                    {props.user && <Link to="/" onClick={props.logout}>Logout</Link>}
                </div>
            </div>
        )
    } return null
}

let mapStateToProps = state => {
    let { data: user } = state.user

    return { user }
}

export default withRouter(connect(mapStateToProps, { logout })(Header))

let styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: 20,
        alignItems: 'center'
    },
    logo: {
        flex: 4,
        display: 'flex',
        justifyContent: 'flex-start'
    },
    navbar: {
        flex: 1,
        display: 'flex',
        justifyContent: 'space-between'
    }
}