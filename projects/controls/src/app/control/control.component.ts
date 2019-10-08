import { Component, OnInit } from '@angular/core';
import { EntityTree } from 'projects/iBemsUtils/src/app/htmlcomponents/modal/entity-tree.model';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
  count:any;
  treeResponseValue =
  [
    {
      icon: "assets/images/E.png",
      id: "E-1",
      label: "iBEMS",
      type: "Entity",
      expanded: false,
      items:
        [
          {
            "icon": "assets/images/E.png", "label": "LTR", "id": "E-911", "type": "Entity", items: [
              {
                "icon": "assets/images/G.png", "label": "Gateway", "id": "G-912", "type": "Gateway", items: [
                  {
                    "icon": "assets/images/GR.png", "id": 478, "label": "Building", "type": "Group", "items": [
                      {
                        "icon": "assets/images/P.png", "originalEvent": "PCounter_Building_477_1550809889447~OutCount1", "id": "P-478~26913-PCounter_Building_477_1550809889447~OutCount1", "label": "Point", "type": "Point"
                        , "value": "PCounter_Building_477_1550809889447~OutCount1"
                      }]
                  }]
              }]
          }

        ]
    },
  ];


contextmenuItemsValues = [
  { label: 'Trend' }, { label: 'Unselect' }, { label: 'Delta' }, { label: 'Select Graph Type' },
  { label: 'Apply Formula' }, { label: 'Change Default Axis Title' }, { label: 'Choose Axis' },
  { label: 'Select Color' }, { label: 'Duplicate Point' }, { label: 'Set Line Thickness' },
  { label: 'Choose Scale' }
];

constructor() {
 }
 ngOnInit(){
 }
 entityTreeValue:EntityTree = {
  EntityTreeResponse: this.treeResponseValue,
  contextMenuAvailable: true,
  contextMenuData: this.contextmenuItemsValues
}

displayCounter(count) {
  this.count = count;
  console.log(count)
}
}
