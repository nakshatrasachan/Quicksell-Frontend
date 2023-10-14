import React from "react";
import "./Main.css";
import Card from "../Card/Card";
import { useSelector } from "react-redux";


const Main = () => {
  const { selectedData } = useSelector(
    (state) => state.SelectDataReducer
  );

  return (
    selectedData && (
      <div className="Container" style={{ justifyContent: "space-evenly" }}>
        {selectedData.map((elem, index) => {
          return (
            <>
              <div key={index} className="CardContainer">
                <div className="dashCardHeading flex-sb">
                  <div className="leftView">
                    <span>
                      {" "}
                      {elem[index]?.title} {elem[index]?.value?.length}
                    </span>
                  </div>
                  
                </div>
                <div className="dashList flex-gap-10">
                  {elem[index]?.value?.map((elem, ind) => {
                    return (
                      <Card id={elem.id} title={elem.title} tag={elem.tag} />
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    )
  );
};

export default Main;
