import { Box, Grid, Paper, Typography, Button } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import React, { useCallback, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import useStore from "../../hooks/useStore";
import Column from "./Column";
import NewTaskDialog from "./NewTaskDialog";

function getListStyle(isDraggingOver) {
  return {
    background: isDraggingOver ? "black" : "transparent",
    // boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    // backdropFilter: "blur(5px)",
    // webkitBackdropFilter: "blur(5px)",
    // border: "1px solid rgba(102, 98, 98, 0.3)",
    padding: 8,
    minHeight: 500,
  };
}

const Dashboard = () => {
  const { boards } = useStore();
  const [newTaskTo, setNewTask] = useState(null);

  const closeDialog = useCallback(() => {
    setNewTask(null);
  }, [setNewTask]);

  const onDragEnd = useCallback(
    (event) => {
      const { source, destination, draggableId: taskId } = event;

      boards.active.moveTask(taskId, source, destination);
    },
    [boards]
  );

  return (
    <Box p={2} style={{ backgroundColor: "rgba(0, 0, 0, 0.5);" }}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Grid container spacing={3}>
          {boards?.active?.sections.map((section) => {
            return (
              <Grid item key={section.id} xs>
                <Paper
                  style={{
                    background: "rgba(245, 252, 245, 0.2)",
                    boxShadow: "0 4px 30px rgb(0 0 0 / 10%)",
                    // backdropFilter: "blur(5px)",
                    //   border: "1px solid rgba(102, 98, 98, 0.3)",
                  }}
                >
                  <Box
                    p={1}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography
                      color="textWhite"
                      variant="h5"
                      style={{ color: "white" }}
                    >
                      {section.title}
                    </Typography>
                    <Button
                      variant="outlined"
                      style={{ color: "white" }}
                      onClick={() => {
                        setNewTask(section.id);
                      }}
                    >
                      ADD
                    </Button>
                  </Box>
                  <Droppable droppableId={section.id} key={section.id}>
                    {(provided, snapshot) => (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={getListStyle(snapshot.isDraggingOver)}
                      >
                        <Column section={section} />
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </DragDropContext>
      <NewTaskDialog
        open={!!newTaskTo}
        sectionId={newTaskTo}
        handleClose={closeDialog}
      />
    </Box>
  );
};
export default observer(Dashboard);
