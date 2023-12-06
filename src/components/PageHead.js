import img from "../img/profile.png";

function PageHead (props) {
    return (
        <div className="header">
            <h1>{props.text}</h1>
            <img className="imgprofile" src={img} alt="profile" />
        </div>
    );
}

export default PageHead;