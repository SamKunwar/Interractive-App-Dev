import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Item {
  id:             number,
  item_pic:       string,
  item_name:      string,
  item_quantity:  number,
  item_price:     number
}

const ITEMS_KEY = 'products';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    private storage: Storage
  ) { }


  // Load items from the storage
  async getItems(): Promise<Item[]> {
    return this.storage.get(ITEMS_KEY);
  }

  // Create a new item
  async addItem(item: Item): Promise<any> {
    return this.storage.get(ITEMS_KEY).then((items: Item[]) => {
      if (items) {
        items.push(item);
        return this.storage.set(ITEMS_KEY, items)
      } else {
        return this.storage.set(ITEMS_KEY, [item]);
      }
    });
  }


  // update selected item
  async updateItem(item: Item): Promise<Item[]> {
    return this.storage.get(ITEMS_KEY).then((items: Item[]) => {
      if (!items || items.length === 0) {
        return null;
      }
      let newItem: Item[] = [];

      for (let i of items) {
        if (i.id == item.id) {
          newItem.push(item);
        } else {
          newItem.push(i);
        }
      }
      return this.storage.set(ITEMS_KEY, newItem);
    })
  }

  // delete selected item
  async deleteItem(id: number): Promise<any> {
    return this.storage.get(ITEMS_KEY).then((items: Item[]) => {
      if (!items || items.length == 0) {
        return null;
      }
      let toKeep: Item[] = [];

      for (let i of items) {
        if (i.id != id) {
          toKeep.push(i);
        }
      }  
      return this.storage.set(ITEMS_KEY, toKeep);
    })
  }


  // add chart data to storage 
  async addChartData(data) {
    return this.storage.set("chart", data);  
  }

  // get chart data from storage
  async getChartData() {
    return this.storage.get("chart");
  }

}
