import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerMesInscritComponent } from './lister-mes-inscrit.component';

describe('ListerMesInscritComponent', () => {
  let component: ListerMesInscritComponent;
  let fixture: ComponentFixture<ListerMesInscritComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListerMesInscritComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListerMesInscritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
