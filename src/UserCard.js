import PropType  from "prop-types";
import Krishna from  "./images/krishna.jpg"
import Lokesh from "./images/lokesh.jpg"
const userData = [
    {
        name:'Krishna R',
        city:'Coimbatore',
        description : 'Full Stack Developer',
        skills:['Nodejs','Express','MongoDB','GraphQL','React','Redux','Nextjs','React Native','Flutter','Dart','Java','Python'],
        online:true,
        profile: Krishna,
    },
    // {
    //     name:'Krishna',
    //     city:'Coimbatore',
    //     description : 'Backend Developer',
    //     skills:[ 'Node','Sentiment Analysis','Web Scrapping','Amazon Aws','Python', 'JavaScript', 'C Programming', 'C++', 'SQL', 'React'],
    //     online:true,
    //     profile: "images/tiger.jpg",
    // },
    // {
    //     name:'James',
    //     city:'New -York',
    //     description : 'Full Stack Developer',
    //     skills:['Nodejs','Express','MongoDB','GraphQL','React','Redux','Nextjs','React Native','Flutter','Dart','Java','Python'],
    //     online:false,
    //     profile: "images/cat.jpg",
    // },
    {
        name:'Lokesh',
        city:'Coimbatore',
        description : 'Backend Developer',
        skills:[ 'Node','Sentiment Analysis','Web Scrapping','Amazon Aws','Python', 'JavaScript', 'C Programming', 'C++', 'SQL', 'React'],
        online:false,
        profile: Lokesh,
    }
]

function User(props) {
    return (
        <div className="card-container">
            <span className={props.online ? "pro online" : "pro offline"}>
                {props.online ? "ONLINE" : "OFFLINE"}
            </span>
            <img src={props.profile} alt={props.name} className="img" />
            <h3>{props.name}</h3>
            <h3>{props.city}</h3>
            <p>{props.description}</p>
            <div className="buttons">
                <button className="primary">Message</button>
                <button className="primary outline">Following</button>
            </div>
            <div className="skills">
                <h6>Skills</h6>
                <ul>
                    {props.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

function UserCard() {
    return (
        <>
            {userData.map((user, index) => (
                <User
                    key={index} // Use a unique identifier as the key
                    name={user.name}
                    city={user.city}
                    description={user.description}
                    skills={user.skills}
                    online={user.online}
                    profile={user.profile}
                />
            ))}
        </>
    );
}

export default UserCard;


User.prototype = {
    name: PropType.string.isRequired,
    city: PropType.string.isRequired,
    description: PropType.string.isRequired,
    skills: PropType.array.isRequired,
    online: PropType.bool.isRequired,
    profile: PropType.string.isRequired,

}
// <div>
// <User name='Krishna' city = 'Coimbatore' description = 'Full Stack Developer'skills = {['Sentiment Analysis','Web Scrapping','Amazon Aws','Python', 'JavaScript', 'C Programming', 'C++', 'SQL', 'React', 'Node']} online = {true} />
// </div>