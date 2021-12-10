import { Component } from '@angular/core';
import { Statistique } from './models/statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
public tabStat: Statistique[] = [    
    new Statistique('rugbysfezad-10-efqfe', 'Rugby Statistique', '42G'),
    new Statistique('ffdfs-789-htrey-yjrher', 'Tennis', '54F'),
    new Statistique('gdggaeqq-77-grqr', 'Aikido', '31A')
  ];

constructor() {
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
