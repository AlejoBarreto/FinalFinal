import { TestBed, inject } from '@angular/core/testing';

import { FormulariosService } from './formularios.service';

describe('FormulariosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormulariosService]
    });
  });

  it('should be created', inject([FormulariosService], (service: FormulariosService) => {
    expect(service).toBeTruthy();
  }));
});
