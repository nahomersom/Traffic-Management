import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { SidebarModule, TabModule, TreeViewModule } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule, CheckBoxAllModule } from '@syncfusion/ej2-angular-buttons';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { AccumulationChartModule, AccumulationLegendService, CategoryService, DataLabelService, LegendService, LineSeriesService, PieSeriesService, TooltipService } from '@syncfusion/ej2-angular-charts';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import {  TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { FormHeaderComponent } from './form-header/form-header.component';
import { FormButtonsComponent } from './form-buttons/form-buttons.component';
import { CommonErrorDisplayComponent } from './common-error-display/common-error-display.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    FormHeaderComponent,
    FormButtonsComponent,
    CommonErrorDisplayComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,

  ],
  exports:[
    ReactiveFormsModule,
    CommonErrorDisplayComponent,
    FormsModule,
    GridModule,
    SidebarModule,
    TreeViewModule,
    TabModule,
    ButtonModule,
    GridModule,
    ReactiveFormsModule,
    FormsModule,
    DialogModule,
    AccumulationChartModule,
    TextBoxModule,
    DropDownListModule,
    ChartModule,
    FormButtonsComponent,
    FormHeaderComponent,
    ToastrModule,

  ],
  providers: [LegendService,PieSeriesService, AccumulationLegendService,CategoryService,TooltipService, DataLabelService, LineSeriesService]
})
export class SharedModule { }
