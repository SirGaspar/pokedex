import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { MaterializeModule } from "angular2-materialize";
import { PokeGif } from 'pokemon-gif';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent {
  title = 'app';

  gifLink = "http://www.pokestadium.com/sprites/xy/"
  pokeId = 0
  pokeball: Boolean = false
  pokeAsync: Boolean = false
  data

  constructor(private http: Http) {

    this.getJSON().subscribe(data => this.data = data, error => console.log(error));
    setTimeout(() => {
      this.pokeAsync = true
    },300);

  }

  public getJSON(): Observable<any> {
       return this.http.get("/assets/pokedex.json")
                       .map((res:any) => res.json())
   }

   changePokeId(x){
     this.pokeId = x
   }

   closeNav(){
     $('.button-collapse').sideNav('hide');
     this.changePokeball();
   }

   changePokeball(){
     console.log(this.pokeball)
     if (this.pokeball == false){
       $(".pokeball").attr("src","/assets/images/pokeball-open.png");
       this.pokeball = true;
     } else if (this.pokeball == true){
       $(".pokeball").attr("src","/assets/images/pokeball.png");
       this.pokeball = false;
     }
   }

    ngAfterViewInit() {
      $('.tooltipped').tooltip({
        delay: 50,
        tooltip: "Altura: {{ data.pokemon[pokeId].height }}"
      });
      $('.button-collapse').sideNav({
        menuWidth: 300, // Default is 300
        edge: 'left', // Choose the horizontal origin
        closeOnClick: false, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true, // Choose whether you can drag to open on touch screens,
        onOpen: function(el) {  },
        onClose: function(el) {  },
      });

  }
}
