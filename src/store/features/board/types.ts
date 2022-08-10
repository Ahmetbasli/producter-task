export interface DragItemProp {
  info: any;
  name: keyof BoardState["lists"];
  index: number;
  height?: string;
}
export default interface BoardState {
  dragItem: DragItemProp | null;
  dragOverItem: DragItemProp | null;
  lists: {
    todo: any[];
    done: any[];
  };
}
