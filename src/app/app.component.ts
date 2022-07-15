import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule],
})
export class AppComponent implements OnInit {
  title = 'client';
  apiMessage?: string;

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http
      .get<{ message: string }>('api')
      .subscribe((value) => (this.apiMessage = value.message));
  }
}
