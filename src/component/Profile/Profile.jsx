import React from 'react';
import Class from './Profile.module.css';

import Post from '../Post/Post';

const Profile = (props) => {

    let posts = props.postsData.map(data => <Post postText={data.postText} likeCount={data.likeCount} />);

    let postLabel = React.createRef();

    let getFullArea = () => {
        alert(postLabel.current.value);
    }
    
    return (
        <div>
            <div className={Class.profileInfo}>
                <div className={Class.cap}>
                    <img src='https://avatars.mds.yandex.net/get-pdb/939428/f391f54b-1b4e-463c-80d7-6e16d64cadb8/s1200' />
                </div>

                <div className={Class.ava}>
                    <img src='https://miro.medium.com/max/2400/1*hgVVYMtzC2FjK221f-6wyA.png' />
                    <p>{props.name}</p>
                </div>

                <div className={Class.info}>
                    <p>{props.description}</p>
                </div>
            </div>

            <div className={Class.profilePostNew}>
                <img src='https://miro.medium.com/max/2400/1*hgVVYMtzC2FjK221f-6wyA.png' />
                <textarea ref={postLabel} onClick={ () => getFullArea() } placeholder='Что у Вас нового?'></textarea>
            </div>

            {posts}

        </div>
    );
}

export default Profile;