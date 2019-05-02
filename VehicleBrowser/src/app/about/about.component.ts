import { Component, OnInit } from '@angular/core';
import { LoremIpsum } from "lorem-ipsum";


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  text = "";

  constructor() { }

  ngOnInit() {
    this.generateText()
  }

  generateText() {
    const lorem = new LoremIpsum({
      sentencesPerParagraph: {
        max: 8,
        min: 4
      },
      wordsPerSentence: {
        max: 16,
        min: 4
      }
    });
    this.text = lorem.generateParagraphs(5);
  }

}
