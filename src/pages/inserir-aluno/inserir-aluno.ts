import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Aluno } from '../../model/aluno';
import { AngularFireDatabase } from 'angularfire2/database'

/**
 * Generated class for the InserirAlunoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inserir-aluno',
  templateUrl: 'inserir-aluno.html',
})
export class InserirAlunoPage {

  aluno = {} as Aluno;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private afDb: AngularFireDatabase) {
  }

  addStudant(aluno: Aluno){
    this.afDb.list('aluno')
    .push(aluno).then(r =>console.log(r));
  }
}
