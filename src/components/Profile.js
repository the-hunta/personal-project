import React from 'react'
import { connect } from 'react-redux'


function Profile(props) {
    let{username, email, name} = props.user
    return (
        <div>
            {
                props.user &&
                <div>
                    <h1>{name}</h1>
                    <h1>{username}</h1>
                    <h1>{email}</h1>
                    
                </div>
            }

        </div>
    )

}

let mapStateToProps = state => {
    console.log(state)

    let { data } = state.user
    return { user: data }

}

export default connect(mapStateToProps)(Profile) 