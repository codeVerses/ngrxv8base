import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap, mergeMap, take } from "rxjs/operators";
import { from } from "rxjs";

@Injectable()
export class CounterEffects {
  increase$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType("[Counter] Increment"),
        tap(() => console.log("Increment Effect"))
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions) {}
}
