import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-a37',
  templateUrl: './a37.component.html',
  styles: []
})
export class A37Component implements OnInit, OnDestroy {
  form: FormGroup;
  public ngUnsubscribe: Subject<void> = new Subject<void>();
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      id: [null],
      number: [null, Validators.required],
      designation: [null, Validators.required],
      cooperative: [null],
      participationType: [null, Validators.required],
      amountSocialPart: [null],
      socialPartType: [null],
      controlledNumberingType: [null],
      fromNumberControlled: [null],
      toNumberControlled: [null],
      debitorAccountSocialPart: [null],
      accountCapitalSocialPart: [null],
      isInterestExpenseSocialPartNotPaid: [null],
      isCreditorInterestSocialPartPaid: [null],
      durationTypeDeposit: [null],
      determinedDateDeposit: [null],
      monthsNumberDeposit: [null],
      accountDebitorDeposit: [null],
      accountCapitalDeposit: [null],
      isDebitorInterestNotPaidDeposit: [null],
      remunerationTypeOnPaid: [null],
      indexIpcBaseDeposit: [null],
      debitorSubscriptionInvoice: [null],
      billingType: [null],
      amountAnnualInvoice: [null],
      incomesAccount: [null],
      transferTypeCreditor: [null],
      percentageAnticipatedTax: [null],
      franchiseNotSubjectToAnticipatedTax: [null],
      creditorAccountingAllocation: [null],
      transitionalInterestAccount: [null],
      defaultInterestExpenseAccount: [null],
      participationTypeRatesDates: [null],

      dataInterestDebitorParticipationNotReleased: [null],
      dataInterestCreditorParticipationReleased: [null],
      dataInterestDebitorDepositNotReleased: [null],
      dataInterestCalculCreditorDeposit: [null],

      participationTypeRatesDatesToDelete: [null]
    });

    this.form.disable();

    this.form.controls['isCreditorInterestSocialPartPaid'].valueChanges
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(this.test.bind(this));

    this.form.controls['participationType'].valueChanges
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(this.test.bind(this));

    this.form.controls['isInterestExpenseSocialPartNotPaid'].valueChanges
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(this.test.bind(this));

    this.form.controls['isDebitorInterestNotPaidDeposit'].valueChanges
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(this.test.bind(this));
  }

  public test(value) {
    console.log(value);
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
