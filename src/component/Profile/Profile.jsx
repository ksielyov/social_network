import React from 'react';
import Class from './Profile.module.css';

import {addNewPostActionCreator, updateProfileInputStatusActionCreator, updatePostTextActionCreator} from "../../redux/state";
import Post from '../Post/Post';

const Profile = (props) => {

    let posts = props.store.getState().wall.postsData.map(data => <Post postText={data.postText} likeCount={data.likeCount} />);

    let addPost = () => {
        props.store.dispatch(addNewPostActionCreator());
    }

    let openEditor = () => props.store.dispatch(updateProfileInputStatusActionCreator());

    let textUpdate = data => {
        props.store.dispatch(updatePostTextActionCreator(data.target.value));
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

            {
                props.store.getState().wall.profilePostInputActive ? (
                    <div className={Class.profilePostNew__Active}>
                        <div className={Class.profilePostContainer__Active}>
                            <img src='https://miro.medium.com/max/2400/1*hgVVYMtzC2FjK221f-6wyA.png' />
                            <textarea onChange={data => textUpdate(data)} placeholder='Что у Вас нового?' value={props.store.getState().wall.postTempText} />
                            {/* <i onClick={ () => addPost() } className="fa fa-paper-plane-o" aria-hidden="true"></i> */}
                        </div>
                        <div onClick={ () => addPost() } className={Class.sendPostContainer__Active}><p className={Class.sendPost__Active}>Добавить</p></div>
                    </div>
                ) : (
                        <div className={Class.profilePostNew}>
                            <div className={Class.profilePostContainer}>
                                <img src='https://miro.medium.com/max/2400/1*hgVVYMtzC2FjK221f-6wyA.png' />
                                <textarea onClick={() => openEditor()} placeholder='Что у Вас нового?' value={props.store.getState().wall.postTempText} />
                            </div>
                        </div>
                    )
            }

            {posts}

        </div>
    );
}

export default Profile;