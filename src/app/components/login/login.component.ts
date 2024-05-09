import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientServiceService } from '../../services/client-service.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private route: Router,
    private client: ClientServiceService
  ) { }


  ngOnInit(): void {
    localStorage.removeItem("token");
    this.form = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    });

  }


  onSubmit() {
    if (this.form!.valid) {
      const data = { email: this.form!.value.email, password: this.form!.value.password };
      this.client.postRequest(`http://127.0.0.1:5000/login`, data).subscribe(
        (response: any) => {
          localStorage.setItem("token", response.token)
          this.route.navigate(['/climate']);
        },
        (error) => alert(error.error.status)
      );
    } else {
      console.log("Form error");
    }
  }
}
