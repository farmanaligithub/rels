import React, { useEffect, useState } from 'react';
import './Aside.css';
import like from '../icons/like.svg';
import likeFill from '../icons/like-fill.svg'
import comment from '../icons/comment.svg';
import save from '../icons/save.svg';
import saveFill from '../icons/save-fill.svg'
import share from '../icons/share.svg';

export default function Aside() {

    const [liked, setLiked] = useState(false)
    const [likes, setLikes] = useState(0);
    const [saved, setSaved] = useState(false)
    const [saves, setSaves] = useState(0);
    function handleLikeClick() {
        setLiked(!liked)
    }

    useEffect(() => {
        if (liked) {
            setLikes((oldValue) => {
                if (oldValue < 0) {
                    return 0;
                } else {
                    return oldValue + 1;
                }
            })
        } else {
            setLikes((oldValue) => {
                if ((oldValue - 1) < 0) {
                    return 0;
                } else {
                    return oldValue - 1;
                }
            })
        }
    }, [liked])



    useEffect(() => {
        if (saved) {
            setSaves((oldValue) => {
                if (oldValue < 0) {
                    return 0;
                } else {
                    return oldValue + 1;
                }
            })
        } else {
            setSaves((oldValue) => {
                if ((oldValue - 1) < 0) {
                    return 0;
                } else {
                    return oldValue - 1;
                }
            })
        }
    }, [saved])


    return (
        <aside>
            <div className="icon">
                {liked ? <img src={likeFill} onClick={handleLikeClick} /> : <img src={like} onClick={handleLikeClick} />}
                <span>{likes}</span>
            </div>
            <div className="icon">
                <img src={comment} />
                <span>12M</span>
            </div>
            <div className="icon">
                {saved ? <img src={saveFill} onClick={() => setSaved(false)} /> : <img src={save} onClick={() => setSaved(true)} />}
                <span>{saves}</span>
            </div>
            <div className="icon">
                <img src={share} />
                <span>12M</span>
            </div>
        </aside>
    )
}
