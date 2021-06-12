import {Component, OnInit} from '@angular/core';
import {Customer} from "../interface/Customer";
import {Customers} from "../interface/Customers";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  customer: Customer = {
    id: 5,
    name: ""
  }

  constructor() {
  }

  customers = Customers;

  ngOnInit(): void {
  }
  name = "";
  chooseCustomer(item: Customer): void {
    debugger;
    this.name = item.id+" "+item.name;
  }

  //name = "Vu Hai Long";
}
