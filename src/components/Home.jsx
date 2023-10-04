import React from "react";

export function Home() {
  return (
    <div className=" container mt-5 bg-dark text-bg-dark rounded-5 p-5">
      <h1 className=" text-center text-decoration-underline ">
        {" "}
        Welcome To Our Home Page
      </h1>
      <div className="row mt-5">
        <div className="col-4  ">
          <img
            src="https://images.pexels.com/photos/3368816/pexels-photo-3368816.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className=" img-fluid object-fit-cover rounded-circle"
          />
        </div>
        <div className="col-8 text-center ">
          <h2 className="lead">About Us</h2>
          <p className="muted">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
            excepturi accusantium ab! Quia adipisci hic odit odio! Soluta fugiat
            consequatur molestiae earum pariatur. Rerum aut fugit, ea ad
            suscipit provident.
          </p>
        </div>
      </div>
    </div>
  );
}
