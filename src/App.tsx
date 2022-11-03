import { Component, createEffect, createSignal } from 'solid-js';
import Nav from './components/Nav';
import { Route, Routes } from '@solidjs/router';
import Home from './pages/Home';
import SavedRepos from './pages/SavedRepos';

const [username, setUsername ] = createSignal('alfaeliasws')
const [repos, setRepos] = createSignal([])

const App: Component = () => {
  createEffect(async () => {
    const res = await fetch(`https://api.github.com/users/${username()}/repos?sort=created`)
    setRepos(await res.json())
  })

  return (
    <div class="mx-20 bg-neutral-800 min-h-screen">
      <Nav styling="w-full min-h-min"/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/saved" element={<SavedRepos />} />
      </Routes>
    </div>
  );
};

export {username, setUsername, repos}
export default App;
