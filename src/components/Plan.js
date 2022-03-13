import { LinearProgress } from "@mui/material";

export const Plan = () => {
  return (
    <div className="container plan-container">
      <div className="row align-items-center justify-content-between">
        <div className="col-6">
          <p className="plan">Free Plan</p>
        </div>
        <div className="col-6">
          <button type="button" class="btn rounded-pill">
            Upgrade
          </button>
        </div>
      </div>
      <div className="row align-items-center justify-content-between">
        <div className="col-6">
          <span className="plan-content">Task</span>
        </div>
        <div className="col-6">
          <span className="plan-content">10/1000</span>
        </div>
      </div>
      <div className="row align-items-center ">
        {" "}
        <LinearProgress variant="determinate" value={10} />
      </div>
      <div className="row">
        <div className="col-6">
          <span className="plan-content">Pixels</span>
        </div>
        <div className="col-6">
          <span className="plan-content">Unlimited</span>
        </div>
      </div>
    </div>
  );
};
