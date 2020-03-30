import React from 'react';
import Class from './Profile.module.css';

const Profile = () => {
    return(
        <div className={ Class.content }>
            <div className={ Class.profileInfo }>
                <div className={ Class.cap }>
                    <img src='https://avatars.mds.yandex.net/get-pdb/939428/f391f54b-1b4e-463c-80d7-6e16d64cadb8/s1200' />
                </div>

                <div className={ Class.ava }>
                    <img src='https://miro.medium.com/max/2400/1*hgVVYMtzC2FjK221f-6wyA.png' />
                    <p>Pavel Durov</p>
                </div>
        
                <div className={ Class.info }>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsam, delectus laudantium earum labore eaque quae minima omnis maiores, blanditiis mollitia culpa voluptates inventore modi facilis minus voluptatem ab assumenda.</p>
                </div>
            </div>

            <div className={ Class.profilePostNew }>
                <img src='https://miro.medium.com/max/2400/1*hgVVYMtzC2FjK221f-6wyA.png' />
                <textarea placeholder='Что у Вас нового?'></textarea>
            </div>

            <div className={ Class.profilePost }>
                <div className={ Class.postInfo }>
                    <img src='https://miro.medium.com/max/2400/1*hgVVYMtzC2FjK221f-6wyA.png' />
                    <p>Pavel Durov</p>
                </div>
                <p align='justify' className={ Class.postText }>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, repellat velit vitae ullam, illo ad mollitia, omnis dolorum unde deleniti perferendis! Iste laborum pariatur nesciunt quam eum ad, reprehenderit magnam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, repellat velit vitae ullam, illo ad mollitia, omnis dolorum unde deleniti perferendis! Iste laborum pariatur nesciunt quam eum ad, reprehenderit magnam.</p>
            </div>
        </div>
    );
}

export default Profile;