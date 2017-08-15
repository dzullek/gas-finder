import { Injectable } from '@angular/core';
import { Station } from './station';
import { STATIONS } from './mock-stations';
declare var google: any;

@Injectable()
export class StationService {


	getAllStations(latLng: any, radius:number): Promise<Array<any>> {

		var container = document.createElement('div');
		var service = new google.maps.places.PlacesService(container);

		var promise;

		promise = new Promise<Array<any>>(
			(resolve, reject) => {
				service.nearbySearch({
					location: latLng,
					radius: radius,
					type: ['gas_station']
				}, function (results, status) {
					console.log("in callback");
					if (status === google.maps.places.PlacesServiceStatus.OK) {
						console.log("status ok, creating promise");
						resolve(results);
					} else {
						console.error('failure loading gas station data ', status);
						reject(status);
					}
				});
			}
		);


		return promise;
	}

}