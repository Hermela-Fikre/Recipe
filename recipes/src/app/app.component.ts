import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, RouteConfig } from '@angular/router/@angular/router';
import { Location } from '@angular/common';

import { RecipeList } from './recipe-list/recipe-list.component';
import { RecipeForm } from './recipe-form/recipe-form.component';
import { RecipeDetail } from './recipe-detail/recipe-detail.component';
import { RecipeSearch } from './recipe-search/recipe-search.component';
import { Notifications } from './notifications/notifications.component';

import 'rxjs/Rx'; // Import all of RxJs

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html'
})
@RouteConfig([
    { path: '/', name: 'RecipeList', component: RecipeList, useAsDefault: true },
    { path: '/recipe-add', name: 'RecipeAdd', component: RecipeForm },
    { path: '/recipe-edit/:id', name: 'RecipeEdit', component: RecipeForm },
    { path: '/recipe-detail/:id', name: 'RecipeDetail', component: RecipeDetail }
])
export class AppComponent {
    constructor(private _location: Location) {
        // _location is used in the template to show/hide the search component
    }
}
