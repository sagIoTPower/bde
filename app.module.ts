import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule as ngRouterModule } from '@angular/router';
import { CoreModule, HOOK_NAVIGATOR_NODES, BootstrapComponent, RouterModule, CommonModule, PluginsModule } from '@c8y/ngx-components';
import { MDEComponent } from './mde-widget/mde.component';
import { BDEComponent } from './bde-widget/bde.component';
import { NavigationFactory } from './navigation.factory';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(),
    ngRouterModule.forRoot(
      [{ path: 'bde', component: BDEComponent }, { path: 'mde', component: MDEComponent }], // hook the route here
      { enableTracing: false, useHash: true }
    ), 
    CoreModule.forRoot(),
    PluginsModule.forRoot(),
    CommonModule
  ],
  declarations: [BDEComponent, MDEComponent],
  providers: [
    { provide: HOOK_NAVIGATOR_NODES, useClass: NavigationFactory, multi: true },
  ],
  bootstrap: [BootstrapComponent]
})
export class AppModule {}
