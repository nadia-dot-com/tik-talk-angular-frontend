import { inject } from "@angular/core"
import { LoginService } from "./login"
import { Router } from "@angular/router";

export const canActivateLogin = () => {
    const isLoggedIn = inject(LoginService).isLogin;

    if(isLoggedIn) {
        return true;
    }

    return inject(Router).createUrlTree(['/login'])
}