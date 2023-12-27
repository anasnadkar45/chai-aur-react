import './profile.css'

const user = {
    name : 'Hedy Lamarr',
    url : 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize : 90,
};

function Profile (){
    return(
        <>
        <h1>{user.name}</h1>
        <img
            className="avatar"
            src={user.url}
            alt={'Photo of ' + user.name}
            style={{
            width: user.imageSize,
            height: user.imageSize
            }}
        />
        </>
    )
}

export default Profile

