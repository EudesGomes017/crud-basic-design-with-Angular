import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private headerService: HeaderService) { 

    //headerData é um metodo get e set é uma proprieade
    headerService.headerData =  {
      title: 'Início',
      icon: 'homet',
      routeUrl: ''
    }

  }

  

  ngOnInit(): void {
  }

}
