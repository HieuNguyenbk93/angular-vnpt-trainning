import { Component, OnInit } from '@angular/core';
import {Customer} from '../model/customer'

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  CurrentCustomer: Customer = new Customer();

  constructor() { }

  ngOnInit(): void {
  }

  submit(): void{
    console.log(this.CurrentCustomer);
  }

}
