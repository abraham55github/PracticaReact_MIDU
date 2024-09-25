import { useState } from 'react'
import './App.css'


function TwitterFollowCard({ username, user }) {

    const [isFollowing, SetIsFollowing] = useState(false)

    const ImageSrc = `https://unavatar.io/x/${username}`

    console.log(isFollowing)
    const HandleClickSeguir = () => {
        SetIsFollowing(!isFollowing)
    }

    return (
        <>
            <article className='tw-followCard'>
                <header className='tw-followCard-header'>
                    <img className='tw-followCard-avatar' src={ImageSrc} alt={`El avatar de ${user}`} />
                    <div className='tw-followCard-info'>
                        <strong>{user}</strong>
                        <span className='tw-followCard-infoUserName'>@{username}</span>
                    </div>
                </header>

                <aside>
                    <button
                        className={`${isFollowing === true ? 'tw-followCard-button is-following' : 'tw-followCard-button'}`}
                        onClick={HandleClickSeguir}
                    >
                        <span className={`${isFollowing ? 'tw-followCard-text' : ' '}`}>{isFollowing ? 'Siguiendo' : 'Seguir'}</span>
                        <span className={`${isFollowing ? 'tw-followCard-stopFollow' : ' tw-followCard-text'}`}>{isFollowing ? 'Dejar de seguir' : ''}</span>
                    </button>
                </aside>
            </article>
        </>
    )
}



export default TwitterFollowCard
