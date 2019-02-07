import { TestBed } from '@angular/core/testing';

import { UpdateinfoService } from './updateinfo.service';

describe('UpdateinfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateinfoService = TestBed.get(UpdateinfoService);
    expect(service).toBeTruthy();
  });
});
