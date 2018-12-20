import { TestBed } from '@angular/core/testing';

import { StrReportServiceService } from './str-report-service.service';

describe('StrReportServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StrReportServiceService = TestBed.get(StrReportServiceService);
    expect(service).toBeTruthy();
  });
});
