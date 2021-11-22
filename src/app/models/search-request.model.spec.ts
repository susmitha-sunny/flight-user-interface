import { SearchRequest } from './search-request.model';

describe('SearchRequest', () => {
  it('should create an instance', () => {
    expect(new SearchRequest("","",new Date,new Date,"",0,0,0)).toBeTruthy();
  });
});
