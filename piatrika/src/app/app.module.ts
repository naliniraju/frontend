import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AddFarmersComponent } from './components/farmers/add-farmers/add-farmers.component';
import { FarmersComponent } from './components/farmers/farmers/farmers.component';
import { FarmersDetailsComponent } from './components/farmers/farmers-details/farmers-details.component';
import { VillageComponent } from './components/village/village/village.component';
import { AddVillageComponent } from './components/village/add-village/add-village.component';
import { VillageDetailsComponent } from './components/village/village-details/village-details.component';
import { DivisionSectionComponent } from './components/division_section/division-section/division-section.component';
import { AddDivisionSectionComponent } from './components/division_section/add-division-section/add-division-section.component';
import { DivisionSectionDetailsComponent } from './components/division_section/division-section-details/division-section-details.component';
import { AppRoutingModule } from './routings/app-routing/app-routing.module';
import { HomeComponent } from './components/home/home/home.component';
import { LandVillageComponent } from './components/land_village/land-village/land-village.component';
import { AddLandVillageComponent } from './components/land_village/add-land-village/add-land-village.component';
import { LandVillageDetailsComponent } from './components/land_village/land-village-details/land-village-details.component';
import { ApplicationTreatmentComponent } from './components/application_treatment/application-treatment/application-treatment.component';
import { AddApplicationTreatmentComponent } from './components/application_treatment/add-application-treatment/add-application-treatment.component';
import { ApplicationTreatmentDetailsComponent } from './components/application_treatment/application-treatment-details/application-treatment-details.component';
import { SeasonComponent } from './components/season/season/season.component';
import { AddSeasonComponent } from './components/season/add-season/add-season.component';
import { SeasonDetailsComponent } from './components/season/season-details/season-details.component';
import { AddLoanComponent } from './components/loan/add-loan/add-loan.component';
import { LoanComponent } from './components/loan/loan/loan.component';
import { LoanDetailsComponent } from './components/loan/loan-details/loan-details.component';
import { BankComponent } from './components/bank/bank/bank.component';
import { AddBankComponent } from './components/bank/add-bank/add-bank.component';
import { BankDetailsComponent } from './components/bank/bank-details/bank-details.component';
import { FarmerBankDetailsComponent } from './components/farmer_bank/farmer-bank-details/farmer-bank-details.component';
import { FarmerBankComponent } from './components/farmer_bank/farmer-bank/farmer-bank.component';
import { AddFarmerBankComponent } from './components/farmer_bank/add-farmer-bank/add-farmer-bank.component';
import { PersonComponent } from './components/person/person/person.component';
import { AddPersonComponent } from './components/person/add-person/add-person.component';
import { PersonDetailsComponent } from './components/person/person-details/person-details.component';
import { GuarantorComponent } from './components/guarantor/guarantor/guarantor.component';
import { GuarantorDetailsComponent } from './components/guarantor/guarantor-details/guarantor-details.component';
import { AddGuarantorComponent } from './components/guarantor/add-guarantor/add-guarantor.component';

@NgModule({
  declarations: [
    AppComponent,
    AddFarmersComponent,
    FarmersComponent,
    FarmersDetailsComponent,
    VillageComponent,
    AddVillageComponent,
    VillageDetailsComponent,
    DivisionSectionComponent,
    AddDivisionSectionComponent,
    DivisionSectionDetailsComponent,
    HomeComponent,
    LandVillageComponent,
    AddLandVillageComponent,
    LandVillageDetailsComponent,
    ApplicationTreatmentComponent,
    AddApplicationTreatmentComponent,
    ApplicationTreatmentDetailsComponent,
    SeasonComponent,
    AddSeasonComponent,
    SeasonDetailsComponent,
    AddLoanComponent,
    LoanComponent,
    LoanDetailsComponent,
    BankComponent,
    AddBankComponent,
    BankDetailsComponent,
    FarmerBankDetailsComponent,
    FarmerBankComponent,
    AddFarmerBankComponent,
    PersonComponent,
    AddPersonComponent,
    PersonDetailsComponent,
    GuarantorComponent,
    GuarantorDetailsComponent,
    AddGuarantorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
