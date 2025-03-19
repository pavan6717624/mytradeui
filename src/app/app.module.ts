import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FuturesComponent } from './futures/futures.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { AmazonComponent } from './amazon/amazon.component';


import { CommonModule } from '@angular/common';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {GalleriaModule} from 'primeng/galleria';
import {CalendarModule} from 'primeng/calendar';

import {MenubarModule} from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {CardModule} from 'primeng/card';
import {DragDropModule} from 'primeng/dragdrop';
import {SpeedDialModule} from 'primeng/speeddial';
import {CarouselModule} from 'primeng/carousel';
import {AccordionModule} from 'primeng/accordion';
import {ToastModule} from 'primeng/toast';
import {DockModule} from 'primeng/dock';
import {PanelModule} from 'primeng/panel';
import {MenuModule} from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import {DividerModule} from 'primeng/divider';
import {ContextMenuModule} from 'primeng/contextmenu';

import { DynamicDialogModule } from 'primeng/dynamicdialog';
import {ImageModule} from 'primeng/image';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {BlockUIModule} from 'primeng/blockui';
import { BadgeModule } from "primeng/badge";
import {FieldsetModule} from 'primeng/fieldset';
import { InputNumberModule } from 'primeng/inputnumber';
import { KeyFilterModule } from 'primeng/keyfilter';
import { RippleModule } from 'primeng/ripple';
import {FileUploadModule} from 'primeng/fileupload';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SidebarModule } from 'primeng/sidebar';
import { TabMenuModule } from 'primeng/tabmenu';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ScrollTopModule } from 'primeng/scrolltop';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SkeletonModule } from 'primeng/skeleton';
import {DropdownModule} from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
import {ListboxModule} from 'primeng/listbox';
const SHARED_MODULES = [
  ListboxModule,
  MultiSelectModule,
  DropdownModule,
  SkeletonModule,
  ScrollPanelModule,
  ScrollTopModule,
  SelectButtonModule,
  RadioButtonModule,
  TabMenuModule,
  SidebarModule,
  PanelMenuModule,
  ConfirmDialogModule,
  RippleModule,
  BlockUIModule,
  FileUploadModule,
  BadgeModule,
  AvatarGroupModule,
  MessageModule,
  TieredMenuModule,
  MessagesModule,
  AvatarModule,
  DockModule,
  DynamicDialogModule,
  DialogModule,
  ImageModule,
  MenuModule,
  FieldsetModule,
  TabViewModule,
  TableModule,
  DividerModule,
  SpeedDialModule,
  PanelModule,
  ContextMenuModule,
  CarouselModule,
  ToastModule,
    CalendarModule,
    FormsModule,
    GalleriaModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    DragDropModule,
    CheckboxModule,
    CardModule,
    AccordionModule,
    InputNumberModule,
    KeyFilterModule
    

];


@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    FuturesComponent,
    AmazonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleChartsModule,
    DialogModule,
    FormsModule, 
    ReactiveFormsModule,
    SHARED_MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
