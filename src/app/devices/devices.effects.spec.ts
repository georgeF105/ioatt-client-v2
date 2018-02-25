import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs/Observable';

import { DevicesEffects } from './devices.effects';

describe('DevicesService', () => {
  let actions$: Observable<any>;
  let effects: DevicesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DevicesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(DevicesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
