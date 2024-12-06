import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
    const format = (userName) => `@${userName}`
    return (
        <div className="App">
        <TwitterFollowCard formatUserName = {format} userName="Spursito" name="Spurs" isFollowing={true} />
        <TwitterFollowCard formatUserName = {format} userName="cmariiiiiiii" name="C Marí" isFollowing={true} />
        <TwitterFollowCard formatUserName = {format} userName="c_tangana" name="Pucho" isFollowing={true} />

        </div>
    )
}
