export function TwitterFollowCard({children, userName, name, isFollowing}) {
    const image = `https://unavatar.io/x/${userName}`
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
                <button className="follow">Seguir</button>
            </aside>
        </article>
    )
}
