import React from 'react';
import s from './Friends.module.css'
import {FriendsType} from "../../redux/stateType";

type FriendsPT = {
    friends: FriendsType[]
}

export const Friends: React.FC<FriendsPT> = ({friends}) => {
    const friendsData = friends.map((friend) => {
        return (
            <div key={friend.id} className={s.friend}><img
                src="https://w7.pngwing.com/pngs/728/483/png-transparent-sticker-friendship-friendship-love-miscellaneous-white-thumbnail.png"
                alt="friend"/>
                <span>{friend.name}</span>
            </div>

        )
    })

    return (
        <div className={s.friendContainer}>
            {friendsData}
        </div>
    );
};
