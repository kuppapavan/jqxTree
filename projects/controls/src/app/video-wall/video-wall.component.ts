
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { VideoWall } from '../modals/controls.modal';
import { NotificationService } from 'projects/iBemsUtils/src/app/services/notification.service';
import { HttpapiService } from '../services/httpapi.service';
import { HttpAPI } from '../services/httpapi.enum';
import { LoggerService } from 'projects/iBemsUtils/src/app/services/logger.service';
import { ControlConstants } from '../services/controlconstants.enum';


@Component({
  selector: 'controls-video-wall',
  templateUrl: './video-wall.component.html',
  styleUrls: ['./video-wall.component.css']
})
export class VideoWallComponent implements OnInit {
  title = ControlConstants.VIDEWALL_HEADING;
  displayDateRangeOptions = false;
  dateRangeTab = 'Year';
  videoWallModal: VideoWall = {
    tbldashboardFrequencyId: null,
    tbldashboardStatust: null,
    tbldashboardText: null
  };

  videoWallData: VideoWall[] = [];
  videowallForm: FormGroup;
  videowallsubmitted = false;
  videoWallSaveORUpdate = false;

  constructor( private formBuilder: FormBuilder,
               private notify: NotificationService,
               private apiService: HttpapiService,
               private logger: LoggerService ) {
                 this.apiService.baseURL;
           }

  ngOnInit() {

    this.videowallForm = this.formBuilder.group({
      frequency: ['', Validators.required],
      Status: ['', [Validators.required]],
      dashboardtext: ['', Validators.required],
      tblId: ['']
      });


  }


  selectedRowID($event) {
      const rowData = $event.data;
      const rowDatatype = $event.typeOfData;

      if (rowDatatype === 'edit') {
        this.videowallForm.patchValue({
          frequency: rowData.tbldashboardFrequencyId,
          Status: rowData.tbldashboardStatust,
          dashboardtext: rowData.tbldashboardText,
          tblId: rowData.tblId
        });
        console.log(this.videowallForm.value);
        this.videoWallSaveORUpdate = true;
      } else {
          this.deleteRowData(rowData.tblId);
      }

  }

  deleteRowData(rowID) {

    const updateURLL = HttpAPI.DELETE_VIDEOWALL + '/' + rowID;

    this.apiService.getRequest(updateURLL).subscribe( result => {
             if(result.status === 'true') {
                this.notify.showSuccess('Pavan' + ControlConstants.DATA_DELETED);
              }
          },
          error => {
                this.logger.logSystemError(error);
                this.notify.showError(error);
          });
  }

  clearFormData() {
    this.videowallForm.reset;
  }

  updateVideoWallData() {
      console.log('In Update data');
      console.log(this.videowallForm.value);
      console.log(HttpAPI.UPDATE_VIDEOWALL);
      const updateURL = HttpAPI.UPDATE_VIDEOWALL + '/' + this.videowallForm.value.tblId;
      this.apiService.postRequest(updateURL, this.videowallForm.value).subscribe( result => {
         this.logger.logDebug(result);
    },
    error => {
         this.logger.logSystemError(error);
         this.notify.showError(error);
    });


  }

      // convenience getter for easy access to form fields
      get f() { return this.videowallForm.controls; }

  videowallSubmit() {

    this.videowallsubmitted = true;

    // stop here if form is invalid
    if (this.videowallForm.invalid) {
             this.logger.logSystemError(this.videowallForm.errors);
             this.notify.showError(this.videowallForm.errors);
             return false;
    } else {
      if (!this.videoWallSaveORUpdate) {
        this.submitVideoWallData();
      } else {
        this.updateVideoWallData();
      }
    }
  }

  submitVideoWallData() {
        this.apiService.postRequest(HttpAPI.SUBMIT_VIDEOWALL, this.videowallForm).subscribe( result => {
           this.logger.logDebug(result);
      },
      error => {
           this.logger.logSystemError(error);
           this.notify.showError(error);
      });
  }


  }


