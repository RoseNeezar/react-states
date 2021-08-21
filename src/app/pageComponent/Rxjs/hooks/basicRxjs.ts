import { useEffect } from "react";
import { Observable } from "rxjs";

const observable$ = new Observable<string>((subscribe) => {
  subscribe.next("hello");

  setTimeout(() => {
    subscribe.next("world");
    subscribe.complete();
  }, 3000);
  setTimeout(() => {
    subscribe.error(new Error("Failure"));
  }, 4000);
  return () => {
    console.log("Teardown - cancelation token");
  };
});

const callEffect = () => {
  useEffect(() => {
    const subscription = observable$.subscribe({
      next: (val) => console.log(val),
      complete: () => console.log("complete"),
      error: (err) => console.log(err.message),
    });
    return () => subscription.unsubscribe();
  }, [observable$]);
};
