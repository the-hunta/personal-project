module.exports = {
    // LINKED TO getPosts.sql  WORKING
    read: async (req, res) => {
        try {
            let db = req.app.get('db')
            let posts = await db.getPosts()
            res.send(posts)
        } catch (error) {
            console.log('error fetching posts:', error)
            res.status(500).send(error)
        }
    },
    // LINKED TO getPost.sql   KINDA WORKING
    getPost: async (req, res) => {
        try {
            let db = req.app.get('db')
            let {id} = req.params
            let posts = await db.getPost(id)
            let post = posts[0]
            console.log(post)
            res.send(post)

        } catch(error) {
            console.log('error fetching posts:', error)
            res.status(500).send(error)
        }
    },
    // LINKED TO createPost.sql  WORKING 
    create: async (req, res) => {
        try {
            let db = req.app.get('db')
            let { title, username, content } = req.body
            let newDate = new Date()
            let date = newDate.getDate().toString()
            let month = (newDate.getMonth()+1).toString()
            let year = newDate.getFullYear().toString()

            let postDate =  `${date} ${month} ${year}`

            let time = newDate.getHours().toString()
            let min = newDate.getMinutes().toString()

            let postTime = `${time} : ${min}`

            if(!req.session.user) {
                return res.status(401).send('user not authenticated')
            }
            

            let {id: user_id} = req.session.user
            let newPost = {user_id, username, title, content, postDate ,postTime}
            let posts = await db.createPost(newPost)
            res.send(posts)
        } catch (error) {
            console.log('error creating post:', error)
            res.status(500).send(error)
        }
    },
    //linked to deletePost  NOT WORKING
    deletePost: (req, res) => {
        const db = req.app.get('db')
        const {posts} = req.body
        const {id} = req.params

        db.deletePost({id})
        .then(message => {

            res.status(200).send(posts)
        })
        .catch(err => {
            req.send(500).send(err);
        })
    },
    //linked to updatePost   WORKING
    updatePost: (req, res) => {
        const db = req.app.get('db')
        const {post} = req.body
        const {id} = req.params
        
        db.updatePost({id, post})
        .then(posts => {
            console.log(posts)
            res.status(200).send(posts)
        })
        .catch(err => {
            res.status(500).send(err)
        })
    }

}


/*
need to do the sql calls for deletePost and updatePost

used by the auth.js:
- createUser
- findUserByEmail
*/