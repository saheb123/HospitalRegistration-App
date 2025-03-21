import { TestBed } from '@angular/core/testing';

import { AppgetEmployeeServiceService } from './appget-employee-service.service';

describe('AppgetEmployeeServiceService', () => {
  let service: AppgetEmployeeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppgetEmployeeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
