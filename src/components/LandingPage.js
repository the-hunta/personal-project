import React from 'react'
import { connect } from 'react-redux'

import LoginForm from './LoginForm'
import Posts from './Posts';

function Landing(props) {
    let { user } = props
    console.log(user, props)
    return (
        <div>
            { user ? <Posts></Posts> : <LoginForm></LoginForm>}
        </div>
    )
}

let mapStateToProps = state => {
    let { data: user } = state.user 
    return { user }
}

export default connect(mapStateToProps)(Landing)
