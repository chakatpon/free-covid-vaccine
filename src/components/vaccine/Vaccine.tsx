import React, { ReactElement } from "react";
import vaccineIMG from "../../assets/img/free_covid_vaccine.jpg";

const Vaccine: React.FC = (): ReactElement => {
  return (
    <>
        <img src={vaccineIMG} className="banner" alt="logo" />
    </>
  );
};

export default Vaccine;
