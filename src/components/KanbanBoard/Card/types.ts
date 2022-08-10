import { FC } from "react";
import { DragItemProp } from "src/store/features/board/types";

export default interface CardProps {
  title: string;
  Icon: FC;
  points: number;
  tasks: any[];
  name: DragItemProp["name"];
}
