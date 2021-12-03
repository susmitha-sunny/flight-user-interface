import { PassengerDetails } from './passenger-details.model';

describe('PassengerDetails', () => {
  it('should create an instance', () => {
    expect(new PassengerDetails("","","","","",new Date)).toBeTruthy();
  });
});
