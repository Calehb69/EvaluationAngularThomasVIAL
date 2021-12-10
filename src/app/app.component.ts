import { Component } from '@angular/core';
import { Statistique } from './models/statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
statRugby = new Statistique(
    'rugbysfezad-10-efqfe',
    'Rugby Statistique',
    '42G'
  )
statTennis = new Statistique('ffdfs-789-htrey-yjrher', 'Tennis', '54F')
title = 'evaluationStat'
}
