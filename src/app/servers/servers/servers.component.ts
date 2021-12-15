import { Component, OnInit } from '@angular/core';
import { ServersService } from '../services/servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor(private servicio: ServersService) { }

  servers = this.servicio.mostrar();



 

  ngOnInit(): void {
  }

}
