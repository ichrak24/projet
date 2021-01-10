import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../JS/actions/user";
import Doctor from "./Doctor";
const DoctorList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);

  useEffect(() => {
    if (users) {
      dispatch(getUsers("psy"));
    }
  }, [users]);
  return (
    <div>
      <div className="row">
        <div className="team-heading text-center">
          <h2>our Doctors</h2>
          <h4>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled
          </h4>
        </div>
        {users.map((el) => (
          <Doctor key={el._id} user={el} />
        ))}
      </div>
    </div>
  );
};

export default DoctorList;
