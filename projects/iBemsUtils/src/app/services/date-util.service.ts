import { Injectable } from '@angular/core';
import { formatDate } from '@angular/common';
import { add, subtract } from 'add-subtract-date';
import { DateEnum } from '../enums/date-enum.enum';
import * as moment from 'moment';

/*
* Preparing Custom Date range with Desired date format.
* * */
@Injectable({
  providedIn: 'root'
})
export class DateUtilService {

  constructor() { }
  /*
  * Method Name : dateFormatter
  * Purpose : Converts the date in to desired dateFormat
  * inputDate  : Date for which format needs to be applied
  * dateFormat  : Desired date format
  * locale  : locale
  * Output  : converted date format
  */
  dateFormat(inputDate, dateFormat, locale) {
    const formattedDate = formatDate(inputDate, dateFormat, locale);
    return formattedDate;
  }

  /*
* Method Name : currentDate
* Purpose : Converts the date in to desired format
* dateFormat  : Desired date format
* locale  : locale
* Output  : converted date format
* */
  currentDate(dateFormat, locale) {
    return this.dateFormat(new Date(), dateFormat, locale);
  }
  /*
 * Method Name : getDateRange
 * Purpose : Converts the date in to desired format
 * inputDate  : Date for which format needs to be applied
 * dateFormat  : Desired date format
 * locale  : locale
 * addSubtract : Desired DateRange in either subtract or Add to current date
 * value : DateRange in either numbermonths,days or year
 * type : DateRange in either months,days or year
 * Output  : Return desired date range.
 * */
  getDateRange(inputDate, value, type, dateFormat, locale, addSubtract) {
    let diffdate = this.diffdate(inputDate, value, type, addSubtract);
    return this.dateFormat(diffdate, dateFormat, locale);
  }

  public diffdate(inputDate, value, type, addSubtract): Date {
    let date: any;
    if (inputDate == "" || inputDate == undefined) {
      date = new Date();
    } else {
      date = new Date(inputDate);
    }
    if (addSubtract == DateEnum.DATERANGEIN_SUBTRACT) {
      const daysBack = subtract(date, value, type);
      return daysBack;
    } else if (addSubtract == DateEnum.DATERANGEIN_ADD) {
      const daysBack = add(date, value, type);
      return daysBack;
    }
  }

  /*
* Method Name : returnDateByStartOfMonth
* Purpose : Converts the date in to desired format
* inputDate  : Date for which  needs to be format
* dateFormat  : Desired date format
* Output  : Return desired date range.
* */
  returnDateByStartOfMonth(selectedDate, presentdformat, dateFormat) {
    return moment(selectedDate, presentdformat).startOf('month').format(dateFormat);
  }

  /*
* Method Name : returnDateByStartOfMonth
* Purpose : Converts the date in to desired format
* inputDate  : Date for which  needs to be format
* dateFormat  : Desired date format
* Output  : Return desired date range.
* */
  returnDateByEndOfMonth(selectedDate, presentdformat, dateFormat) {
    return moment(selectedDate, presentdformat).endOf('month').format(dateFormat);
  }


  formatgivendate(selectedDate, presentdformat, dateFormat) {
    return moment(selectedDate, presentdformat).format(dateFormat);
  }


  /*
  * Method Name : getMonthFromDateUtil1
  * Purpose : Returns month name with respect to month number
  * inputDate  : month number
  * Output  : Return month name.
  * */
  getMonthFromDateUtil1(m) {
    switch (m) {

      case "01": return "Jan";
      case "02": return "Feb";
      case "03": return "Mar";
      case "04": return "Apr";
      case "05": return "May";
      case "06": return "Jun";
      case "07": return "Jul";
      case "08": return "Aug";
      case "09": return "Sep";
      case "10": return "Oct";
      case "11": return "Nov";
      case "12": return "Dec";
      case 1: return "Jan";
      case 2: return "Feb";
      case 3: return "Mar";
      case 4: return "Apr";
      case 5: return "May";
      case 6: return "Jun";
      case 7: return "Jul";
      case 8: return "Aug";
      case 9: return "Sep";
      case 10: return "Oct";
      case 11: return "Nov";
      case 12: return "Dec";

    }

  }

  /*
   * Method Name : getNoOfDaysOfRespectiveMonth
   * Purpose : returmns number of days in month
   * inputDate  : year and month number
   * Output  : Return nuber of days in month.
   * */
  getNoOfDaysOfRespectiveMonth(yyyy, m) {
    let monthToCheck = yyyy + '-' + m
    return moment(monthToCheck, 'yyyy-MM').daysInMonth();
  }

  weekEnd_HolidayColorImpl_Daily(startDate, endDate, ColorListWithDate) {
    let holidayDescription: any;
    let valueAxis: any;
    let category: any;
    let toCategory: any;
    let balloonText: any;
    let fillColor: any;
    let fillAlpha: any;
    let lineAlpha: any;
    let tickLength: any;
    let guides: any = [];
    let guideJson: any;
    let start = new Date(parseInt(startDate.substring(6, 10)), parseInt(startDate.substring(3, 5)) - 1, parseInt(startDate.substring(0, 2)));
    let end = new Date(parseInt(endDate.substring(6, 10)), parseInt(endDate.substring(3, 5)) - 1, parseInt(endDate.substring(0, 2)));
    let bool = false;
    while (start <= end) {
      balloonText = "";
      let newdate = start.getFullYear() + "/"
        + ((start.getMonth() + 1) < 10 ? '0' : '')
        + (start.getMonth() + 1) + "/"
        + (start.getDate() < 10 ? '0' : '') + start.getDate();
      for (let i = 0; i < ColorListWithDate.length; i++) {
        let key = ColorListWithDate[i];
        if (key.hasOwnProperty("Date")) {
          if (ColorListWithDate[i].Date == newdate) {
            bool = true;
            holidayDescription = ColorListWithDate[i].holidayDescription;
          }
        }
      }

      if (((start.getDay() == 0 || start.getDay() == 6) || bool) && ColorListWithDate.length > 0) {

        valueAxis = "valueAxis1";
        let startDate1: any = (start.getDate() < 10 ? '0' : '') + start.getDate();

        let month = start.getMonth() + 1;
        let year = start.getFullYear();
        let textmonth = this.getMonthFromDateUtil1(month);

        let startdate = startDate1 + "-" + textmonth + "-" + year
        category = startdate;

        let endDate1: any = (start.getDate() < 10 ? '0' : '') + start.getDate();
        let enddate = endDate1 + "-" + textmonth + "-" + year
        toCategory = enddate;
        lineAlpha = 0;
        if (bool) {
          balloonText = holidayDescription;
          fillColor = ColorListWithDate[0].holidayId;

        } else {
          fillColor = ColorListWithDate[0].weekendId;
        }
        fillAlpha = 1;
        tickLength = 0;

        bool = false;

        guideJson = {
          "valueAxis": valueAxis,
          "category": category,
          "lineAlpha": lineAlpha,
          "toCategory": toCategory,
          "balloonText": balloonText,
          "fillColor": fillColor,
          "fillAlpha": fillAlpha,
          "tickLength": tickLength,
          "expand": true
        }
        guides.push(guideJson);
      }
      let newDate = start.setDate(start.getDate() + 1);
      start = new Date(newDate);
    }

    return guides;
  }

  chartClickEvent_Weekly(selectedDate) {
    let dd = selectedDate.substring(0, 2);
    let mm = selectedDate.substring(3, 5);
    let yyyy = selectedDate.substring(6, 10);

    let date1 = moment(dd + mm + yyyy, "DDMMYYYY").startOf('week').format("DDMMYYYY");
    let date2 = moment(dd + mm + yyyy, "DDMMYYYY").endOf('week').format("DDMMYYYY");

    return date1 + ";" + date2;
  }
  returnWeekendConsumptionTrend(startDate, endDate, ColorListWithDate) {
    let start = new Date(parseInt(startDate.substring(6, 10)), parseInt(startDate.substring(3, 5)) - 1, parseInt(startDate.substring(0, 2)));
    let end = new Date(parseInt(endDate.substring(6, 10)), parseInt(endDate.substring(3, 5)) - 1, parseInt(endDate.substring(0, 2)));
    let holidayDescription = "";
    let guideJsonArray = [];
    let bool = false;
    while (start <= end) {
      holidayDescription = "";
      let newdate = start.getFullYear() + "/" + ((start.getMonth() + 1) < 10 ? '0' : '') + (start.getMonth() + 1) + "/" + (start.getDate() < 10 ? '0' : '') + start.getDate();

      for (let i = 0; i < ColorListWithDate.length; i++) {
        if (ColorListWithDate[i].Date == newdate) {
          bool = true;
          holidayDescription = ColorListWithDate[i].holidayDescription;
        }
      }

      if (((start.getDay() == 0 || start.getDay() == 6) || bool) && ColorListWithDate.length > 0) {
        let guidesJson = {};
        guidesJson["valueAxis"] = "v1";
        let startDate1 = new Date(start.getFullYear(), start.getMonth(), start.getDate(), 0, 0, 0);
        guidesJson["date"] = startDate1;
        let endDate1 = new Date(start.getFullYear(), start.getMonth(), start.getDate(), 23, 59, 59);
        guidesJson["toDate"] = endDate1;

        guidesJson["lineAlpha"] = 0;
        if (bool) {

          guidesJson["balloonText"] = holidayDescription;
          guidesJson["fillColor"] = ColorListWithDate[0].holidayId;
        } else {
          guidesJson["fillColor"] = ColorListWithDate[0].weekendId;
        }
        guidesJson["fillAlpha"] = 1;
        guidesJson["tickLength"] = 0;
        guidesJson["expand"] = true;
        guideJsonArray.push(guidesJson);
        bool = false;

      }
      let newDate = start.setDate(start.getDate() + 1);
      start = new Date(newDate);
    }

    return guideJsonArray;
  }

  /*
   * Method Name : getPickerFormattedDate
   * Purpose : Converts the date in to desired format
   * inputDate  : date
   * Output  : date in desired format.
   * */
  getPickerFormattedDate(selectedDate) {
    let dd = selectedDate.substring(0, 2);
    let mm = selectedDate.substring(2, 4);
    let yyyy = selectedDate.substring(4, 8);

    let dateFormatted = mm + "-" + dd + "-" + yyyy;
    return dateFormatted;
  }


}
