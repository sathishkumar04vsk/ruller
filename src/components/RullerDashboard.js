import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { TextField } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import { useHistory } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import QrCodeOutlinedIcon from "@mui/icons-material/QrCodeOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import FingerprintOutlinedIcon from "@mui/icons-material/FingerprintOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import { grey } from "@mui/material/colors";
import ruller from "./ruller.png";
import { Plan } from "./Plan";
import { Routing } from "./Routing";

export const RullerDashboard = () => {
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
            <Plan />
          </Box>
        </Drawer>
        <Routing />
      </Box>
    </div>
  );
};
