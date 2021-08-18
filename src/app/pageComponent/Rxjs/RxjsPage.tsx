import React, { FormEvent, useEffect, useState } from "react";
import {
  userObservable,
  searchResultObservable,
  searchSubject,
} from "./hooks/usePoke";

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
