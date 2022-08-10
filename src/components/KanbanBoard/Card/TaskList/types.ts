import { DragItemProp } from "src/store/features/board/types";

export default interface TaskListProps {
  name: keyof DragItemProp["name"];
  tasks: any[];
}
