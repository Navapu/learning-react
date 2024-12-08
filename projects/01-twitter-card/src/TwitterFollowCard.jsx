import { useState } from "react"
export function TwitterFollowCard({children, userName, name}) {
    const [isFollowing, setIsFollowing] = useState(false)

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
                <button className={styleButton} onClick={toggleState}>{followText}</button>
            </aside>
        </article>
    )
}
