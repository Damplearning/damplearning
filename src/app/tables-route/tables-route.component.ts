import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-tables-route',
  templateUrl: './tables-route.component.html',
  styleUrls: ['./tables-route.component.css']
})
export class TablesRouteComponent implements OnInit {
  tables$ = this.http.get('/api/tables');

  constructor(private http: HttpClient) {}

  ngOnInit() {
  }

}
