import { TwitterFollowCard } from "./TwitterFollowCard";
const users = [
    {
        userName: 'Spursito',
        name: 'Spurs',
        isFollowing: false
    },
    {
        userName: 'cmariiiiiiii',
        name: 'C Marí',
        isFollowing: true
    },
    {
        userName: 'c_tangana',
        name: 'Pucho',
        isFollowing: true
    },
    {
        userName: 'Recycled_J',
        name: 'Jorge',
        isFollowing: false
    }
]
export function App() {
    //const format = (userName) => `@${userName}`
    //const cmari = {userName:"cmariiiiiiii", name:"C Marí", isFollowing: true }


    return (
        <div className="App">
            {/* <TwitterFollowCard  userName="Spursito" name="Spurs" initialIsFollowing ={false}/>
        <TwitterFollowCard  userName = "cmariiiiiiii" name = "C Marí" initialIsFollowing/>
        <TwitterFollowCard  userName="c_tangana" name="Pucho" initialIsFollowing/>
        <TwitterFollowCard  userName="Recycled_J" name="Jorge" initialIsFollowing ={false}/>  */}
            {
                users.map(user => {
                    const { userName, name, isFollowing } = user
                    return (
                        <TwitterFollowCard
                            key={userName}
                            userName={userName}
                            name={name}
                            initialIsFollowing={isFollowing}
                        ></TwitterFollowCard>
                    )
                })
            }
        </div>
    )
}
