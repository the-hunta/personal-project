import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'


import { getPost } from '../redux/reducers/post'

class Posts extends Component{
    constructor(){
        super()

        this.state = {

        }
    }
    render() {
    return( 
        <div> 
            {this.props.posts.map(post => {
                return(
                    <Link
                        to={`/posts/${post.id}`}
                        key={post.id}
                        onClick={() => this.props.getPost(post.id)}>
                            <h2>{post.title}</h2>
                            {this.props.user && this.props.user.id === post.user_id && <button>edit</button>}
                            <p>{post.username}</p>
                     </Link>
                )
            })}
        </div>
    )
        }
}


let mapStateToProps = state => {
    let { data: posts } = state.posts
    let { data: user } = state.user 
    return { posts, user }

}

export default connect(mapStateToProps, {getPost})(Posts)