import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import UserCard from "./UserCard";

const Feed = () => {

    const feed = useSelector(store => store.feed);
    const dispatch = useDispatch();
    const getFeed = async () => {
        if (feed) return;
        try {
        const res = await axios.get(BASE_URL + "/user/feed", {withCredentials: true});
        dispatch(addFeed(res.data));
        } catch (err) {
            //TODO
        }
    };
    useEffect(() => {
        getFeed();
    }, []);
    return <div className="flex justify-center my-10">
        {feed && feed.length > 0 ? (
        <UserCard user={feed[0]} />
        ) : (
            <p>Loading...</p> // или спиннер
        )}
    </div>;
    
};

export default Feed;