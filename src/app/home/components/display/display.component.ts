import { Component } from "@angular/core";
import { StorageService } from '../../../storage.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-display",
  templateUrl: "./display.component.html"
})
export class DisplayComponent {

  constructor(private route: Router, private storageService: StorageService) { 
    this.responseObj = this.storageService.formObj;
    console.log(this.responseObj)
  }

  responseObj;

  onClick() {
    this.route.navigate(['/home/1'])
  }
  
    
}
