import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useAppDispatch, useAppSelector } from "src/store/app/hooks";
import {
  addToListAsFirstTask,
  selectBoard,
} from "src/store/features/board/slice";
import { Box } from "@mui/system";
import { flushSync } from "react-dom";
import { validateContent, validatePoint } from "./utils/validation-functions";

interface TaskAddModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const TaskAddModal: React.FC<TaskAddModalProps> = ({ open, setOpen }) => {
  const dispatch = useAppDispatch();
  const boardData = useAppSelector(selectBoard);

  const [listId, setListId] = useState(`${boardData.lists[0].id}`);
  const [taskCodeId, setTaskCodeId] = useState("1");
  const [importancy, setImportancy] = useState<"lower" | "middle" | "higher">(
    "lower"
  );
  const [content, setContent] = useState({ value: "", error: false });
  const [point, setPoint] = useState({ value: "", error: false });

  const handleCancel = () => {
    setOpen(false);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!validateContent(e.target.value)) {
      setContent({ value: e.target.value, error: true });
      return;
    }
    setContent({ value: e.target.value, error: false });
  };
  const handlePointChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!validatePoint(e.target.value)) {
      setPoint((prev) => ({ value: e.target.value, error: true }));
      return;
    }
    setPoint({ value: e.target.value, error: false });
  };

  const handleAdd = () => {
    if (validateContent(content.value) && validatePoint(point.value)) {
      // add task to the store
      const taskInfo = {
        id: new Date().valueOf(),
        content: content.value,
        taksCode: taskCodeId === "1" ? "TSK-01" : "EPC-02",
        taksCodeIcon: taskCodeId === "1" ? "check" : "cube",
        importancy: importancy,
        points: Number(point.value),
        userLogo: "profile1",
      };
      dispatch(addToListAsFirstTask({ taskListId: Number(listId), taskInfo }));
      setOpen(false);
      setContent({ value: "", error: false });
      setPoint({ value: "", error: false });
      return;
    }

    if (!validatePoint(point.value)) {
      setPoint((prev) => ({ ...prev, error: true }));
    }
    if (!validateContent(content.value)) {
      setContent((prev) => ({ ...prev, error: true }));
    }
  };

  return (
    <div>
      <Dialog open={open} onClose={handleCancel}>
        <DialogTitle>Add New Task</DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column" }}>
          <FormControl sx={{ mt: 2, width: "100%" }}>
            <InputLabel htmlFor="template">Template</InputLabel>
            <Select
              value={listId}
              onChange={(e) => setListId(e.target.value)}
              label="template"
            >
              {boardData.lists.map((list) => (
                <MenuItem key={list.id} value={list.id}>
                  {list.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            multiline
            minRows={3}
            autoFocus
            margin="dense"
            id="content"
            label="Content"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleContentChange}
            error={content.error}
            helperText={content.error ? "This field can't be empty" : " "}
          />
          <FormControl sx={{ mt: 2, width: "100%" }}>
            <InputLabel htmlFor="taskcode">Task code</InputLabel>
            <Select
              value={taskCodeId}
              onChange={(e) => setTaskCodeId(e.target.value)}
              label="taskcode"
            >
              <MenuItem value={1}>TSK-01</MenuItem>
              <MenuItem value={2}>EPC-02</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ mt: 2, width: "100%" }}>
            <InputLabel htmlFor="importancy">Urgency</InputLabel>
            <Select
              value={importancy}
              onChange={(e) =>
                setImportancy(e.target.value as "lower" | "middle" | "higher")
              }
              label="importancy"
            >
              <MenuItem value="lower">Lower</MenuItem>
              <MenuItem value="middle">Middle</MenuItem>
              <MenuItem value="higher">Highest</MenuItem>
            </Select>
          </FormControl>
          <Box sx={{ width: "300px" }}>
            <TextField
              autoFocus
              margin="dense"
              id="point"
              label="Story point"
              type="number"
              fullWidth
              variant="standard"
              onChange={handlePointChange}
              error={point.error}
              helperText={point.error ? "Invalid number" : " "}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleAdd}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default TaskAddModal;
