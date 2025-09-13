const UserCard = ({user}) => {
    console.log(user);
    const {firstName, lastName, profilePicture, about, skills} = user;
    return (
        <div className="card bg-base-300 w-96 shadow-sm">
            <figure>
                <img
                src={profilePicture}
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{firstName} {lastName}</h2>
                <p>{about}</p>
                <div className="card-actions justify-between my-4">
                    <button className="btn bg-red-500 hover:bg-red-600 border-none">Ignore</button>
                    <button className="btn bg-green-500 hover:bg-green-600 border-none">Interested</button>
                </div>

            </div>
        </div>
    );
};

export default UserCard;