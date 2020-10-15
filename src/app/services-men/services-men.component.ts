import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services-men',
  templateUrl: './services-men.component.html',
  styleUrls: ['./services-men.component.css']
})
export class ServicesMenComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
