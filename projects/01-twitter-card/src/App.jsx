import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
    //const format = (userName) => `@${userName}`
    //const cmari = {userName:"cmariiiiiiii", name:"C Marí", isFollowing: true }
    return (
        <div className="App">
        <TwitterFollowCard  userName="Spursito" name="Spurs"/>
        <TwitterFollowCard  userName = "cmariiiiiiii" name = "C Marí"/>
        <TwitterFollowCard  userName="c_tangana" name="Pucho"/>
        <TwitterFollowCard  userName="Recycled_J" name="Pucho"> 
            {/* Recycled */}
        </TwitterFollowCard>
        </div>
    )
}
