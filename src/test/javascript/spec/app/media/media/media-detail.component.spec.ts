/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils, JhiDataUtils, JhiEventManager } from 'ng-jhipster';


import { EventmanagerTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';



import { MediaDetailComponent } from '../../../../../../main/webapp/app/media/media/media-detail.component';
import { MediaService } from '../../../../../../main/webapp/app/media/media/media.service';
import { Media } from '../../../../../../main/webapp/app/media/media/media.model';




describe('Component Tests', () => {

    describe('Media Management Detail Component', () => {
        let comp: MediaDetailComponent;
        let fixture: ComponentFixture<MediaDetailComponent>;
        let service: MediaService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [EventmanagerTestModule],
                declarations: [MediaDetailComponent],
                providers: [
                    JhiDateUtils,
                    JhiDataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    MediaService,
                    JhiEventManager
                ]
            }).overrideTemplate(MediaDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(MediaDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(MediaService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new Media(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.media).toEqual(jasmine.objectContaining({id: 10}));
            });
        });
    });

});
