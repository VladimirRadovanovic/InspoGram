import { React, useEffect } from "react"; //, useState
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getAllPost } from '../../store/post';
import SinglePost from "./SinglePost";
import FeedFriends from "./FeedFriends";


function FeedPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const posts = useSelector(state => state.post.posts);
    //const posts = useSelector(state => state.post);


    useEffect(() => {
        const payload = {
            user_id: sessionUser?.id
        }
        if (sessionUser) {
            dispatch(getAllPost(payload));

        }

    }, [dispatch, sessionUser])

    if (!sessionUser) return <Redirect to="/login" />;
    if (!posts) return null;

    return (
        <>
            <FeedFriends />
            {Object.values(posts)?.map((post) => {
                return <SinglePost key={post.id} id={post.id}/>
            })}
        </>
    )
}


export default FeedPage;
