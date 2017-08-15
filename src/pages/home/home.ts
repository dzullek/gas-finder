import { Component } from '@angular/core';
import {GasStationsListPage} from '../gas_stations/gas_stations';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  searchForGasStations(){
    this.navCtrl.push(GasStationsListPage);
  }

}
