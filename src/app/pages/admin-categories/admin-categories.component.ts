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
    category?: string;
    image?: string;
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

}
