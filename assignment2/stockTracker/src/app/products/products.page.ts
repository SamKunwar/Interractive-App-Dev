import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  constructor(private modalController: ModalController) { }

  item_pic: string;
  item_name: string;
  item_price: number;
  item_quantity: number;
  item_amount: number = 0;
  edit: boolean

  ngOnInit() {  }

  // Restaurants functions

  addToCart() {

    // get the present days date
    let date = new Date();
    let  year = date.getFullYear().toString()
    let  month = date.getMonth().toString()
    let  day = date.getDate().toString()

    let order_date = year + "-" + month + "-" + day;

    let orders = [];
    let cost = this.item_price * this.item_amount;
    orders['item_name'] = this.item_name;
    orders['item_amount'] = this.item_amount;
    orders['total_cost'] = cost;
    orders['order_date'] = order_date;
    
    this.modalController.dismiss(orders);
  }

  // Suppliers functions
  
  prodChange() {

    let edited_data = []
    edited_data['item_pic'] = this.item_pic;
    edited_data["item_name"] = this.item_name; 
    edited_data["item_price"] = this.item_price;   
    edited_data["item_quantity"] = this.item_quantity;

    this.modalController.dismiss(edited_data);
  }

  //when dismissed it sends a string to verify that nothing is changed
  dismiss() {
    let a = "no changes"
    this.modalController.dismiss(a);
  }
}
