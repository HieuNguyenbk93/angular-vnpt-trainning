import { Component, OnInit } from '@angular/core';
import {CategoryModel} from '../models/CategoryModel';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent implements OnInit {

  model:CategoryModel = new CategoryModel();

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
  }

  submitData(){
    if (this.model.formGroup.valid){
      this.categoryService.add({
        "categoryName": this.model.categoryName
      }).subscribe((res)=> {

      }, err => {
        alert('Them ko thanh cong');
      }, ()=> {
        alert('Them moi thanh cong');
        this.model.categoryName = '';
      });
    }
  }

}
