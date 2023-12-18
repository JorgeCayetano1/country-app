import {
  Component,
  Input,
  Output,
  EventEmitter,
  // ViewChild,
  // ElementRef,
} from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``,
})
export class SearchBoxComponent {
  // @ViewChild('searchInput')
  // searchInput!: ElementRef<HTMLInputElement>;

  @Output()
  onValue: EventEmitter<string> = new EventEmitter();

  @Input()
  placeholder: string = '';

  search(val: string): void {
    this.onValue.emit(val);
  }
}
