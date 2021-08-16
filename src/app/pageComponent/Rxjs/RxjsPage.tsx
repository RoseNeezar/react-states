import React, { FormEvent, useEffect, useState } from "react";
import {
  BehaviorSubject,
  debounceTime,
  distinctUntilChanged,
  filter,
  from,
  mergeMap,
  Observable,
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

const RxjsPage = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  userObservable(searchResultObservable, setResults);

  const handleSearchChange = (e: FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setSearch(newValue);
    searchSubject.next(newValue);
  };
  return (
    <div className="flex flex-col items-center w-full h-screen bg-gray-700">
      <input
        className="h-10 pl-2 mt-5 rounded-lg"
        onBlur={() => setSearch("")}
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleSearchChange}
      />
      <div className="">{JSON.stringify(results, null, 2)}</div>
    </div>
  );
};

export default RxjsPage;
