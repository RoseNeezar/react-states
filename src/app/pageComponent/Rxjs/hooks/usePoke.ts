import { useEffect } from "react";
import {
  BehaviorSubject,
  debounceTime,
  distinctUntilChanged,
  filter,
  from,
  mergeMap,
  Observable,
  tap,
} from "rxjs";

const getPokemonByName = async (name: string) => {
  const { results: allPokemons } = await fetch(
    "https://pokeapi.co/api/v2/pokemon/?limit=1000"
  ).then((res) => res.json());

  return allPokemons.filter((poke: any) => poke.name.includes(name));
};

let searchSubject = new BehaviorSubject("");
let searchResultObservable = searchSubject.pipe(
  filter((val) => val.length > 1),
  debounceTime(750),
  distinctUntilChanged(),
  mergeMap((res) => from(getPokemonByName(res)))
);

const userObservable = (observable: Observable<any>, setter: any) => {
  useEffect(() => {
    const subscription = observable.subscribe((res) => {
      setter(res);
    });
    return () => subscription.unsubscribe();
  }, [observable, setter]);
};

export { userObservable, searchResultObservable, searchSubject };
