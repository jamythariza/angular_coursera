import { DestinoViaje } from './destino-viaje.model';
import { Subject, BehaviorSubject } from 'rxjs';
import { Store } from '@ngrx/store';
import { appState } from '../app.module';
import { NuevoDestinoAction, ElegidoFavoritoAction } from './destinos-viajes-state.model';
import { Injectable } from '@angular/core';

@Injectable()
export class DestinosApiClient {
	destinos:DestinoViaje[] =[];
	//current: Subject<DestinoViaje> = new BehaviorSubject<DestinoViaje>(null);
	constructor(private store: Store<appState>) {
	}

	add(d:DestinoViaje){
		this.store.dispatch(new NuevoDestinoAction(d));
	  //this.destinos.push(d);
	}

	// getById(id: string): DestinoViaje {
	// 	return this.destinos.filter(function(d){
	// 		return d.isSelected.toString() === id;
	// 	})[0];
	// }

	elegir(d: DestinoViaje) {
		this.store.dispatch(new ElegidoFavoritoAction(d));
		// this.destinos.forEach(x => x.setSelected(false));
		// d.setSelected(true);
		// this.current.next(d);
	}
	
	// subscribeOnChange(fn){
	// 	this.current.subscribe(fn);
	// }
}