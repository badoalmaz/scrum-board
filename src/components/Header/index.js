import {
  AppBar,
  FormControl,
  Grid,
  Select,
  Toolbar,
  Typography,
  Box,
} from "@material-ui/core";
import { observer } from "mobx-react-lite";
import React from "react";
import useStore from "../../hooks/useStore";
import User from "../common/User";
import "../../App.css";

const Header = () => {
  const { boards, users } = useStore();
  return (
    <AppBar position="static" className="navbar">
      <Toolbar variant="dense">
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Box display="flex" alignItems="center" p={1}>
              <img
                style={{ width: "130px" }}
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/22ba9057-8f6c-4203-9a61-58b46b299823/dc8nwqx-f53afa20-59ff-48b3-82a2-0ff7a8b09a73.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzIyYmE5MDU3LThmNmMtNDIwMy05YTYxLTU4YjQ2YjI5OTgyM1wvZGM4bndxeC1mNTNhZmEyMC01OWZmLTQ4YjMtODJhMi0wZmY3YThiMDlhNzMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Fg-efwp8ln5B0WwfrDW8IyEM8qHJzef3uVKDXRTgAL8"
                alt=""
              />

              <FormControl>
                <Select
                  style={{
                    // backgroundColor: "#ffffff",
                    marginLeft: 10,
                    color: "white",
                  }}
                  id="active"
                  native
                  value={boards?.active?.id || ""}
                  onChange={(event) => {
                    const { value } = event.target;

                    boards.selectBoard(value);
                  }}
                >
                  <option value={""} disabled>
                    –
                  </option>
                  {boards?.boards.map((board) => {
                    return (
                      <option key={board?.id} value={board?.id}>
                        {board?.title}
                      </option>
                    );
                  })}
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item>
            <User user={users?.me} />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default observer(Header);
