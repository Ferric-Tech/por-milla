import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SignInComponent implements OnInit {
  constructor(public authService: AuthService) {}
  ngOnInit() {}
}
