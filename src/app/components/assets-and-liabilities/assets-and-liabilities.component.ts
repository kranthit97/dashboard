import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

Chart.defaults.datasets.bar.barThickness = 45;
@Component({
  selector: 'app-assets-and-liabilities',
  templateUrl: './assets-and-liabilities.component.html',
  styleUrls: ['./assets-and-liabilities.component.scss']
})
export class AssetsAndLiabilitiesComponent implements OnInit {
  public chart: any;
  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart("MyChart", {
      type: 'bar', 
      data: {
        labels: ['Assets', 'Liabilities'],
        datasets: [{
          label: 'AssetsAndLiabilities',
          data: [950000, 250000],
          backgroundColor:[
            '#6c6cdd',
            'limegreen'
          ]
        }]
      },
      options: {
        aspectRatio: 1.5,
        plugins: {
          legend: {
             display: false
          }
       }
      }
    });
  }

}
