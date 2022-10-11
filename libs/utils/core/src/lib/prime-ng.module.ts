import { NgModule } from "@angular/core";
import { AccordionModule } from 'primeng/accordion';     //accordion and accordion tab  
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { CarouselModule } from 'primeng/carousel';
import {CheckboxModule} from 'primeng/checkbox';
import {ToastModule} from 'primeng/toast';
import {CardModule} from 'primeng/card';
import {DataViewModule} from 'primeng/dataview';
import {RatingModule} from 'primeng/rating';
import {DropdownModule} from 'primeng/dropdown';
import {ChipsModule} from 'primeng/chips';
import {ChipModule } from 'primeng/chip';
import {GalleriaModule} from 'primeng/galleria';
import {DialogService, DynamicDialogModule} from 'primeng/dynamicdialog';
import {DialogModule} from 'primeng/dialog';
import { MessageService } from "primeng/api";
import {BlockUIModule} from 'primeng/blockui';
import {PanelMenuModule} from 'primeng/panelmenu';
import {TableModule} from 'primeng/table';
import {ProgressBarModule} from 'primeng/progressbar';
import {SlideMenuModule} from 'primeng/slidemenu';
import {FileUploadModule} from 'primeng/fileupload';
import {ToolbarModule} from 'primeng/toolbar';
import {StepsModule} from 'primeng/steps';
import {CalendarModule} from 'primeng/calendar';

const MODULES: any[] = [
    ButtonModule,
    PanelMenuModule,
    AccordionModule,
    MenubarModule,
    InputTextModule,
    CalendarModule,
    CarouselModule,
    CheckboxModule,
    ToastModule,
    CardModule,
    DialogModule,
    DataViewModule,
    TableModule,
    RatingModule,
    BlockUIModule,
    DropdownModule,
    ChipsModule,
    ChipModule,
    GalleriaModule,
    DynamicDialogModule,
    ProgressBarModule,
    SlideMenuModule,
    ToolbarModule,
    FileUploadModule,
    StepsModule
];

@NgModule({
    imports: [...MODULES],
    exports: [...MODULES],
    providers : [DialogService, MessageService]
})

export class PrimeNGModule { }