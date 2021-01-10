import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";
import { getRdv, getRdvs } from "../../JS/actions/rdv";

const Fiche = () => {
  const dispatch = useDispatch();
  const rdvs = useSelector((state) => state.rdvReducer.rdvs);
  const psy = useSelector((state) => state.userReducer.user);
  useEffect(() => {
    if (rdvs && psy) {
      dispatch(getRdvs(psy._id));
    }
  }, [psy, rdvs]);
  return (
    <th>
      <tr>
        <td>name</td>
        <td>lastname</td>

        <td>phone</td>
        <td>email</td>
        <td>datenaiss</td>
      </tr>
      <tr>
        <td>name</td>
        <td>lastname</td>

        <td>phone</td>
        <td>email</td>
        <td>datenaiss</td>
      </tr>
      <tr>{rdvs && rdvs.map((el, i) => <p key={i}>{el.name}</p>)}</tr>
    </th>
  );
};

export default Fiche;
