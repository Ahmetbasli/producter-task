import { Task } from "src/store/features/board/types";

export default interface TaskCardProps {
  taskInfo: Task;
  index: number;
  TaskListId: number;
}
