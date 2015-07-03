import Todos from './pages/todos.react';
import Home from './pages/home.react';
import {msg} from './intl/store';
import {containerWithNavbar} from './app/app.style';

export const routes = {
  todos: {
    component: Todos,
    title: msg('todos.title'),
    style: containerWithNavbar
  },
  home: {
    component: Home,
    title: msg('home.title'),
    style: containerWithNavbar
  }
};

export const defaultRoute = routes.home;
