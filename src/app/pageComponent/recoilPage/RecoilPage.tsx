import React from "react";
import { RecoilRoot } from "recoil";
import MainRecoil from "./component/MainRecoil";

const RecoilPage = () => {
  return (
    <div className="flex h-screen bg-gray-800">
      <RecoilRoot>
        <MainRecoil />
      </RecoilRoot>
    </div>
  );
};

export default RecoilPage;
