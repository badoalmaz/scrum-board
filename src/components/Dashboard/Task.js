import { CardContent, Typography } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import React from "react";
import User from "../common/User";

const Task = ({ task }) => {
  return (
    <CardContent style={{ backgroundColor: "#242424", color: "white" }}>
      <Typography color="textWhite" gutterBottom style={{ fontSize: 18 }}>
        {task.title}
      </Typography>
      <Typography color="textWhite" gutterBottom>
        {task.description}
      </Typography>
      <User user={task.assignee} />
    </CardContent>
  );
};

export default observer(Task);
