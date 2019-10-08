import { Directive, Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { KeyValueDiffer, KeyValueDiffers, ElementRef, OnDestroy, DoCheck } from '@angular/core';
import { DaterangepickerConfigService } from '../../services/daterangepicker-config.service';
import { DaterangepickerConstantService } from '../../services/daterangepicker-constant.service';
import * as $ from "jquery";
import * as moment from 'moment';
import 'bootstrap-daterangepicker';
@Directive({
    selector: '[daterangepicker]',
    providers: [DaterangepickerConfigService]
})
export class IBemsDateUtilComponent implements AfterViewInit, OnDestroy, DoCheck {


    private activeRange: any;
    private targetOptions: any = {};
    private _differ: any = {};
    public datePicker: any;

    // daterangepicker properties
    @Input() options: any = {};

    // daterangepicker events
    @Output() selected = new EventEmitter();
    @Output() cancelDaterangepicker = new EventEmitter();
    //@Output() applyDaterangepicker = new EventEmitter();
    @Output() hideCalendarDaterangepicker = new EventEmitter();
    @Output() showCalendarDaterangepicker = new EventEmitter();
    @Output() hideDaterangepicker = new EventEmitter();
    @Output() showDaterangepicker = new EventEmitter();

    constructor(
        private input: ElementRef,
        private config: DaterangepickerConfigService,
        private differs: KeyValueDiffers,
    ) {
        // this.config.settings.locale = { format: 'YYYY/MM/DD' };
        this.config.settings.locale = {
            format: 'DD/MM/YYYY',
            startDayOfWeek: DaterangepickerConstantService.startDayOfWeek
        };
        this.config.settings.ranges = {
            'Today': [moment(), moment(), 'day'],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days'), 'day'],
            'Last 7 Days': [moment().subtract(7, 'days'), moment().subtract(1, 'days'), 'day'],
            // 'Last 30 Days': [moment().subtract(30, 'days'), moment().subtract(1, 'days'), 'day'],
            'This Week': [moment().startOf('week'), moment().endOf('week'), 'week'],
            'Last Week': [moment().subtract(1, 'week').startOf('week'), moment().subtract(1, 'week').endOf('week'), 'week'],
            // 'Last 4 Weeks': [moment().subtract(4, 'week').startOf('week'), moment().subtract(1, 'week').endOf('week'), 'week'],
            //'Last 12 Weeks': [moment().subtract(12, 'week').startOf('week'), moment().subtract(1, 'week').endOf('week'), 'week'],
            'This Month': [moment().startOf('month'), moment(), 'month'],
            // 'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month'), 'month'],
            // 'Last 3 Months': [moment().subtract(3, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month'), 'month'],
            // 'Last 6 Months': [moment().subtract(6, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month'), 'month']
        };

        this._differ['options'] = differs.find(this.options).create();
        this._differ['settings'] = differs.find(this.config.settings).create();

    }

    ngAfterViewInit() {
        this.config.embedCSS();
        this.render();
        this.attachEvents();
    }

    render() {
        this.targetOptions = Object.assign({}, this.config.settings, this.options);

        // cast $ to any to avoid jquery type checking
        (<any>$(this.input.nativeElement)).daterangepicker(this.targetOptions, this.callback.bind(this));

        this.datePicker = (<any>$(this.input.nativeElement)).data('daterangepicker');
        this.activeRange = null
    }

    attachEvents() {
        $(this.input.nativeElement).on('cancel.daterangepicker',
            (e: any, picker: any) => {
                let event = { event: e, picker: picker };
                this.cancelDaterangepicker.emit(event);
            }
        );

        $(this.input.nativeElement).on('hideCalendar.daterangepicker',
            (e: any, picker: any) => {
                let event = { event: e, picker: picker };
                this.hideCalendarDaterangepicker.emit(event);
            }
        );

        $(this.input.nativeElement).on('showCalendar.daterangepicker',
            (e: any, picker: any) => {
                let event = { event: e, picker: picker };
                this.showCalendarDaterangepicker.emit(event);
            }
        );

        $(this.input.nativeElement).on('hide.daterangepicker',
            (e: any, picker: any) => {
                let event = { event: e, picker: picker };
                this.hideDaterangepicker.emit(event);
            }
        );

        $(this.input.nativeElement).on('show.daterangepicker',
            (e: any, picker: any) => {
                let event = { event: e, picker: picker };
                this.showDaterangepicker.emit(event);
            }
        );
    }

    private callback(start?: any, end?: any, selectedRange?: any): void { //type?: any,  type: type,

        this.activeRange = {
            start: start,
            end: end,
            selectedRange: selectedRange
        }

        this.selected.emit(this.activeRange);

    }

    destroyPicker() {
        try {
            (<any>$(this.input.nativeElement)).data('daterangepicker').remove();
        } catch (e) {
            console.log(e.message);
        }
    }

    ngOnDestroy() {
        this.destroyPicker();
    }

    ngDoCheck() {
        let optionsChanged = this._differ['options'].diff(this.options);
        let settingsChanged = this._differ['settings'].diff(this.config.settings);

        if (optionsChanged || settingsChanged) {
            this.render();
            this.attachEvents();
            if (this.activeRange && this.datePicker) {
                this.datePicker.setStartDate(this.activeRange.start);
                this.datePicker.setEndDate(this.activeRange.end);
            }
        }
    }
}
