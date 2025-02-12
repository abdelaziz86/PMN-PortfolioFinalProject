import { TestBed } from '@angular/core/testing';

import { MySkillsService } from './my-skills.service';

describe('MySkillsService', () => {
  let service: MySkillsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MySkillsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
