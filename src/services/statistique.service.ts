import { Injectable } from '@angular/core';
import { Statistique } from 'src/app/models/statistique';

@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {
  push(statAikido: Statistique) {
    throw new Error('Method not implemented.');
  }
public tabStat: Statistique[] = [];
  static tabStat: any;

  constructor() {
    let statRugby = new Statistique(
    'rugbysfezad-10-efqfe',
    'Rugby Statistique',
    '42G');
    let statTennis = new Statistique(
    'ffdfs-789-htrey-yjrher',
    'Tennis',
    '54F');
    let statAikido = new Statistique(
    'gdggaeqq-77-grqr',
    'Aikido',
    '31A'
  );
  this.tabStat.push(statRugby, statTennis, statAikido);
}
}
