import { TestBed } from '@angular/core/testing';

import { PostbookingService } from './postbooking.service';

describe('PostbookingService', () => {
  let service: PostbookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostbookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
