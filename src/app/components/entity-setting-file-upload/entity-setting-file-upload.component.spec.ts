import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitySettingFileUploadComponent } from './entity-setting-file-upload.component';

describe('EntitySettingFileUploadComponent', () => {
  let component: EntitySettingFileUploadComponent;
  let fixture: ComponentFixture<EntitySettingFileUploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntitySettingFileUploadComponent]
    });
    fixture = TestBed.createComponent(EntitySettingFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
