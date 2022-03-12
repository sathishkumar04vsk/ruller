import "./App.css";
import Search from "@mui/icons-material/Search";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { TextField } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import { Switch, Route, useHistory } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import QrCodeOutlinedIcon from "@mui/icons-material/QrCodeOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import FingerprintOutlinedIcon from "@mui/icons-material/FingerprintOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import PollOutlinedIcon from "@mui/icons-material/PollOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { IconButton } from "@mui/material";
import { grey } from "@mui/material/colors";
import { LinearProgress } from "@mui/material";
import MenuIcon, { NoEncryption } from "@mui/icons-material";
import ruller from "./ruller.png";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <RullerDashboard />
    </div>
  );
}

export default App;

const RullerDashboard = () => {
  const history = useHistory();
  const datas = [
    {
      name: "Home",
      icon: <HomeOutlinedIcon sx={{ color: grey[900] }} />,
    },
    {
      name: "Brands",
      icon: <QrCodeOutlinedIcon sx={{ color: grey[900] }} />,
    },
    {
      name: "Ruller Pixels",
      icon: <BusinessOutlinedIcon sx={{ color: grey[900] }} />,
    },
    {
      name: "Stores",
      icon: <StorefrontOutlinedIcon sx={{ color: grey[900] }} />,
    },
    {
      name: "Products",
      icon: <CategoryOutlinedIcon sx={{ color: grey[900] }} />,
    },
    {
      name: "Ad Accounts",
      icon: <BusinessOutlinedIcon sx={{ color: grey[900] }} />,
    },
    {
      name: "Rules",
      icon: <StorefrontOutlinedIcon sx={{ color: grey[900] }} />,
      handler: "/rules",
    },
    {
      name: "Campaigns",
      icon: <CampaignOutlinedIcon sx={{ color: grey[900] }} />,
    },
    {
      name: "Fingerprints",
      icon: <FingerprintOutlinedIcon sx={{ color: grey[900] }} />,
    },
    {
      name: "Audiences",
      icon: <GroupsOutlinedIcon sx={{ color: grey[900] }} />,
    },
  ];

  const drawerWidth = 334;
  const color = "black";
  return (
    <div>
      <div className="row top-content">
        <p className="text-center welcome">
          Welcome to your Professional Trail!
        </p>
        <p className="text-center">
          You have 13 days to try Ruller's paid features. Upgrade anytime for as
          low as $19.99 USD/month.
        </p>
      </div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          className="top-navbar"
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar className="nav-item">
            <img className="logo" src={ruller} alt="Ruller" />
            <TextField
              id="outlined-select"
              select
              label="Salifo Group"
              size="small"
            ></TextField>
            <TextField id="outlined" label="Search" size="small"></TextField>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              marginTop: "60px",
              width: drawerWidth,
              border: "none",
              backgroundColor: "rgb(249,249,246)",
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Box className="left-nav" sx={{ overflow: "auto" }}>
            <List className="left-nav-lists">
              {datas.map(({ name, icon, handler }, index) => (
                <ListItem
                  className="list"
                  onClick={() => history.push({ handler })}
                  button
                  key={name}
                >
                  <ListItemIcon>{icon}</ListItemIcon>
                  <span className="list-text">{name}</span>
                </ListItem>
              ))}
            </List>
          </Box>
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
        </Drawer>

        <Box
          className="main"
          component="main"
          sx={{ flexGrow: 1, p: 3, marginTop: "80px" }}
        >
          <Toolbar />
          <Switch>
            <Route path={"/"} exact></Route>
            <Route path={"/dashboard"}> </Route>
            <Route path={"/rules"}>
              <Rules />
            </Route>
            <Route></Route>
            <Route></Route>
            <Route></Route>
          </Switch>
        </Box>
      </Box>
    </div>
  );
};

const Rules = () => {
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

const Client = () => {
  const [client, setClient] = useState([]);
  useEffect(() => {
    fetch("https://621dddd8849220b1fc879a8e.mockapi.io/Clients", {
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
