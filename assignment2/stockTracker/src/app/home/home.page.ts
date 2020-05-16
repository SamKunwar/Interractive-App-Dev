import { Component, ViewChild } from '@angular/core';
import { ProductsPage } from '../products/products.page'
import { ModalController, ActionSheetController, AlertController } from '@ionic/angular';
import { StorageService, Item } from '../services/storage.service';
import { Platform, ToastController, IonList } from '@ionic/angular';
import { AddItemPage } from '../add-item/add-item.page';

// import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //variables 

  items: Item[] = [];
  newItem: Item = <Item>{};

  @ViewChild('mylist')mylist: IonList;
 

  image: string = 'https://www.pefoods.com.au/assets/images/bandd-logo.jpg';

  constructor(
    public modalController: ModalController , 
    public actionSheetController: ActionSheetController,
    public alertController : AlertController,
    private storageService: StorageService,
    private plt: Platform,
    private toastController: ToastController 
    // private photoService: PhotoService
    ) { 
      this.plt.ready().then(() => {
      this.loadItems();
    })
  }

  ngOnInit() {   
  }


  async loadItems() {
    this.storageService.getItems().then(items => {
      this.items = items;
    })
  } 
  
  // add new items to the database
  async addProd() {
    
    this.newItem.id = Date.now();

    const modal = await this.modalController.create({
      component: AddItemPage,
      componentProps: {}
    });
    modal.onDidDismiss().then((addToArray) => {
      let n = addToArray.data;
      if (n == "closed") {
        
      } else {
        this.newItem.item_pic = n.item_pic;
        this.newItem.item_name = n.item_name;
        this.newItem.item_price = n.item_price;
        this.newItem.item_quantity = n.item_quantity;

        this.storageService.addItem(this.newItem).then(items => {
          this.newItem = <Item>{};
          this.showToast('Item Added!');
          this.loadItems();
        })
      }
    })
    return await modal.present();
  };
  

 
      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     //                                                                                                             //
    //                                  Edit modal controller                                                      //
   //                                                                                                             //
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // Functions for Organization_type: 'Suppliers'
  async editProd(item: Item) {
    
    const modal = await this.modalController.create({
      component: ProductsPage,
      componentProps: {
        'item_pic': item.item_pic,
        'item_name' : item.item_name,
        'item_price': item.item_price,
        'item_quantity': item.item_quantity
      }
    });
    modal.onDidDismiss().then((edited_data) => {
      let nc = edited_data.data;
      if ((nc['item_name'] == undefined) && (nc['item_price'] == undefined) && (nc['item_quantity'] == undefined)) {

      } else {
        item.item_pic = nc['item_pic'];
        item.item_name = nc['item_name'];
        item.item_price = nc['item_price'];
        item.item_quantity = nc['item_quantity'];

        this.storageService.updateItem(item).then(item => {
          this.showToast('Item Updated!');
          this.loadItems();
        })
      }
    })
    return await modal.present();
  };

      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     //                                                                                                             //
    //                                  Delete Option                                                              //
   //                                                                                                             //
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // function to delete respective item
  deleteProd(item: Item) {
    this.storageService.deleteItem(item.id).then(item => {
      this.showToast('Item removed!');
      this.loadItems();
    })
  };
  
      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     //                                                                                                             //
    //                                  ActionSheetController                                                      //
   //                                                                                                             //
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // function to present edit/delete/order menu
  async showMenu(i) {

      const actionSheet = await this.actionSheetController.create({
        // header: '',
        buttons: [
  
          {
            text: 'Delete',
            role: 'destructive',
            icon: 'trash',
            handler: () => {
              this.displayAlertMessage(i);
              console.log('Delete clicked');
            }
          }, 
          {
            text: 'Edit',
            icon: 'create-outline',
            handler: () => {
              this.editProd(i)
              console.log('Edit clicked');
            }
          }, 
          {
            text: 'Cancel',
            icon: 'close',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });
      await actionSheet.present();
  }


      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     //                                                                                                             //
    //                                  Alert Message                                                             //
   //                                                                                                             //
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // function to display alert message when deleting any item
  async displayAlertMessage(i) {
    const alert = await this.alertController.create({
      header : 'Delete the item!',
      message : 'Do you agree to delete the selected item permanently from the database?',
      buttons : [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'Okay',
          handler: () => {
            this.deleteProd(i);
            console.log('Confirm delete');
          }
        }
      ]
    });
    await alert.present();
  }


  //display toast message 
  async showToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
  
}
