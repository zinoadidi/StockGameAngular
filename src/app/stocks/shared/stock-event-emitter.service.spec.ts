import {TestBed} from '@angular/core/testing';

import {StockEventEmitterService} from './stock-event-emitter.service';

describe('StockEventEmitterService', () => {
  let service: StockEventEmitterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockEventEmitterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
