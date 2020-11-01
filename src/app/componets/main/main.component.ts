import { Component } from '@angular/core';
import { Lecture } from '../../models/Lecture';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {
  title = 'Online video tutorial';
  currentLecture: Lecture = null;
  onLectureSelect(lecture) {
    this.currentLecture = lecture;
  }
}