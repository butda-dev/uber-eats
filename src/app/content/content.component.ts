import { Component, OnInit } from '@angular/core';
import data from './data.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public snacksList:{firstName:string, secondName:string, price:string, backgroundUrl:string}[] = data;
}
