import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl:'./header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [CommonModule,]
})

export class HeaderComponent implements OnInit{

  constructor( ) {
  }

  ngOnInit(): void {

  }


}
