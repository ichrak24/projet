import React, { useState, useEffect } from "react";
import "./app.css";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ajouterRdv } from "../../JS/actions/rdv";
import { Link } from "react-router-dom";
const RDV = () => {
  var dateControl = document.querySelector('input[type="date"]');

  const dispatch = useDispatch();
  const history = useHistory();
  const psy = useSelector((state) => state.userReducer.user);
  const psyid = useSelector((state) => state.userReducer.oneuser);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [Address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [daterdv, setDaterdv] = useState("");
  const [datenaiss, setDatenaiss] = useState("");
  const psyyy = psyid && psyid._id;
  return (
    <div className="container-contact100">
      <div className="wrap-contact100">
        <div className="contact100-form validate-form">
          <span className="contact100-form-title">Fiche de Rendez-vous</span>

          <div
            className="wrap-input100 validate-input"
            data-validate="Name is required"
          >
            <span className="label-input100"> Name</span>
            <input
              className="input100"
              type="text"
              name="firstname"
              placeholder="Enter  name psy "
              value={psy && psy.name}
              onChange={(e) => setName(e.target.value)}
            />
            <span className="focus-input100"></span>
          </div>

          <div
            className="wrap-input100 validate-input"
            data-validate="Name is required"
          >
            <span className="label-input100"> LastName</span>
            <input
              className="input100"
              type="text"
              name="firstname"
              placeholder="Enter your name"
              value={psy && psy.lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <span className="focus-input100"></span>
          </div>
          <div
            className="wrap-input100 validate-input"
            data-validate="Name is required"
          >
            <span className="label-input100">phone</span>
            <input
              className="input100"
              type="text"
              name="firstname"
              placeholder="Enter your phone"
              value={psy && psy.phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <span className="focus-input100"></span>
          </div>

          <div
            className="wrap-input100 validate-input"
            data-validate="Valid email is required: ex@abc.xyz"
          >
            <span className="label-input100">Email</span>
            <input
              className="input100"
              type="text"
              name="email"
              placeholder="Enter your email addess"
              value={psy && psy.email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="focus-input100"></span>
          </div>

          <div
            className="wrap-input100 validate-input"
            data-validate="Valid email is required: ex@abc.xyz"
          >
            <span className="label-input100">Date de Naissance</span>
            <input
              className="input100"
              type="text"
              placeholder="Enter your date naiss"
              value={psy && psy.datenaiss}
              onChange={(e) => setDatenaiss(e.target.value)}
            />
            <span className="focus-input100"></span>
          </div>

          <div className="nativeDatePicker">
            <label for="bday">
              Veuillez saisir votre date de rendez-vous :
            </label>
            <input
              type="date"
              id="bday"
              name="bday"
              onChange={(e) => setDaterdv(e.target.value)}
            />
            <span className="validity"></span>
          </div>

          <div class="container-contact100-form-btn">
            <div class="wrap-contact100-form-btn">
              <div class="contact100-form-bgbtn"></div>
              <Link to="/listrdv">
                <button
                  class="contact100-form-btn"
                  onClick={() =>
                    dispatch(
                      ajouterRdv(
                        {
                          name,
                          lastName,
                          email,
                          datenaiss,
                          Address,
                          daterdv,
                          phone,
                          psyyy,
                        },
                        history
                      )
                    )
                  }
                >
                  <span>
                    Submit
                    <i
                      class="fa fa-long-arrow-right m-l-7"
                      aria-hidden="true"
                    ></i>
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RDV;
