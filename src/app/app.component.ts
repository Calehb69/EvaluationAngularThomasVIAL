import { Component } from '@angular/core';
import { StatistiqueService } from 'src/services/statistique.service';
import { Statistique } from './models/statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tabStat!: StatistiqueService;

constructor(public statistiqueService:StatistiqueService) {
  setTimeout(() => {
    let statAikido = new Statistique(
    'gdggaeqq-77-grqr',
    'Aikido',
    '31A'
  )
this.tabStat.push(statAikido);
}, 2000)}
  title = 'evaluationStat'
}
