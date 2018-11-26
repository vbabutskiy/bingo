import { NgModule } from '@angular/core';
import { MATERIAL_COMPONENTS } from './material-components.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';


const sharedComponents = [

];

const sharedDirectives = [

];

const sharedPipes = [

];

const modules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,

  MATERIAL_COMPONENTS,
  FlexLayoutModule,
];

@NgModule({
  declarations: [
    ...sharedComponents,
    ...sharedDirectives,
    ...sharedPipes,
  ],
  imports: [
    ...modules,
  ],
  exports: [
    ...modules,
    ...sharedComponents,
    ...sharedDirectives,
    ...sharedPipes,
  ]
})
export class SharedModule { }
