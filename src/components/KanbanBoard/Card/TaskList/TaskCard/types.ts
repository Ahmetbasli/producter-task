import { DragItemProp } from "src/store/features/board/types";

export default interface TaskCardProps {
  info: string;
  index: number;
  name: DragItemProp["name"];
}
