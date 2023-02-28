import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

Chart.defaults.datasets.bar.barThickness = 45;
@Component({
  selector: 'app-sweeps-in-gbp',
  templateUrl: './sweeps-in-gbp.component.html',
  styleUrls: ['./sweeps-in-gbp.component.scss']
})
export class SweepsInGBPComponent implements OnInit {
  public chart: any;
  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart("MyChartGBP", {
      type: 'bar', 
      data: {
        labels: [['Global Sweep', 'Structure'], ['Uk Hybrid', 'Structure'], ['Global USA', 'Structure'], ['India Sweep', 'Structure']],
        datasets: [{
          label: 'GBP',
          data: [6500, 4500, 3500, 2500],
          backgroundColor:[
            '#6c6cdd'
          ]
        }]
      },
      options: {
        aspectRatio: 1.5,
        plugins: {
          legend: {
             display: false
          }
       },
       scales: {
        x: {
            ticks: {
                font: {
                    size: 10,
                }
            }
        }
    }
      }
    });
  }

}
