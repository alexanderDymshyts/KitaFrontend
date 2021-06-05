import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Role } from '../enums/eRole';
import { IUser } from '../interfaces/user';
import { AuthenticationService } from '../security/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {  

  private user?: IUser;
  private roles = Role;

  constructor(private readonly authenticationService: AuthenticationService) { }
  
  ngOnInit(): void {   
    this.authenticationService.userSubject.subscribe(user => this.user = user);
  }

  get isUser() {    
    return this.user && this.user.role === this.roles.User;
  }

  get isModeratorOrAdmin() {
    return this.user && (this.user.role === this.roles.Moderator || this.user.role === this.roles.Admin);
  }

  get isLoggedIn() {
    return this.user && (this.user.role === this.roles.Moderator || this.user.role === this.roles.Admin || this.user.role === this.roles.User);
  }

  public onLogout() {
    this.authenticationService.logout();
  }
}
