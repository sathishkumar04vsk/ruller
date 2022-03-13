import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { Switch, Route } from "react-router-dom";
import { Rules } from "./Rules";

export const Routing = () => {
  return (
    <Box
      className="main"
      component="main"
      sx={{ flexGrow: 1, p: 3, marginTop: "80px" }}
    >
      <Toolbar />
      <Switch>
        <Route path={"/"} exact>
          <Rules />
        </Route>
        <Route path={"/dashboard"}>
          <Rules />{" "}
        </Route>
        <Route path={"/rules"}>
          <Rules />
        </Route>
      </Switch>
    </Box>
  );
};
