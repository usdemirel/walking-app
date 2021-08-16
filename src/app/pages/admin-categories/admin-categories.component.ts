import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Categories } from 'src/app/model/categories';
import { AdCategoriesService } from 'src/app/services/ad-categories.service';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css']
})
export class AdminCategoriesComponent implements OnInit {

  categories: any;
  categoryData: {
    id?: number
    category?: string;
    image?: string;
    active?: boolean;
  }= {};
  formActive: boolean = false;

  constructor(private categoryService: AdCategoriesService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.retrieveCategories();
  }

  retrieveCategories(){
    this.categoryService.retrieveCategories().subscribe( categories => {
      this.categories = categories;
    });
  }

  toggleActive(id: number){
    this.categoryService.toggleActive(id).subscribe(data => {
      console.log("category saved: " + data.active);
      this.retrieveCategories();
    })
  }

  saveCategory(){
    console.log(this.categoryData);
    this.categoryService.saveCategory(this.categoryData).subscribe(
      data => {
        console.log("data " + data.category);
        this.formActive=false;
        this.categoryData = {};
        this.retrieveCategories();
        if(data) this.toastr.success("Saved Successfuly");

      },
      err => {
        console.log("err" + err)
        this.toastr.error("err.error.message");
      }
    )
  }

  toggleCategoryForm(){
    this.formActive = !this.formActive;
  }

  updateCategory(category: Categories){
    console.log(category)
    this.categoryData = category;
    this.formActive = true;
  }

}
