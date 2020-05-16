import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.page.html',
  styleUrls: ['./chart.page.scss'],
})
export class ChartPage implements OnInit {

  @ViewChild('barCanvas', {static: true}) barCanvas: ElementRef;
  private barChart:Chart;

  ngOnInit() {
    this.createChart();

    this.storageService.getChartData().then(data => {
      for (let i of data[0]) {
        this.dataforchart.push(i);
      }
      for (let i of data[1]) {
        this.labels.push(i);
      }
    })
    
   
  }
  chartData = [];
  dataforchart = [];
  chartType="bar";
  labels= [];
  sales_quantity: number = 0;
  sales_date: string = "2019-10-01T15:43:40.394Z";

  backgroundcolors = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 225, 0.2)',
    'rgba(255, 159, 64, 0.2)'
  ];

  bordercolors = [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 225, 1)',
    'rgba(255, 159, 64, 1)'
  ];

  chartconfig = {

    type: this.chartType,
    data: {
      labels: this.labels,
      datasets: [{
        label: '# of sales',
        data: this.dataforchart,
        backgroundColor: this.backgroundcolors,
        borderColor: this.bordercolors,
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  }

  constructor(private router: Router, private storageService: StorageService) { }

  createChart() {
    this.barChart = new Chart(this.barCanvas.nativeElement, this.chartconfig);
  }

  lineCharttype() {
    this.barChart.destroy();
    this.chartconfig.type="line";
    this.barChart = new Chart(this.barCanvas.nativeElement, this.chartconfig);
  }

  barCharttype() {
    this.barChart.destroy();
    this.chartconfig.type="bar";
    this.barChart = new Chart(this.barCanvas.nativeElement, this.chartconfig);
  }

  addItem() {

    
    let rnditem = Math.floor(Math.random()*this.barChart.data.labels.length);
    this.barChart.data.labels.push(this.sales_date.split('T')[0]);
    this.barChart.data.datasets.forEach((dataset) => {
      dataset.data.push(this.sales_quantity);

      dataset.backgroundColor.push(dataset.backgroundColor[rnditem]);

      dataset.borderColor.push(dataset.borderColor[rnditem]);
    });

    this.barChart.update();
    this.chartData = [this.dataforchart, this.labels];
    this.storageService.addChartData(this.chartData);
    
  }

  dismiss() {
    this.router.navigateByUrl('home');
  }

}
