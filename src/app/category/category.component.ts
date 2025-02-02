import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categories = [];
  total: number = 0;
  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    var result: any;
    this.categoryService.getList().subscribe((res)=>{
      result = res
    }, err => {
      console.log(err);
    }, () => {
      this.categories = result.object.items;
      this.total = result.object.total;
    });
  }

}
