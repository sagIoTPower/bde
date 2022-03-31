import { Injectable } from '@angular/core';
import { NavigatorNode, NavigatorNodeFactory, _ } from '@c8y/ngx-components';

@Injectable()
export class NavigationFactory implements NavigatorNodeFactory {
    nav: NavigatorNode[] = [];
    // Implement the get()-method, otherwise the ExampleNavigationFactory
    // implements the NavigatorNodeFactory interface incorrectly (!)
    constructor() {
        let BDE: NavigatorNode = new NavigatorNode({
            label: _('Betriebsdatenerfassung'),
            icon: 'plan',
            path: '/bde',
            priority: 100,
            routerLinkExact: false
        });

        let MDE: NavigatorNode = new NavigatorNode({
            label: _('Maschinendatenerfassung'),
            icon: 'plan',
            path: '/mde',
            priority: 2,
            routerLinkExact: false
        });

        let ServiceManagement: NavigatorNode = new NavigatorNode({
            label: _('Erfassung'),
            name: 'erfassung',
            priority: 200,
            children: [BDE,MDE],
            icon: 'calendar',
            routerLinkExact: false
        });
        this.nav.push(ServiceManagement);
    }
    get() {
        return this.nav;
    }
}