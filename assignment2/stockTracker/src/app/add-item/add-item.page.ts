import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { StorageService } from '../services/storage.service';
import { ModalController, ActionSheetController, AlertController } from '@ionic/angular';
// import { WebView } from '@ionic-native/ionic-webview/ngx';
// import { File, FileEntry } from '@ionic-native/file/ngx';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {

  image = [];
  
  constructor(
    // private camera: Camera,
    // private file: File,
    // private http: HttpClient,
    public photoService: PhotoService ,
    private storageService: StorageService,
    private modalController: ModalController,
    public actionSheetController: ActionSheetController,
  ) { }

    pictures = [
      {'Calamari': 'https://thumbs.dreamstime.com/b/cut-raw-calamari-rings-25900935.jpg'},
      {'Beef': 'https://thumbor.thedailymeal.com/W6NE9nprefEMEAAQcFjQP3r8xu8=//https://www.thedailymeal.com/sites/default/files/story/2017/raw%20steak.JPG'},
      {'Pork': 'https://previews.123rf.com/images/gbh007/gbh0071402/gbh007140200047/25665725-fresh-raw-pork-on-white-background.jpg'},
      {'Chicken': 'https://thumbs.dreamstime.com/b/raw-chicken-breast-fillets-29196167.jpg'},
      {'Scallops': 'https://irepo.primecp.com/2016/03/257998/recipe-3123_Large500_ID-1443162.jpg?v=1443162'},
      {'Fries': 'https://img.taste.com.au/ol2Jq8ZQ/taste/2016/11/rachel-87711-2.jpeg'}
    ]

  // newItem: Item = <Item>{};
  arr = [];

  item_pic: string;
  item_name: string;
  item_price: number;
  item_quantity: number;


  ngOnInit() {
  }

  async addItem() {

    // this.item_pic = this.photoService.photos[0].webviewPath;
    for (let i of this.pictures) {
      if (this.item_name == "Calamari") {
        
        this.arr["item_pic"] = i.Calamari;
        
      } 
      else if (this.item_name == "Beef") {
        
        this.arr["item_pic"] = i.Beef;
        
      } 
      else if (this.item_name == "Pork") {
        
        this.arr["item_pic"] = i.Pork;
        
      } 
      else if (this.item_name == "Chicken") {
        
        this.arr["item_pic"] = i.Chicken;
        
      } 
      else if (this.item_name == "Scallops") {
        
        this.arr["item_pic"] = i.Scallops;
        
      } 
      else {
        this.arr["item_pic"] = i.Fries;
      }
      
    }
    
    // this.arr["item_pic"] = this.item_pic;
    this.arr["item_name"] = this.item_name;
    this.arr["item_price"] = this.item_price;
    this.arr['item_quantity'] = this.item_quantity;
    this.modalController.dismiss(this.arr);
  }

  async close() {
    this.modalController.dismiss("closed");
  }

      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     //                                                                                                             //
    //                                  ActionSheetController                                                      //
   //                                                                                                             //
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // function to present edit/delete/order menu
  async uploadImage() {

    const actionSheet = await this.actionSheetController.create({
      // header: '',
      buttons: [
        {
          text: 'Use Camera',
          icon: 'aperture',
          handler: () => {
            this.photoService.addNewToGallery()
            console.log('Camera clicked');
          }
        }, 
        {
          text: 'Load from Library',
          icon: 'folder-open',
          handler: () => {
            console.log('Gallery clicked');
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

  

}
