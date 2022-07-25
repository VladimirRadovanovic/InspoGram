import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getAllPost } from "../../../store/post";
import RenderFollowUser from "../RenderUser/RenderFollowUser";

import '../LikesModal/LikeModal.css';

function FollowerModal({prop}) {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);

    useEffect(() => {
        const payload = {
            user_id: sessionUser?.id
        }
        if (sessionUser) {

            dispatch(getAllPost(payload));
        }
    }, [dispatch, sessionUser])

    return (
        <>
            {prop.map(user =>
                <div className="list-of-likes" key={user.id}>
                    <RenderFollowUser prop={{"id": user.id, "user": user}}  />
                </div>
            )}
        </>
    )
}

export default FollowerModal;
