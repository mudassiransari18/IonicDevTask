import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';
import { Page1Component } from './components/page1/page1.component'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private route: Router, private storageService: StorageService) {}

  jsonData = this.storageService.jsonData;

  onPageSelect(data) {
    this.route.navigate([`home/${data.pageid}`]);
  }

}
