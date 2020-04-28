import React from 'react';
import Class from './Profile.module.css';

import Post from '../Post/Post';

const Profile = (props) => {

    let posts = props.postsData.map(data => <Post postText={data.postText} likeCount={data.likeCount} />);

    let postLabel = React.createRef();

    let addPost = () => {
        props.addPostFun();

        props.updateProfileInputStatus(false);
    }

    let openEditor = () => props.updateProfileInputStatus(true);

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

            {
                props.inputActive ? (
                    <div className={Class.profilePostNew__Active}>
                        <div className={Class.profilePostContainer__Active}>
                            <img src='https://miro.medium.com/max/2400/1*hgVVYMtzC2FjK221f-6wyA.png' />
                            <textarea onChange={data => props.updatePostText(data.target.value)} placeholder='Что у Вас нового?' value={props.postTempText} />
                            {/* <i onClick={ () => addPost() } className="fa fa-paper-plane-o" aria-hidden="true"></i> */}
                        </div>
                        <div onClick={ () => addPost() } className={Class.sendPostContainer__Active}><p className={Class.sendPost__Active}>Добавить</p></div>
                    </div>
                ) : (
                        <div className={Class.profilePostNew}>
                            <div className={Class.profilePostContainer}>
                                <img src='https://miro.medium.com/max/2400/1*hgVVYMtzC2FjK221f-6wyA.png' />
                                <textarea onClick={() => openEditor()} placeholder='Что у Вас нового?' value={props.postTempText} />
                            </div>
                        </div>
                    )
            }

            {posts}

        </div>
    );
}

export default Profile;