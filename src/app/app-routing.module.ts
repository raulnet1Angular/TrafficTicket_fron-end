import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';


const routes:Routes=[
{
    path:'appComponent',
    component :AppComponent
},
{
    path:'userComponent',
    component :UserComponent
},
{
    path:'', redirectTo:'/userComponent',
    pathMatch:'full'
},
{
    path: '**', redirectTo: 'userComponent'
}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: [],
    providers: [],
})
export class AppRoutingModule { }
