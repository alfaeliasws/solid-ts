import { NavLink } from '@solidjs/router';
import { Component, JSXElement } from 'solid-js';
import classNames from 'classnames';
import { savedRepos } from '../pages/SavedRepos';

interface Nav {
    styling: string,
}

const Nav: Component<Nav> = (props): JSXElement => {

    return (
        <div class={classNames("mb-5 mt-5 mx-64", props.styling)}>
            <NavLink href="/" class="hover:brightness-125 mr-4 px-4 py-3 bg-neutral-300 text-neutral-600" end activeClass="bg-yellow-600 text-neutral-200">Home</NavLink>
            <NavLink href="/saved" class="hover:brightness-125 mr-4 px-4 py-3 bg-neutral-300 text-neutral-600" activeClass="bg-yellow-600 text-neutral-200">Saved ~ {savedRepos().length}</NavLink>
        </div>
    )
}

export default Nav;