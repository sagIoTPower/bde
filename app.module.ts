import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule as ngRouterModule } from '@angular/router';
import { CoreModule, BootstrapComponent, RouterModule, HOOK_NAVIGATOR_NODES, NavigatorNode } from '@c8y/ngx-components';
import { BDEComponent } from './bde-widget/bde.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(),
    ngRouterModule.forRoot(
      [{ path: 'bde', component: BDEComponent }], // hook the route here
      { enableTracing: false, useHash: true }
    ),
    CoreModule.forRoot()
  ],
  declarations: [BDEComponent],
  providers: [
    {
      provide: HOOK_NAVIGATOR_NODES,
      useValue: [{
        path: 'bde',
        label: 'Betriebstundenerfassung',
        priority: 100,
        icon: 'signal',

      }] as NavigatorNode[],
      multi: true
    },
  ],
  bootstrap: [BootstrapComponent]
})
export class AppModule {}
