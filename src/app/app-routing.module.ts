import { NgModule } from '@angular/core'
import { Routes,RouterModule,ActivatedRoute} from '@angular/router'
import { WelcomeComponent} from './welcome/welcome.component'
import { MeetingnowComponent } from './meetingnow/meetingnow.component'
import { CalendarComponent} from './calendar/calendar.component'
import { ScheduleComponent } from './schedule/schedule.component'
import { ContactComponent } from './contact/contact.component'
import { UsageComponent } from './usage/usage.component'
import { FindeventComponent } from './findevent/findevent.component'

const appRoutes:Routes=[
    { path:'',redirectTo:'/welcome',pathMatch:'full'},
    { path:'welcome',component:WelcomeComponent},
    { path:'contact',component:ContactComponent},
    { path:'calendar',component:CalendarComponent },
    { path:'meetingnow',component:MeetingnowComponent },
    { path:'schedule',component:ScheduleComponent },
    { path:'findevent',component:FindeventComponent },
    { path:'usage',component:UsageComponent }
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]

})


export class AppRoutingModule{

}