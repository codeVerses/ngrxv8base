import { Component } from "@angular/core";
import { Store, select } from "@ngrx/store";
// import { State } from "./reducers";
// import { LoadActionss } from "./reducers/actions.actions";
import { increment, decrement, reset } from "./store/counter/actions";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select("count"));
  }

  increase() {
    this.store.dispatch(increment());
  }
  decrease() {
    this.store.dispatch(decrement());
  }
  reset() {
    this.store.dispatch(reset());
  }
}
