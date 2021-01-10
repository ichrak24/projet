import React from 'react'

const Itemrdv = () => {
    return (
      <tr>
        <td>
         name lastname
        </td>
        <td>email</td>
        <td>date</td>
        <td>numero</td>
        <td>
          <div className="row ">
            <div name="col-xs-4 col-md-3 d-flex justify-content-end">
              <button
                type="button"
                name=""
                id=""
                className="btn btn-success font-weight-bold "
               
              >
                <i className="fa fa-send pr-2"></i> Accept
              </button>
            </div>
            <div className="col-xs-4 col-md-3 d-flex  justify-content-start">
              <button
                type="button"
                name=""
                id=""
                className="btn btn-dangerr font-weight-bold  "
              >
                <i className="fa fa-refresh pr-2"></i> Refuse
              </button>
            </div>
          </div>
        </td>
      </tr>
    );
}

export default Itemrdv
