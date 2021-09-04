import { Component } from '@angular/core';
import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { AuthGuard } from './services/auth-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Shop 24x7';
  loginStatus: boolean = false;
  adminLoginStatus: boolean = false;
  constructor(private _authguard: AuthGuard, private _admin: AdminAuthGuard) {}

  ngOnInit(): void {
    this.loginStatus = this._authguard.isLoggedIn();
    this.adminLoginStatus = this._admin.isAdminLoggedIn();
  }

  logout() {
    if (localStorage.getItem('role') == 'user') {
      this._authguard.logout();
    } else {
      this._admin.logout();
    }
  }
}
