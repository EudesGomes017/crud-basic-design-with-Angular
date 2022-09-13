import { HeaderData } from './header-data.model';
import { HeaderService } from './header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
  }

  //pegando o title diretamente do headerService
  get title(): string {
   return this.headerService.headerData.title
  }

  //pegando o title diretamente do headerService
  get icon(): string {
    return this.headerService.headerData.icon
   }

   //pegando o title diretamente do headerService
  get routeUrl(): string {
    return this.headerService.headerData.routeUrl
   }

}
