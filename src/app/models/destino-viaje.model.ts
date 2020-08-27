export class DestinoViaje {
	selected:boolean;
	servicios:string[];
	constructor(public nombre:string, public imagenUrl:string, public votes: number =0) {
       this.servicios = ['pileta', 'desayuno'];
	}
	isSelected(): boolean {
        return this.selected;
    }

    setSelected(s: boolean) {
        this.selected = s;
    }

    voteUp(){
        this.votes ++;
    }
    
    voteDown(){
        this.votes --;
    }
}