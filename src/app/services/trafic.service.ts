import { Injectable } from '@angular/core';
import { DataPoint } from '../model/trafic.model';

@Injectable({
  providedIn: 'root'
})
export class TraficService {

  dummyTrafficData: DataPoint[] = [
    {
      id: 'd1',
      value: 433,
    },
    {
      id: 'd2',
      value: 260,
    },
    {
      id: 'd3',
      value: 290,
    },
    {
      id: 'd4',
      value: 410,
    },
    {
      id: 'd5',
      value: 397,
    },
    {
      id: 'd6',
      value: 488,
    },
    {
      id: 'd47',
      value: 589,
    },
  ];
  get maxTraffic() {
    return Math.max(...this.dummyTrafficData.map((data) => data.value));
  } 

}
