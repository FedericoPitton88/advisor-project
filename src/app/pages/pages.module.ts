import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CharactersContainerComponent } from './characters/characters-container/characters-container.component';
import { CharactersPresenterComponent } from './characters/characters-presenter/characters-presenter.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CharacterEffects } from './store/state/marvel/marvel.effects';
import { pagesReducer } from './store/state/page.reducer';
import { PAGES_FEATURE_KEY } from './store/state/page.state';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { LoadingSpinnerComponent } from 'src/app/shared/components/loading-spinner/loading-spinner.component';
import { ComicsContainerComponent } from './comics/comics-container/comics-container.component';
import { ComicsPresenterComponent } from './comics/comics-presenter/comics-presenter.component';
import { DialogModule } from 'primeng/dialog';
import { LoggedInGuard } from '../auth/guards/logged-in.guard';
import { ModalDetailComponent } from './characters/modal-detail/modal-detail.component';
import { CarouselModule } from 'primeng/carousel';
const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'characters', component: CharactersContainerComponent, canActivate: [LoggedInGuard] },
      { path: 'comics', component: ComicsContainerComponent, canActivate: [LoggedInGuard] },
    ],
  },
];

const priemNgImports = [DialogModule, TableModule, ButtonModule, CardModule, CarouselModule];

@NgModule({
  declarations: [
    CharactersContainerComponent,
    CharactersPresenterComponent,
    ComicsContainerComponent,
    ComicsPresenterComponent,
    LoadingSpinnerComponent,
    ModalDetailComponent
  ],
  imports: [
    ...priemNgImports,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(PAGES_FEATURE_KEY, pagesReducer),
    EffectsModule.forFeature([CharacterEffects]),
  ],
  providers: [
    LoggedInGuard
  ]
})
export class PagesModule {}
