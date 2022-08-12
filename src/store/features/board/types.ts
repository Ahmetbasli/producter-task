export interface DragItem {
  taskInfo: any;
  TaskListId: number;
  index: number;
  height?: string;
}
export interface Task {
  id: number;
  content: string;
  taksCode: string;
  taksCodeIcon: string;
  importancy: "lower" | "middle" | "higher";
  points: number;
  userLogo: string;
}
export interface CardProps {
  id: number;
  title: string;
  icon: string;
  points: number;
  tasks: Task[];
}
export default interface BoardState {
  dragItem: DragItem | null;
  dragOverItem: DragItem | null;
  lists: CardProps[];
}
