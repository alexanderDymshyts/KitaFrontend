import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../shared/security/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  
  constructor(
    private readonly authenticationService: AuthenticationService ,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly formBuilder: FormBuilder) { 
       // redirect to home if already logged in
       if (this.authenticationService.userValue) { 
        this.router.navigate(['/']);
      }
    }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  public onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
        }
    
    this.loading = true;
    
    this.authenticationService.login$(this.f.email.value, this.f.password.value)
        .subscribe({
            next: () => {
                // get return url from query parameters or default to home page
                const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                this.router.navigateByUrl(returnUrl);
            },
            error: error => {
                console.error(error);
                this.error = error;
                this.loading = false;
            }
        });
  }
}
