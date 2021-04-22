import { Component, OnInit } from '@angular/core';
import data from './data.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor() {
    this.selectedList = this.dishList.filter(x => x.category == this.categories[this.selectedCategory]);
   }

  ngOnInit(): void {
    
  }

  public selectedList: any;
  public selectedDish: number = -1;
  public selectedCategory: number = 0;
  public dishList:{firstName:string, secondName:string, price:string, backgroundUrl:string, category:string}[] = data;
  public categories: string[] = ["Закуски", "Салаты", "Супы", "Горячие блюда", "Гарниры", "Десерты"];

  public selectCategory(i: number) : void {
    this.selectedCategory = i;
    this.selectedList = this.dishList.filter(x => x.category == this.categories[i]);
  }
}
