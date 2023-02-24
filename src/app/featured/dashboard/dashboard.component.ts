import { Component, OnInit, ViewChild } from '@angular/core';
import { AccumulationChartComponent, AccumulationChart, IAccAnimationCompleteEventArgs, AccPoints, IAccTextRenderEventArgs, IAccLoadedEventArgs, AccumulationTheme } from '@syncfusion/ej2-angular-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  constructor() {
    this.legendSettings = {
   visible: true, position: 'Right' 
   };
 }
  ngOnInit(): void {
    this.chartData = [
      { zone: 'jimma' ,accident: 19 },
      { zone: 'adama' ,accident: 60 },
      { zone: 'borena' ,accident: 20 },
      { zone: 'Zewaye' ,accident: 30 },



  ];
  this.primaryXAxis = {
      valueType: 'Category'
  };
  }
  public data: Object[] = [{ x: "OverSpeed", y: 60 }, { x: "No belt", y: 40 },{ x: "Phone while driving", y: 60 }, { x: "Red light", y: 40 },{ x: "Drink drive", y: 60 }];
  @ViewChild("pie")
  public pie: AccumulationChartComponent | AccumulationChart;
  public execute = false;
  public count = 0;
  public primaryXAxis: Object;
  public chartData: Object[];
  public legendSettings: Object;
  palette = [
    "#9EDDC0",
    "#5CCC99",
    "#1AA968",
    "#068D45",
    "#006F3D"
  ];

  public dataLabel: Object = {
    visible: true,
    position: "Inside",
    name: "${point.y}",
    font: {
      color: "white",
      fontWeight: "Bold",
      size: "14px"
    }
  };

  public resized(args): void {
    this.pie.refresh();
  }


}
