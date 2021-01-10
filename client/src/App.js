import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Signup from "./Components/Signup/Signup";
import { Card, CardBody, Col, Row } from "reactstrap";
import Profil from "./Components/profil/profil";
import DashboardPsy from "./Components/DashbordPsy/dashbordPsy";
import DashboardPatient from "./Components/DashboardPatient/DashboardPatient";

import PrivateRoute from "./Components/router/PrivateRoute";
import AdminRoute from "./Components/router/AdminRoute";
import { current } from "./JS/actions/user";
import DoctorDetails from "./Components/Doctors/DoctorDetails";
import ListFiche from "./Components/Fiche/FicheList";
import { Switch, Route, Link } from "react-router-dom";
import Add from "./Components/posts/Add";
import Home from "./Components/Home/Home";
import RDV from "./Components/Appointment/RDV";
import PostList from "./Components/posts/postList";
import Problem from "./Components/posts/problem";
import AddPsy from "./Components/Admin/AddPsy";
import ListPsy from "./Components/Admin/ListPsy";
import ListPatient from "./Components/Admin/ListPatient";
import Psyinfo from "./Components/Admin/PsyInfo";
import PatientInfo from "./Components/Admin/PatientInfo";
import DashboardAdmin from "./Components/Admin/DashboardAdmin";
import LoginAdmin from "./Components/Admin/LoginAdmin";
import Planning from "./Components/planning/planning";
import AboutUs from "./Components/Home/AboutUs";
import Listrdv from "./Components/psy/listrdv";
import Itemrdv from "./Components/psy/rdv";
function App() {
  const dispatch = useDispatch();
  const [Search, setSearch] = useState("");

  useEffect(() => {
    dispatch(current());
  } , []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/postList" component={PostList} />

        <Route path="/aboutus" component={AboutUs} />
        <AdminRoute path="/fiche" component={ListFiche} />
        <Route path="/doctordetails" component={DoctorDetails} />
        <Route path="/rdv" component={RDV} />
        <Route path="/problem" component={Problem} />
        <PrivateRoute path="/Adminn" component={AddPsy} />
        <AdminRoute path="/ListPsy" component={ListPsy} />
        <PrivateRoute path="/ListPatient" component={ListPatient} />
        <AdminRoute path="/PsyInfo" component={Psyinfo} />
        <PrivateRoute path="/PatientInfo" component={PatientInfo} />
        <Route path="/LoginAdmin" component={LoginAdmin} />
        <AdminRoute path="/DashboardAdmin" component={DashboardAdmin} />
        <PrivateRoute path="/dashbordPsy" component={DashboardPsy} />
        <PrivateRoute path="/dashbordpatient" component={DashboardPatient} />

        <PrivateRoute path="/profil" component={Profil} />

        <Route path={["/add", "/edit/:id"]} component={Add} />
        <PrivateRoute path="/listrdv" component={Listrdv} />
        <PrivateRoute path="/itemrdv" component={Itemrdv} />
        <Route path="/planning" component={Planning} />
      </Switch>
    </div>
  );
}

export default App;
