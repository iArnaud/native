import Todos from './pages/todos.react';
import Home from './pages/home.react';
import Header from './components/header.react';
import TodoHeader from './todos/todoheader.react';
import {msg} from './intl/store';
import {containerWithNavbar, containerWithBigNavbar} from './app/app.style';

export const routes = {
  todos: {
    component: Todos,
    title: msg('todos.title'),
    navbar: TodoHeader,
    style: containerWithBigNavbar
  },
  home: {
    component: Home,
    title: msg('home.title'),
    navbar: Header,
    style: containerWithNavbar
  }
};

export const defaultRoute = routes.home;
