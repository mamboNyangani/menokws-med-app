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
import {TabMenuModule} from 'primeng/tabmenu';
import {TabViewModule} from 'primeng/tabview';
import {EditorModule} from 'primeng/editor';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {TimelineModule} from 'primeng/timeline';
import {SkeletonModule} from 'primeng/skeleton';
import {MenuModule} from 'primeng/menu';
import {ChartModule} from 'primeng/chart';


const MODULES: any[] = [
    ButtonModule,
    PanelMenuModule,
    AccordionModule,
    MenubarModule,
    EditorModule,
    InputTextModule,
    ChartModule,
    CalendarModule,
    CarouselModule,
    CheckboxModule,
    AvatarGroupModule,
    AvatarModule,
    ToastModule,
    CardModule,
    DialogModule,
    DataViewModule,
    MenuModule,
    TableModule,
    TabMenuModule,
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
    StepsModule,
    TabViewModule,
    TimelineModule,
    SkeletonModule
];

@NgModule({
    imports: [...MODULES],
    exports: [...MODULES],
    providers : [DialogService, MessageService]
})

export class PrimeNGModule { }