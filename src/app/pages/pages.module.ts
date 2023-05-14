import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CharactersContainerComponent } from './characters/characters-container/characters-container.component';
import { CharactersPresenterComponent } from './characters/characters-presenter/characters-presenter.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CharacterEffects } from './store/state/character/character.effects';
import { pagesReducer } from './store/state/page.reducer';
import { PAGES_FEATURE_KEY } from './store/state/page.state';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { LoadingSpinnerComponent } from 'src/app/shared/components/loading-spinner/loading-spinner.component';
import { ComicsContainerComponent } from './comics/comics-container/comics-container.component';
import { ComicsPresenterComponent } from './comics/comics-presenter/comics-presenter.component';
import { DialogModule } from 'primeng/dialog';
const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'characters', component: CharactersContainerComponent },
      { path: 'comics', component: ComicsContainerComponent },
    ],
  },
];

const priemNgImports = [DialogModule, TableModule, ButtonModule, CardModule];

@NgModule({
  declarations: [
    CharactersContainerComponent,
    CharactersPresenterComponent,
    ComicsContainerComponent,
    ComicsPresenterComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    ...priemNgImports,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    CardModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(PAGES_FEATURE_KEY, pagesReducer),
    EffectsModule.forFeature([CharacterEffects]),
  ],
})
export class PagesModule {}
