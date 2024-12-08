import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
    //const format = (userName) => `@${userName}`
    const cmari = {userName:"cmariiiiiiii", name:"C Marí", isFollowing: true }
    return (
        <div className="App">
        <TwitterFollowCard  userName="Spursito" name="Spurs" isFollowing={true} />
        <TwitterFollowCard  {...cmari}/>
        <TwitterFollowCard  userName="c_tangana" name="Pucho" isFollowing={true} />
        <TwitterFollowCard  userName="Recycled_J" name="Pucho" isFollowing={true} >
            {/* Recycled */}
        </TwitterFollowCard>
        </div>
    )
}
