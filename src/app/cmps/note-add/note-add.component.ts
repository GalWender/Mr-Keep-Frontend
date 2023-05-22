import { UtilService } from './../../services/util.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.scss']
})
export class NoteAddComponent implements OnInit {
  @ViewChild("addTitle") addTitle?: ElementRef
  @ViewChild("addText") addText?: ElementRef
  constructor(
  ) { }

  addNoteTextToggle: boolean = false

  ngOnInit(): void {
    setTimeout(() => {
      this.addText?.nativeElement.focus()
    }, 100)
  }

  onOpenAddNoteText() {
    this.addNoteTextToggle = true
    setTimeout(() => {
      this.addText?.nativeElement.focus()
    }, 100)
  }

  onCloseAddNoteText() {
    this.addNoteTextToggle = false
  }

  clickedOutside(): void {
    this.addNoteTextToggle = false;
    console.log('title:', this.addTitle?.nativeElement.value);
    console.log('text:', this.addText?.nativeElement.value);
  }

}
