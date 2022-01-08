import { Component, OnInit, ViewChild } from '@angular/core';
import * as echarts from 'echarts';

type EChartsOption = echarts.EChartsOption;

@Component({
  selector: 'school-intelligent-security-system-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  @ViewChild('echartTotal') echartTotal: any;

  ngOnInit() {
    this.pie();
  }
  pie(): void {
    const myChart = echarts.init(this.echartTotal);
    const option = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '15%',
        right: 'right'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['50%', '60%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '20',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1048, name: '初中' },
            { value: 735, name: '小学' },
            { value: 580, name: '六年级' }
          ]
        }
      ]
    };
    myChart.setOption(option);
  }

}
