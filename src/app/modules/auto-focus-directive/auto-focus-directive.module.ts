import { NgModule } from '@angular/core';
import { AutoFocusDirective } from 'src/app/directives/autoFocus/auto-focus.directive';

@NgModule({
  declarations: [
    AutoFocusDirective
  ],
  exports:[AutoFocusDirective],
})
export class AutoFocusDirectiveModule { }
