import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  item: FirebaseObjectObservable<any>;
  newNode = "";
  constructor(db: AngularFireDatabase) {
    this.item = db.object('/node');
  }

  updateNode(){
    console.log(this.newNode)
    this.item.set({ name: this.newNode});
  }
}
