import { UtilService } from './../../services/util.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.scss']
})
export class NoteAddComponent implements OnInit {
  constructor(
  ) {}

  addNoteTextToggle: boolean = false

  ngOnInit(): void {

  }

  onOpenAddNoteText() {
    this.addNoteTextToggle = true
  }
  
  onCloseAddNoteText() {
    this.addNoteTextToggle = false    
  }

  clickedOutside(): void {
    this.addNoteTextToggle = false;
  }

}
