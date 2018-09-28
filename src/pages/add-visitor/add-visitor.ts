import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Visitor } from '../../model/visitor';
import { AngularFireDatabase} from 'angularfire2/database';

/**
 * Generated class for the AddVisitorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-visitor',
  templateUrl: 'add-visitor.html',
})
export class AddVisitorPage {

  visitor = {} as Visitor;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private afDb: AngularFireDatabase) {
  }

  addVisitor(visitor: Visitor){
    this.afDb.list('visitor')
    .push(visitor)
    .then(r => console.log(r))
  }

}
