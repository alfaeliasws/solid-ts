import { Component } from 'solid-js';
import { setSavedRepos, savedRepos } from '../pages/SavedRepos';

export type Repo = {
    id: string
    html_url: string
    name: string
    description: string
    stargazers_count: string
    owner: {
        login: string
    }
}

interface Props {
    repo: Repo
}

const saveRepo = (repo: Repo) => {
    setSavedRepos([repo, ...savedRepos()])
    localStorage.setItem('savedRepos', JSON.stringify(savedRepos()))
}

const unsaveRepo = (repoId: string) => {
    const nextState = savedRepos()?.filter((item) => item.id !== repoId)
    setSavedRepos(nextState)
    localStorage.setItem('savedRepos', JSON.stringify(savedRepos()))
}

const reposIsSaved = (repoId: string) => {
    const repo = savedRepos()?.filter(item => item.id === repoId)
    return repo?.length > 0
}

const Cards: Component<Props> = ({ repo }) => {
    return (
        <div class="bg-neutral-700 min-h-min py-3 pl-2 text-lg font-normal tracking-widest hover:brightness-110">
            <a href={repo.html_url} target="_blank" rel="noreferrer"><strong>{repo.owner?.login}</strong>/{repo.name}</a>
            <p class="text-sm font-normal mb-2">{repo.description}</p>
            <p class="text-sm font-normal mb-2">stars: {repo.stargazers_count}</p>

            {reposIsSaved(repo.id) ? (
                <button onClick={() => unsaveRepo(repo.id)} class="bg-black font-small px-3 py-1 text-neutral-200  font-bold mb-2">Unsave</button>
                ) : (
                <button onClick={() => saveRepo(repo)} class="bg-yellow-500 font-small px-3 py-1 text-neutral-800 font-bold mb-2">Save</button>
            )}
        </div>
    )
}

export default Cards;