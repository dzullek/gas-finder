import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StationService } from '../../providers/stations.service';
import { Station } from '../../providers/station';
import { OnInit } from '@angular/core';
declare var google: any;

@Component({
  templateUrl: 'gas_stations.html',
  providers: [StationService]
})
export class GasStationsListPage implements OnInit {

  stations: Station[];

  constructor(public navCtrl: NavController, private stationService: StationService) {

  }

  ngOnInit(): void {

    var container = document.createElement('div');


    this.getGasStations();
  }

  getGasStations(): void {
    this.stationService.getAllStations(
      {
        lat: 52.229676,
        lng: 21.012229
      }, 1000
    ).then((results: Array<any>) => {
      console.log(results);
      this.stations = results;
    }
      );

  }

}
