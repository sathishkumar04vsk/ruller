import PollOutlinedIcon from "@mui/icons-material/PollOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { IconButton } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useEffect, useState } from "react";

export const Client = () => {
  const [client, setClient] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/client", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((value) => setClient(value));
  }, []);
  return (
    <div className="client-container">
      <div className="row ">
        <div className="col-4">
          <p className="title-card">Client</p>
        </div>
        <div className="col-2">
          <p className="title-card">Status</p>
        </div>
        <div className="col-2">
          <p className="title-card">Created</p>
        </div>
        <div className="col-2">
          <p className="title-card">Schedule</p>
        </div>
        <div className="col-2">
          <p className="title-card">Active</p>
        </div>
      </div>
      {client.map(({ name, description, active, created_date, last }) => (
        <div className="row clients">
          <div className="col-4">
            <h6 className="client-name">{name}</h6>
            <p className="description">{description}</p>
          </div>
          <div className="col-2">
            <span className="client-status">{active}</span>
          </div>
          <div className="col-2">
            <p>{created_date}</p>
          </div>
          <div className="col-2">
            <p className="last-seen">
              <span className="schedule">Last:</span> {last} hrs ago
            </p>
            <p className="next-seen">
              <span className="schedule">Next:</span> 18 hrs from now{" "}
            </p>
          </div>
          <div className="col-2">
            <div className="row">
              <div className="col-3">
                <IconButton>
                  <PollOutlinedIcon sx={{ color: grey[900] }} />
                </IconButton>
              </div>
              <div className="col-3">
                <IconButton>
                  <PollOutlinedIcon sx={{ color: grey[900] }} />
                </IconButton>
              </div>
              <div className="col-3">
                <IconButton>
                  <PollOutlinedIcon sx={{ color: grey[900] }} />
                </IconButton>
              </div>
              <div className="col-3">
                <IconButton>
                  <DeleteOutlinedIcon sx={{ color: grey[900] }} />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
