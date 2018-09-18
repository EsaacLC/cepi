import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InserirAlunoPage } from './inserir-aluno';

@NgModule({
  declarations: [
    InserirAlunoPage,
  ],
  imports: [
    IonicPageModule.forChild(InserirAlunoPage),
  ],
})
export class InserirAlunoPageModule {}
