import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierFormationComponent } from './modifier-formation.component';

describe('ModifierFormationComponent', () => {
  let component: ModifierFormationComponent;
  let fixture: ComponentFixture<ModifierFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierFormationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifierFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
