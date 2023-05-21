import { AppComponent } from './app-root/app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { SearchComponent } from './pages/search/search.component';
import { HomeComponent } from './pages/home/home.component';
import { AutoFocusDirectiveModule } from './modules/auto-focus-directive/auto-focus-directive.module';
import { LoginSignupComponent } from './pages/login-signup/login-signup.component';
import { NoteListComponent } from './cmps/note-list/note-list.component';
import { NotePreviewComponent } from './cmps/note-preview/note-preview.component';
import { SideNavComponent } from './cmps/side-nav/side-nav.component';
import { ReminderComponent } from './pages/reminder/reminder.component';
import { ArchiveComponent } from './pages/archive/archive.component';
import { TrashComponent } from './pages/trash/trash.component';
import { NoteAddComponent } from './cmps/note-add/note-add.component';
import { StopPropagationDirective } from './directives/stopPropagation/stop-propagation.directive';
import { ClickOutsideDirective } from './directives/clickOutside/click-outside.directive';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    SearchComponent,
    HomeComponent,
    LoginSignupComponent,
    NoteListComponent,
    NotePreviewComponent,
    SideNavComponent,
    ReminderComponent,
    ArchiveComponent,
    TrashComponent,
    NoteAddComponent,
    StopPropagationDirective,
    ClickOutsideDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AutoFocusDirectiveModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
