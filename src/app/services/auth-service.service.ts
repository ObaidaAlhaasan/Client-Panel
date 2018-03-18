import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthServiceService {

  constructor(private Anugular2_auth_service: AngularFireAuth) { }

  login(email: string, pass: string) {
    return this.Anugular2_auth_service.auth.signInWithEmailAndPassword(email, pass);
  }

  // Check user status
  getAuth() {
    return this.Anugular2_auth_service.authState.map(auth => auth);
  }

  //  logout
  logout() {
    this.Anugular2_auth_service.auth.signOut();
  }

  //  createZZnewUser

  createUser(email: string, pass: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.Anugular2_auth_service.auth.createUserWithEmailAndPassword(email, pass).then(userData => resolve(userData), err => reject(err));
    });
  }


  //  End
}
