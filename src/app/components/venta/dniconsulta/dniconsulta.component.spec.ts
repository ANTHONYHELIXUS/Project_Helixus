import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DniconsultaComponent } from './dniconsulta.component';

describe('DniconsultaComponent', () => {
  let component: DniconsultaComponent;
  let fixture: ComponentFixture<DniconsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DniconsultaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DniconsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
