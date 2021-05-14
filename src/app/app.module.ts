import { ExperienceComponent } from './modules/components/experience/experience.component';
import { ContactComponent } from './modules/components/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/components/header/header.component';
import { AboutComponent } from './modules/components/about/about.component';
import { IntroComponent } from './modules/components/intro/intro.component';
import { WorkComponent } from './modules/components/work/work.component';
import { HomeComponent } from './modules/pages/home/home.component';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FlexModule, FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ExperienceComponent,
    ContactComponent,
    HeaderComponent,
    AboutComponent,
    IntroComponent,
    WorkComponent,
    HomeComponent,
    AppComponent,
  ],
  imports: [
    AnimateOnScrollModule.forRoot(),
    BrowserAnimationsModule,
    NgxPageScrollModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserModule,
    MatIconModule,
    RouterModule,
    FlexModule,
    CommonModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
