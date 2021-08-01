import { Component, OnInit } from '@angular/core';
import { JwtClientService } from 'src/app/services/jwt-client.service';

@Component({
  selector: 'app-h-menu',
  templateUrl: './h-menu.component.html',
  styleUrls: ['./h-menu.component.css']
})
export class HMenuComponent implements OnInit {

  constructor(public jwtService: JwtClientService) { }

  ngOnInit(): void {
    console.log("> > > > > > > INIT >>> >>>> >>>>> ");
  }

}
