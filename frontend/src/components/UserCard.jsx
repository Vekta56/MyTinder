import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";

const UserCard = ({user}) => {
    console.log(user);
    const {_id, firstName, lastName, profilePicture, age, about, gender, skills} = user;
    const dispatch = useDispatch();

    const handleSendRequest = async (status, userId) => {
        try {
        const res = await axios.post(
            BASE_URL + "/request/send/" + status + "/" + userId,
            {},
            { withCredentials: true }
        );
        dispatch(removeUserFromFeed(userId));
        } catch (err) {}
    };
    return (
        <div className="card bg-base-300 w-96 shadow-sm">
            <figure>
                <img
                src={profilePicture}
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{firstName} {lastName}</h2>
                <p>Age: {age}</p>
                <p>Gender: {gender}</p>
                <p>{about}</p>
                <div className="card-actions justify-between my-4">
                    <button
                        className="btn bg-red-500 hover:bg-red-600 border-none btn-primary"
                        onClick={() => handleSendRequest("ignored", _id)}>
                        Ignore
                    </button>
                    <button
                        className="btn bg-green-500 hover:bg-green-600 border-none btn-secondary"
                        onClick={() => handleSendRequest("interested", _id)}>
                        Interested
                    </button>
                </div>

            </div>
        </div>
    );
};

export default UserCard;