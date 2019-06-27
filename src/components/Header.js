import React from 'react'
import { connect } from 'react-redux'

import { Link, withRouter } from 'react-router-dom'

import { logout } from '../redux/reducers/user'

function Header(props) {
    console.log(props)
    function Logout() {
        props.logout()
        props.history.push("/")
    }
    let { user } = props
    if (user) {
        return (
            <div style={styles.header}>
                <div id="logo" style={styles.logo}>
                    <Link to="/posts"><i class="fab fa-atlassian"></i></Link>
                </div>
                <div style={styles.navbar}>
                    <Link to="/posts"><i class="fas fa-home"></i></Link>

                    <Link to="/profile"><i class="far fa-user-circle"></i></Link>
                    {props.user && <button onClick={Logout}>Logout</button>}
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
        backgroundColor: 'lightBlue',
        display: 'flex',
        justifyContent: 'space-between',
        padding: 20,
        alignItems: 'center'
    },
    logo: {
        flex: 4,
        display: 'flex',
        justifyContent: 'flex-start',
        // textDecoration: 'none',
        color: 'white'
    },
    navbar: {
        flex: 1,
        display: 'flex',
        // textDecoration: 'none',
        justifyContent: 'space-between',
        color: 'white'
    }
}