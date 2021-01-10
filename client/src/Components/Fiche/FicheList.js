import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRdvs } from "../../JS/actions/rdv";

import Fiche from "./Fiche";


const ListFiche = () => {
  const dispatch = useDispatch();
  const rdvs = useSelector((state) => state.rdvReducer.rdvs);


  useEffect(() => {
    {
      dispatch(getRdvs("user"));
    }
  }, []);
  return (
    <div>
       <div className="limiter">
        <div className="container-table100">
          <div className="wrap-table100">
            <div className="table100">
              <table>
                <thead>
                  <tr className="table100-head">
                    <th className="column1">Name</th>
                    <th className="column2">LastName</th>
                    <th className="column3">Phone</th>
                    <th className="column5">Email</th>
                    <th className="column4">DateRdv</th>
                  </tr>
                </thead>
              
                        <tbody>
                          {rdvs.map((el) => (
                            <Fiche key={el._id} rdv={el} />
                          ))}
                        </tbody>
                      
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListFiche;
