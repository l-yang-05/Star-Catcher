import React from "react";

const User = () => {
  return (
    <div className="container user">
    <div className="card">
      <div className= "card-body user1">
      <h2>Username:</h2>
              <h2>Full Name:</h2>
              <h2>Email:</h2> <h3>Bid history</h3>
              <table class="table">
                <thead class="thead-light">
                  <tr>
                    <th scope="col">Product Name</th>
                    <th scope="col">Bid Amount</th>
                    <th scope="col">Bid Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td scope="col ">Name#1</td>
                    <td>$0.00</td>
                    <td>Sold</td>
                  </tr>
                </tbody>
              </table>{" "}
      </div>
      
    </div>
    </div>
  );
};

export default User;
