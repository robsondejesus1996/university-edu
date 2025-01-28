import "./Programs.css";

import {  AddressBook, GraduationCap, UserRectangle } from "phosphor-react";

const Programs = () => {
  return (
    <div className="programs" id="program">
      <div className="program">
        <img
          src="https://plus.unsplash.com/premium_photo-1683887034491-f58b4c4fca72?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Imagem Programs"
        />
        <div className="caption">
          <GraduationCap size={42} className="icon_programs"/>
          <p>Graduation Degree</p>
        </div>
      </div>

      <div className="program">
        <img
          src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Imagem Programs"
        />
        <div className="caption">
          <UserRectangle size={42} className="icon_programs"/>
          <p>Master Degree</p>
        </div>
      </div>

      <div className="program">
        <img
          src="https://plus.unsplash.com/premium_photo-1683887034473-74e486cdb7a1?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Imagem Programs"
        />
        <div className="caption">
          <AddressBook size={42} className="icon_programs"/>
          <p>Post Graduation</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
