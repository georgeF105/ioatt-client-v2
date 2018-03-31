import { TestBed, inject } from '@angular/core/testing';

import { FirebaseToStoreService } from './firebase-to-store.service';

describe('FirebaseToStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirebaseToStoreService]
    });
  });

  it('should be created', inject([FirebaseToStoreService], (service: FirebaseToStoreService) => {
    expect(service).toBeTruthy();
  }));
});
