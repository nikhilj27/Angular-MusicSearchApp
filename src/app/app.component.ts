import { Component, OnInit } from '@angular/core';
import { SpotifyService } from './spotify.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MusicSearchApp';

  constructor(public http: SpotifyService) { }

  ngOnInit() {
  }
}
