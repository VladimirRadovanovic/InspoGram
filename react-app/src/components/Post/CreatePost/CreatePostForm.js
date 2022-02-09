import React, { useState } from 'react' //useEffect, 
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createPost } from '../../../store/post'
import { useSelector } from 'react-redux'

const CreatePostForm = ({onClose}) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const [caption, setCaption] = useState("")
    const [photo, setPhoto] = useState("")
    const [errors, setErrors] = useState([])
    const user = useSelector(state => state.session.user);


    const handleSubmit = async (e) => {
        e.preventDefault()

        const payload = { caption, photo }

        const data = await dispatch(createPost(payload))
        if (data) {
            setErrors(data)
        } else {
            onClose()
            history.push(`/api/user/${user.id}/posts`)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create New Post</h2>
            <div className='login-error-container'>
                {errors.map((error, ind) => (
                    <div key={ind}>{error}</div>
                ))}
            </div>
            <textarea
                placeholder="Write a caption..."
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
            />
            <input
                type="text"
                placeholder="insert URL"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
            />
            <button type="submit">
                Post
            </button>
        </form>
    )

}

export default CreatePostForm
