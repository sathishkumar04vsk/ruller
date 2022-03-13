import { Client } from "./Client.js";

export const Rules = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h1>Manage Rules</h1>
        </div>
        <div className="col-4">
          <button type="button" class="btn btn-import-a-rule">
            Import a Rule Template
          </button>
        </div>
        <div className="col-4">
          <button type="button" class="btn btn-add-rule">
            Add New Rule
          </button>
        </div>
      </div>
      <Client />
    </div>
  );
};
