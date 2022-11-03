import { Component, For } from 'solid-js';
import { repos, setUsername, username } from '../App';
import Cards, {Repo} from '../components/Cards';

const refetchWithUsername = (event: Event) => {
    event.preventDefault()
    const usernameInput = document.querySelector('#usernameInput') as HTMLInputElement
    setUsername(usernameInput.value)
}

const Home: Component = () => {

    return (
        <div class="text-white mx-64">
            <form class="'mb-3" onSubmit={(event) => refetchWithUsername(event)}>
                <input type="text" id="usernameInput" class="text-black py-1 px-1" required/>
                <button class="bg-neutral-400 px-3 py-1 text-neutral-800 ml-5 hover:bg-neutral-200" >Fetch</button>
            </form>
            <h1 class="mt-3 text-2xl font-bold mb-3">Github Repos for {username()}</h1>
            <div>
                <For each={repos()}>
                    {(repo: Repo) =>  <Cards repo={repo}/>}
                </For>
            </div>
        </div>
    )
}

export default Home;