import React from "react";
import { PageData } from "@/utils/DataModels/MangaDataModel";
import Panel from "../Panel/Panel";

interface PageProps {
  pageData: PageData;
}

const Page: React.FC<PageProps> = ({ pageData }) => {
  return (
    <div>
      {pageData.map((panelData, i) => {
        return <Panel key={i} panelData={panelData} />;
      })}
    </div>
  );
};

export default Page;
