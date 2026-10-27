import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import Comic from '../../models/comic';
import { ComicService } from '../../service/service.comic';

@Component({
  selector: 'app-comics-component',
  standalone: true,
  styleUrl: './comics-component.css',
  templateUrl: './comics-component.html',
})
export class ComicsComponent implements OnInit {
  public arrayComics: Comic[] = [];

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ComicService,
  ) {}

  async ngOnInit(): Promise<void> {
    this.arrayComics = await this._service.getComicsAsync();
    this._cdr.detectChanges();
  }
}
