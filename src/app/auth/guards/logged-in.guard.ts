import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DataAccessService } from '../services/data-access.service';

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private authService: DataAccessService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
