import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Aluno} from '../../model/aluno';
import { AngularFireDatabase } from 'angularfire2/database';
import { InserirAlunoPage } from '../inserir-aluno/inserir-aluno';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   
  aluno = {} as Aluno;


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  goToIA(){
    this.navCtrl.push(InserirAlunoPage);
  }

}
