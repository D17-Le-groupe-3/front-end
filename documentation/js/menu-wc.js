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
                    <a href="index.html" data-type="index-link">digiday documentation</a>
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
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
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
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-525a9efe52608fb0e43f219249b3add24b697380faa9dbf96576d41a52f618724905da02a2a5ae5a6765880bcf7e13ada1258e37d667eccc8a8575c2ee2b8034"' : 'data-target="#xs-components-links-module-AppModule-525a9efe52608fb0e43f219249b3add24b697380faa9dbf96576d41a52f618724905da02a2a5ae5a6765880bcf7e13ada1258e37d667eccc8a8575c2ee2b8034"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-525a9efe52608fb0e43f219249b3add24b697380faa9dbf96576d41a52f618724905da02a2a5ae5a6765880bcf7e13ada1258e37d667eccc8a8575c2ee2b8034"' :
                                            'id="xs-components-links-module-AppModule-525a9efe52608fb0e43f219249b3add24b697380faa9dbf96576d41a52f618724905da02a2a5ae5a6765880bcf7e13ada1258e37d667eccc8a8575c2ee2b8034"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CompanyHolidayComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompanyHolidayComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateCompanyHolidayComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateCompanyHolidayComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DialogCompanyHolidayDelete.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DialogCompanyHolidayDelete</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DialogLeaveDelete.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DialogLeaveDelete</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DisplayLeavesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DisplayLeavesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LeaveCountersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LeaveCountersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LeavePlanningComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LeavePlanningComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LeaveValidationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LeaveValidationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RequestComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RequestComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-AppModule-525a9efe52608fb0e43f219249b3add24b697380faa9dbf96576d41a52f618724905da02a2a5ae5a6765880bcf7e13ada1258e37d667eccc8a8575c2ee2b8034"' : 'data-target="#xs-pipes-links-module-AppModule-525a9efe52608fb0e43f219249b3add24b697380faa9dbf96576d41a52f618724905da02a2a5ae5a6765880bcf7e13ada1258e37d667eccc8a8575c2ee2b8034"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AppModule-525a9efe52608fb0e43f219249b3add24b697380faa9dbf96576d41a52f618724905da02a2a5ae5a6765880bcf7e13ada1258e37d667eccc8a8575c2ee2b8034"' :
                                            'id="xs-pipes-links-module-AppModule-525a9efe52608fb0e43f219249b3add24b697380faa9dbf96576d41a52f618724905da02a2a5ae5a6765880bcf7e13ada1258e37d667eccc8a8575c2ee2b8034"' }>
                                            <li class="link">
                                                <a href="pipes/CompanyHolidayPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompanyHolidayPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/EnumToArrayPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EnumToArrayPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/LeaveStatusPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LeaveStatusPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/LeaveTypePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LeaveTypePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/RequestLeaveTypePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RequestLeaveTypePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#directives-links"' :
                                'data-target="#xs-directives-links"' }>
                                <span class="icon ion-md-code-working"></span>
                                <span>Directives</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"' }>
                                <li class="link">
                                    <a href="directives/DateValidatorDirective.html" data-type="entity-link" >DateValidatorDirective</a>
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
                                <a href="classes/CompanyHoliday.html" data-type="entity-link" >CompanyHoliday</a>
                            </li>
                            <li class="link">
                                <a href="classes/Leave.html" data-type="entity-link" >Leave</a>
                            </li>
                            <li class="link">
                                <a href="classes/MyErrorStateMatcher.html" data-type="entity-link" >MyErrorStateMatcher</a>
                            </li>
                            <li class="link">
                                <a href="classes/MyErrorStateMatcher-1.html" data-type="entity-link" >MyErrorStateMatcher</a>
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
                                    <a href="injectables/CompanyHolidayService.html" data-type="entity-link" >CompanyHolidayService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LeaveCountersService.html" data-type="entity-link" >LeaveCountersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LeavesService.html" data-type="entity-link" >LeavesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/IsLoggedInGuard.html" data-type="entity-link" >IsLoggedInGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/IsNotLoggedInGuard.html" data-type="entity-link" >IsNotLoggedInGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/CompanyHolidayDto.html" data-type="entity-link" >CompanyHolidayDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Credentials.html" data-type="entity-link" >Credentials</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Department.html" data-type="entity-link" >Department</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LeaveCounters.html" data-type="entity-link" >LeaveCounters</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LeaveDto.html" data-type="entity-link" >LeaveDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ModifyLeaveDTO.html" data-type="entity-link" >ModifyLeaveDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
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