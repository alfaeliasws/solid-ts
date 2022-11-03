import { Component, createSignal, For } from 'solid-js';
import Cards, { Repo } from '../components/Cards';

const reposFromLocalStorage = JSON.parse(localStorage.getItem('savedRepos') || `[]`)

const [savedRepos, setSavedRepos] = createSignal(reposFromLocalStorage as Repo[])

const SavedRepos: Component = () => {
    return (
        <div class="text-white mx-64">
            <h1 class="mt-3 text-2xl font-bold mb-3">Your saved repos</h1>
            <div>
                <For each={savedRepos()}>
                    {(repo: Repo) =>  <Cards repo={repo}/>}
                </For>
            </div>
        </div>
    )
}

export { setSavedRepos, savedRepos }
export default SavedRepos;