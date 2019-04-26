import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FarmersComponent } from 'src/app/components/farmers/farmers/farmers.component';
import { AddFarmersComponent } from 'src/app/components/farmers/add-farmers/add-farmers.component';
import { FarmersDetailsComponent } from 'src/app/components/farmers/farmers-details/farmers-details.component';
import { VillageComponent } from 'src/app/components/village/village/village.component';
import { AddVillageComponent } from 'src/app/components/village/add-village/add-village.component';
import { VillageDetailsComponent } from 'src/app/components/village/village-details/village-details.component';
import { DivisionSectionComponent } from 'src/app/components/division_section/division-section/division-section.component';
import { AddDivisionSectionComponent } from 'src/app/components/division_section/add-division-section/add-division-section.component';
import { DivisionSectionDetailsComponent } from 'src/app/components/division_section/division-section-details/division-section-details.component';
import { HomeComponent } from 'src/app/components/home/home/home.component';
import { LandVillageComponent } from 'src/app/components/land_village/land-village/land-village.component';
import { LandVillageDetailsComponent } from 'src/app/components/land_village/land-village-details/land-village-details.component';
import { AddLandVillageComponent } from 'src/app/components/land_village/add-land-village/add-land-village.component';
import { ApplicationTreatmentComponent } from 'src/app/components/application_treatment/application-treatment/application-treatment.component';
import { ApplicationTreatmentDetailsComponent } from 'src/app/components/application_treatment/application-treatment-details/application-treatment-details.component';
import { AddApplicationTreatmentComponent } from 'src/app/components/application_treatment/add-application-treatment/add-application-treatment.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'farmers',
    component: FarmersComponent
  },
  {
    path: 'farmer/add',
    component: AddFarmersComponent
  },
  {
    path: 'farmers/:id',
    component: FarmersDetailsComponent
  },
  {
    path: 'villages',
    component: VillageComponent
  },
  {
    path: 'village/add',
    component: AddVillageComponent
  },
  {
    path: 'villages/:id',
    component: VillageDetailsComponent
  },
  {
    path: 'divisionmodels',
    component: DivisionSectionComponent
  },
  {
    path: 'divisionmodel/add',
    component: AddDivisionSectionComponent
  },
  {
    path: 'divisionmodels/:id',
    component: DivisionSectionDetailsComponent
  },
  {
    path: 'landvillages',
    component: LandVillageComponent
  },
  {
    path: 'landvillage/add',
    component: AddLandVillageComponent
  },
  {
    path: 'landvillages/:id',
    component: LandVillageDetailsComponent
  },
  {
    path: 'applicationtreatments',
    component: ApplicationTreatmentComponent
  },
  {
    path: 'applicationtreatment/add',
    component: AddApplicationTreatmentComponent
  },
  {
    path: 'applicationtreatments/:id',
    component: ApplicationTreatmentDetailsComponent
  },

];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
