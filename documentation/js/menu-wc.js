'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">i-bems-apps documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AlarmAppModule.html" data-type="entity-link">AlarmAppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-8ac252e9d37af349ae4d12cd5f9f7b9e"' : 'data-target="#xs-components-links-module-AppModule-8ac252e9d37af349ae4d12cd5f9f7b9e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-8ac252e9d37af349ae4d12cd5f9f7b9e"' :
                                            'id="xs-components-links-module-AppModule-8ac252e9d37af349ae4d12cd5f9f7b9e"' }>
                                            <li class="link">
                                                <a href="components/AlarmsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AlarmsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-8ac252e9d37af349ae4d12cd5f9f7b9e"' : 'data-target="#xs-injectables-links-module-AppModule-8ac252e9d37af349ae4d12cd5f9f7b9e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-8ac252e9d37af349ae4d12cd5f9f7b9e"' :
                                        'id="xs-injectables-links-module-AppModule-8ac252e9d37af349ae4d12cd5f9f7b9e"' }>
                                        <li class="link">
                                            <a href="injectables/HttpClientService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>HttpClientService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-95675d0b687b7820f3e0c4f8aa69a184-1"' : 'data-target="#xs-components-links-module-AppModule-95675d0b687b7820f3e0c4f8aa69a184-1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-95675d0b687b7820f3e0c4f8aa69a184-1"' :
                                            'id="xs-components-links-module-AppModule-95675d0b687b7820f3e0c4f8aa69a184-1"' }>
                                            <li class="link">
                                                <a href="components/AppComponent-1.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AuthenticateComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuthenticateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ForgotpasswordComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ForgotpasswordComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-95675d0b687b7820f3e0c4f8aa69a184-1"' : 'data-target="#xs-injectables-links-module-AppModule-95675d0b687b7820f3e0c4f8aa69a184-1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-95675d0b687b7820f3e0c4f8aa69a184-1"' :
                                        'id="xs-injectables-links-module-AppModule-95675d0b687b7820f3e0c4f8aa69a184-1"' }>
                                        <li class="link">
                                            <a href="injectables/HttpClientService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>HttpClientService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ShareCommonObjectsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ShareCommonObjectsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-d7e1b393cc8bd4b50a4aacaa481e5572-2"' : 'data-target="#xs-components-links-module-AppModule-d7e1b393cc8bd4b50a4aacaa481e5572-2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-d7e1b393cc8bd4b50a4aacaa481e5572-2"' :
                                            'id="xs-components-links-module-AppModule-d7e1b393cc8bd4b50a4aacaa481e5572-2"' }>
                                            <li class="link">
                                                <a href="components/AppComponent-2.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ControlComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ControlComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-29622fdcf68288c80eac81eb965ccc11-3"' : 'data-target="#xs-components-links-module-AppModule-29622fdcf68288c80eac81eb965ccc11-3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-29622fdcf68288c80eac81eb965ccc11-3"' :
                                            'id="xs-components-links-module-AppModule-29622fdcf68288c80eac81eb965ccc11-3"' }>
                                            <li class="link">
                                                <a href="components/AppComponent-3.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EnergyComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EnergyComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-cb24867fd67ca146c6b3d508c321d329-4"' : 'data-target="#xs-components-links-module-AppModule-cb24867fd67ca146c6b3d508c321d329-4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-cb24867fd67ca146c6b3d508c321d329-4"' :
                                            'id="xs-components-links-module-AppModule-cb24867fd67ca146c6b3d508c321d329-4"' }>
                                            <li class="link">
                                                <a href="components/AppComponent-4.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-dcb9b51bbfb720da10cc294377ad7409-5"' : 'data-target="#xs-components-links-module-AppModule-dcb9b51bbfb720da10cc294377ad7409-5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-dcb9b51bbfb720da10cc294377ad7409-5"' :
                                            'id="xs-components-links-module-AppModule-dcb9b51bbfb720da10cc294377ad7409-5"' }>
                                            <li class="link">
                                                <a href="components/AppComponent-5.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-218a280cc0853ad38724db3c62756c02-6"' : 'data-target="#xs-components-links-module-AppModule-218a280cc0853ad38724db3c62756c02-6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-218a280cc0853ad38724db3c62756c02-6"' :
                                            'id="xs-components-links-module-AppModule-218a280cc0853ad38724db3c62756c02-6"' }>
                                            <li class="link">
                                                <a href="components/AppComponent-6.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WaterDashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WaterDashboardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthenticationAppModule.html" data-type="entity-link">AuthenticationAppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ChartmoduleModule.html" data-type="entity-link">ChartmoduleModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ChartmoduleModule-5a8251dd8f2d89c419c08b2066a4e016"' : 'data-target="#xs-components-links-module-ChartmoduleModule-5a8251dd8f2d89c419c08b2066a4e016"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ChartmoduleModule-5a8251dd8f2d89c419c08b2066a4e016"' :
                                            'id="xs-components-links-module-ChartmoduleModule-5a8251dd8f2d89c419c08b2066a4e016"' }>
                                            <li class="link">
                                                <a href="components/BarGraphComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BarGraphComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ControlAppModule.html" data-type="entity-link">ControlAppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/EnergyAppModule.html" data-type="entity-link">EnergyAppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link">HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-819ed533db02138abbae12bc9a5875f1"' : 'data-target="#xs-components-links-module-HomeModule-819ed533db02138abbae12bc9a5875f1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-819ed533db02138abbae12bc9a5875f1"' :
                                            'id="xs-components-links-module-HomeModule-819ed533db02138abbae12bc9a5875f1"' }>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link">HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/IBemsAppModule.html" data-type="entity-link">IBemsAppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharemoduleModule.html" data-type="entity-link">SharemoduleModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharemoduleModule-ab5a44302f11e4c0e1f817cec17861e9"' : 'data-target="#xs-components-links-module-SharemoduleModule-ab5a44302f11e4c0e1f817cec17861e9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharemoduleModule-ab5a44302f11e4c0e1f817cec17861e9"' :
                                            'id="xs-components-links-module-SharemoduleModule-ab5a44302f11e4c0e1f817cec17861e9"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IbemsheaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IbemsheaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WaterAppModule.html" data-type="entity-link">WaterAppModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/AppPage-1.html" data-type="entity-link">AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/AppPage-2.html" data-type="entity-link">AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/AppPage-3.html" data-type="entity-link">AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/AppPage-4.html" data-type="entity-link">AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/AppPage-5.html" data-type="entity-link">AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/AppPage-6.html" data-type="entity-link">AppPage</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/HttpClientService.html" data-type="entity-link">HttpClientService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HttpClientService-1.html" data-type="entity-link">HttpClientService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HttpClientService-2.html" data-type="entity-link">HttpClientService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HttpClientService-3.html" data-type="entity-link">HttpClientService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HttpClientService-4.html" data-type="entity-link">HttpClientService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ShareCommonObjectsService.html" data-type="entity-link">ShareCommonObjectsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ShareCommonObjectsService-1.html" data-type="entity-link">ShareCommonObjectsService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});