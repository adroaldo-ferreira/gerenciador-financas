import { Routes } from '@angular/router';
import { JurosCompostos } from './page/juros-compostos/juros-compostos';
import { Price } from './page/price/price';
import { Sac } from './page/sac/sac';

export const routes: Routes = [
  {
    path: '',
    component: JurosCompostos,
  },
  {
    path: 'price',
    component: Price,
  },
  {
    path: 'sac',
    component: Sac,
  },
];
