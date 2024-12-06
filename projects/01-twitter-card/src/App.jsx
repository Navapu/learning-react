import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
    return (
        <div className="App">
        <TwitterFollowCard userName="Spursito" name="Spurs" isFollowing={true} />
        <TwitterFollowCard userName="cmariiiiiiii" name="C Marí" isFollowing={true} />
        <TwitterFollowCard userName="c_tangana" name="Pucho" isFollowing={true} />

        </div>
    )
}
