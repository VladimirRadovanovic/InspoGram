import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getAllPost } from "../../../store/post";
import RenderFollowUser from "../RenderUser/RenderFollowUser";

function FollowingModal({prop}) {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    //const posts = useSelector(state => state.post.posts);
    
    //const post = posts.filter(e => e.id === uid);
    
    console.log(prop.followingList);
    
    useEffect(() => {
        const payload = {
            user_id: sessionUser?.id
        }
        dispatch(getAllPost(payload));
    }, [dispatch, sessionUser])

    return (
        <>
            {prop?.map(user =>
                <div className="following-list" key={user.id}>
                    <RenderFollowUser prop={{"id": prop.u_id, "user": user}}  />
                </div>
            )}
        </>
    )
}

export default FollowingModal;