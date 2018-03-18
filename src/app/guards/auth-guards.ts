import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/RX';
import { FlashMessagesService } from 'angular2-flash-messages';


@Injectable()

export class AuthGuard implements CanActivate {
    constructor(private router: Router, private AuthFire: AngularFireAuth, public flash_message: FlashMessagesService) { }
    canActivate(): Observable<boolean> {
        return this.AuthFire.authState.map(auth => {
            if (!auth) {
                this.getflash();
                this.router.navigate(['/login']);
                return false;
            } else {
                return true;
            }
        });
    }
    getflash() {
        this.flash_message.show('Should Be Logged In To view Page !', { cssClass: 'alert-warning', timeout: 4000 });
    }
}
