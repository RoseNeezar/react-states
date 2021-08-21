import React, { FormEvent, useEffect, useRef, useState } from "react";
import { fromEvent, Observable } from "rxjs";
import { ajax } from "rxjs/ajax";
import {
  userObservable,
  searchResultObservable,
  searchSubject,
} from "./hooks/usePoke";

const RxjsPage = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  userObservable(searchResultObservable, setResults);

  const btnRef = useRef<HTMLButtonElement | null>(null);

  const handleSearchChange = (e: FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setSearch(newValue);
    searchSubject.next(newValue);
  };

  const ajax$ = ajax<any>("https://random-data-api.com/api/name/random_name");

  // const helloClick$ = new Observable<MouseEvent>((sub) => {
  //   btnRef.current?.addEventListener("click", (event) => {
  //     sub.next(event);
  //   });
  // });

  // const helloClick$ = fromEvent<MouseEvent>(btnRef.current, "click");

  useEffect(() => {
    const subscribe = fromEvent<MouseEvent>(btnRef.current!, "click").subscribe(
      (data) => console.log(data.type, data.x, data.y)
    );
    return () => subscribe.unsubscribe();
  }, [ajax$]);

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
      <button ref={btnRef} className="p-3 my-5 bg-red-300 rounded-lg">
        rxjs
      </button>
      <div className="">{JSON.stringify(results, null, 2)}</div>
    </div>
  );
};

export default RxjsPage;
