import { Component, ViewChild, Input, OnInit, AfterViewInit, ViewEncapsulation, ElementRef } from '@angular/core';

import * as $ from 'jquery';

import { jqxTreeComponent } from 'jqwidgets-scripts/jqwidgets/jqxtree';
import { jqxDropDownButtonComponent } from 'jqwidgets-scripts/jqwidgets/jqxdropdownbutton';
import { jqxexpander } from 'jqwidgets-scripts/jqwidgets/jqxexpander';
import { jqxMenuComponent } from 'jqwidgets-scripts/jqwidgets/jqxmenu';
import { EntityTree } from '../modal/entity-tree.model';
declare var $: any;

@Component({
  selector: 'app-entitytree',
  templateUrl: './entitytree.component.html',
  styleUrls: ['./entitytree.component.css']
})
export class EntitytreeComponent implements OnInit, AfterViewInit {
  searchText: any;
  treeOnSelectId: any;
  onRightClickTrendPoint: any;
  trendPoint: any;
  contextmenuItems: any;
  treeresponse: any;
  isContextMenuAvailable: boolean;
  @ViewChild('treeReference', { static: false }) tree: jqxTreeComponent;
  @ViewChild('myMenu', { static: false }) myMenu: jqxMenuComponent;
  @Input() entityTree: EntityTree;
  dragStartTree(event: any): void {
      // this.onDragStart(event);
  };

  dragStart(item): boolean {
      if (item.hasOwnProperty('id')) {
          let type = item.id;
          type = type.split('-')[0];
          if (type !== 'P') {
              return false;
          }
      }
  };
  dragEnd(item, dropItem, args, dropPosition, tree): boolean {
      if (dropItem !== undefined) {
          let items = item.id;
          let type = items.split('-')[0];
          if (type !== 'P') {
              return false;
          }
      }
  };
  //method to Expand tree on searching items in tree
  expandTree() {
      if (this.searchText.trim() !== '' && this.searchText.trim() !== undefined && this.searchText.trim().length > 1) {
          let itm = this.tree.getItems();
          for (let i = 0; i < itm.length; i++) {
              let str: any = itm[i].label.toLowerCase();
              if (str.includes(this.searchText.toLowerCase())) {
                  this.tree.expandItem(itm[i].parentElement);
                  this.tree.selectItem(itm[i]);
              }
          };
      } else if (this.searchText.trim() === '' && this.searchText.trim() !== undefined && this.searchText.trim().length === 0) {
          this.tree.collapseAll();
      }
  }
  //method to search items in tree
  treeSerach() {
      setTimeout(() => {
          this.expandTree();
      }, 2500);
  }

  constructor() { }
  ngOnInit() {
      this.treeresponse = this.entityTree.EntityTreeResponse
      this.isContextMenuAvailable = this.entityTree.contextMenuAvailable;
      if (this.isContextMenuAvailable) {
          this.contextmenuItems = this.entityTree.contextMenuData;
      }
  }
  ngAfterViewInit() {
      $('.jqx-widget-header').hide();
      setTimeout(() => {
          this.tree.selectItem(null);
      });
  }
  myTreeOnInitialized(): void {
      document.addEventListener('contextmenu', event => {
          this.tree.getItems();
          event.preventDefault();
          this.trendPoint = event.target;
          let target = $(event.target).parents([0]);
          this.trendPoint = this.trendPoint.innerText;
          this.treeOnSelectId = target[0].id;
          this.onRightClickTrendPoint = target[0].id;
          if ((<Element>event.target).classList.contains('jqx-tree-item')) {
              this.tree.selectItem(event.target);
              let scrollTop = window.scrollY;
              let scrollLeft = window.scrollX;

              this.treeOnSelectId = this.treeOnSelectId.split('-')[0];
              if (this.treeOnSelectId === 'P') {
                  this.myMenu.open(event.clientX + 5 + scrollLeft, event.clientY + 5 + scrollTop);
              } else {
                  this.myMenu.close();
              }
              return false;
          } else {
              this.myMenu.close();
          }
      });
  }


  myMenuOnItemClick(event: any): void {
      let item = event.currentTarget.innerText;
      let selectedItem = this.tree.getSelectedItem();

      switch (item) {
          // case "Trend":

          //     this.getGraphTrendfromclick(this.onRightClickTrendPoint);
          //     this.closeContextMenu();
          //     break;
      }
  };
}

