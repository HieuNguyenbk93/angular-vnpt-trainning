import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryModel} from '../models/CategoryModel';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent implements OnInit {

  model:CategoryModel = new CategoryModel();

  constructor(
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  getCategory(){
    /*this.router.params.subscribe((params)=>{
      this.categoryId = param.Id;
    })*/
  }

}
