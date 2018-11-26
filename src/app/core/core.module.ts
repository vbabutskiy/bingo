import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

const coreComponents = [

];

@NgModule({
  declarations: [
    ...coreComponents,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
  ]
})
export class CoreModule { }
