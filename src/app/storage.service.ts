import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
  constructor() { }

  formObj = [];

  jsonData = {
      "pages": [
        {
          "pageid": "1",
          "controls": [
            {
              "type": "label",
              "position": "1.1",
              "id": "lblusrname",
              "text": "User Name"
            },
            {
              "type": "textbox",
              "position": "1.2",
              "id": "txtusrname",
              "value": "",
              "validation": "email"
            },
            {
              "type": "label",
              "position": "2.1",
              "id": "lblname",
              "text": "Password"
            },
            {
              "type": "textbox",
              "position": "2.2",
              "id": "txtpassword",
              "validation": "password"
            },
            {
              "type": "checkbox",
              "position": "3.2",
              "id": "chkrmbr",
              "text": "remember"
            },
            {
              "type": "button",
              "position": "4.2",
              "id": "btnsubmit",
              "navigate": "2",
              "text": "Submit"
            }
          ]
        },
        {
          "pageid": "2",
          "controls": [
            {
              "type": "label",
              "position": "1.1",
              "id": "lblAddress",
              "text": "Address"
            },
            {
              "type": "textbox",
              "position": "1.2",
              "id": "txtAddress",
              "value": ""
            },
            {
              "type": "label",
              "position": "2.1",
              "id": "lblPhone",
              "text": "Phone"
            },
            {
              "type": "textbox",
              "position": "2.2",
              "id": "txtPhone"
            },
            {
              "type": "button",
              "position": "4.2",
              "id": "btnnext",
              "navigate": "3",
              "text": "Next"
            },
            {
              "type": "button",
              "position": "4.1",
              "id": "btncancel",
              "navigate": "1",
              "text": "Cancel"
            }
          ]
        },
        {
          "pageid": "3",
          "controls": [
            {
              "type": "label",
              "position": "1.1",
              "id": "lblAltAdress",
              "text": "Alternate Adress"
            },
            {
              "type": "textbox",
              "position": "1.2",
              "id": "txtAltAdress",
              "value": ""
            },
            {
              "type": "label",
              "position": "2.1",
              "id": "lblAltPhone",
              "text": "Alternate Phone"
            },
            {
              "type": "textbox",
              "position": "2.2",
              "id": "txtAltPhone"
            },
            {
              "type": "button",
              "position": "4.2",
              "id": "btnnext",
              "navigate": "0",
              "text": "Save"
            },
            {
              "type": "button",
              "position": "4.1",
              "id": "btncancel",
              "navigate": "2",
              "text": "Cancel"
            }
          ]
        }
      ]
  }

  getJsonData(id) {
    return this.jsonData.pages.filter(pageInfo => pageInfo.pageid == id)[0];
  }

  setFormData(value) {

    console.log('===============', this.formObj)
    this.formObj.push(value);
  }

}