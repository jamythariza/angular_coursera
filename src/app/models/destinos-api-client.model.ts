import { DestinoViaje } from './destino-viaje.model';
import { Subject, BehaviorSubject } from 'rxjs';
import { Store } from '@ngrx/store';
import { appState } from '../app.module';
import { NuevoDestinoAction, ElegidoFavoritoAction } from './destinos-viajes-state.model';
import { Injectable } from '@angular/core';

@Injectable()
export class DestinosApiClient {
	destinos:DestinoViaje[] =[];
	constructor(private store: Store<appState>) {
	}

	add(d:DestinoViaje){
		this.store.dispatch(new NuevoDestinoAction(d));
	}

	getById(id: String): DestinoViaje {
        return this.destinos.filter((d) => { return d.id.toString() == id; })[0]

	}

	getAll(): DestinoViaje[] {
        return this.destinos;

	}
	
	elegir(d: DestinoViaje) {
		this.store.dispatch(new ElegidoFavoritoAction(d));
	}
}