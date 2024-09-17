import { useState } from 'react'
import './App.css'


function TwitterFollowCard({username, user, isFollowing}) {

    const [follow, setFollow] = useState(isFollowing)

    const ImageSrc = `https://unavatar.io/x/${username}`

    const HandleClickSeguir = () => {
        setFollow(!follow)
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
                        className='tw-followCard-button'
                        onClick={HandleClickSeguir}
                    >
                        {follow ? 'Unfollow' : 'Follow'}
                    </button>
                </aside>
            </article>
        </>
    )
}



export default TwitterFollowCard
