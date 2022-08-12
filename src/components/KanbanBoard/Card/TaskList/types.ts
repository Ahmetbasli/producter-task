import { Task } from "src/store/features/board/types";

export default interface TaskListProps {
  TaskListId: number;
  tasks: Task[];
}
