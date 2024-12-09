import { useState } from "react"
export function TwitterFollowCard({userName, name, initialIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    const image = `https://unavatar.io/x/${userName}`
    const followText = isFollowing ? 'Following' : 'Follow'
    const styleButton = isFollowing ? 'following' : 'follow'

    const toggleState = () => {
        setIsFollowing(!isFollowing)
    }
    return (
        <article className="main">
            <header className="tw-header">
                <img src= {image} className="avatar"/>
                <div className="user">
                    <strong>{name}</strong>
                    <span className="username">@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={styleButton} onClick={toggleState}>
                <span className="text-follow">{followText}</span>
                <span className="text-unfollow">Unfollow</span>
                </button>
            </aside>
        </article>
    )
}
