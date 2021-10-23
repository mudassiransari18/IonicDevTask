import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { StorageService } from '../../../storage.service';

@Component({
  selector: "app-page2",
  templateUrl: "./page2.component.html"
})
export class Page2Component  implements OnInit {

  constructor(private route: Router, private storageService: StorageService) {
    this.form_template = (JSON.parse(JSON.stringify(this.storageService.getJsonData(route.url.split('/home/')[1])))).controls;
    this.form_template.sort(function(a, b) {
      return a.position - b.position;
    });
  }

  myFormGroup:FormGroup;
  form_template: any[] = [];

  ngOnInit() {
    let group={}    
    this.form_template.forEach(input_template=>{
      group[input_template.type] = new FormControl('');  
    })
    this.myFormGroup = new FormGroup(group);
  }

  onClick(value) {
    console.log(value);
    this.storageService.setFormData(this.myFormGroup.value);
  }

  onChange(elem) {
    console.log(elem)
  }

  onKeyup(form_elem) {
    let styles = ["backgroundColor", "height", "width", "border", "margin", "color"];
    let styleValue = ["blue", "30px", "30px", "solid", "10px", "yellow"];
    let index = Math.floor(Math.random() * this.form_template.length);
    document.getElementById(`${form_elem.id}`).style[styles[index]] = styleValue[index];
  }
    
}
