export interface BarGraph {
    title?: string;
    dataProvider?: any;
    graphs?: any[];
    valueAxis?: any[];
    exportParams?: any[];
    guides?: any[];
}

export interface Graphs {
  id?: string;
  valueAxis?: string;
  type?: string;
  title?: string;
  valueField?: string;
  lineAlpha?: number;
  lineColor?: string;
  fillAlpha?: number;
  balloonText?: string;
  baselineFlag ?: boolean;
}

export interface ValueAxies {
  id?: string;
  dashLength?: number;
  axisThickness?: number;
  axisAlpha?: number;
  position?: string;
  title?: string;
  minorGridEnabled?: string;
  minorGridAlpha?: number;
  axisColor?: string;
  gridAlpha?: number;
}

export interface ExportParams {
  title?: string;
  valueField?: string;
}
