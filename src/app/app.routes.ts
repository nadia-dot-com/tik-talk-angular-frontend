import { Routes } from '@angular/router';
import { canAvtivaleLogin } from './services/login/access.guard';

export const routes: Routes = [
    {
        path: "login",
        loadComponent: () => {
            return import("./pages/login/login").then((m) => m.LoginPage)
        }
    },
    {
        path: '',
        canActivate: [canAvtivaleLogin],
        children: [
            {
                path: 'profile/:id',
                loadComponent: () => {
                    return import("./pages/profile/profile").then((m) => m.ProfilePage)
                },
            },
            {
                path: "chats",
                loadComponent: () => {
                    return import("./pages/chats/chats").then((m) => m.ChatsPage)
                },
            },
            {
                path: "search",
                loadComponent: () => {
                    return import("./pages/search/search").then((m) => m.SearchPage)
                },
            },
            {
                path: "settings",
                loadComponent: () => {
                    return import("./pages/settings-page/settings-page").then((m) => m.SettingsPage)
                },
            },
            {
                path: 'subscribers',
                loadComponent: () => {
                    return import("./pages/subscribers/subscribers").then((m) => m.SubscribersPage)
                }
            }
        ]
    },
];
