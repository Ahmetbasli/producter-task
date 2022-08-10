import React from "react";
import { AppDispatch } from "src/store/app/store";
import { updateLists } from "src/store/features/board/slice";
let placeholder: HTMLElement | null = null;
export const createTaskPlaceHolder = (dispatch: AppDispatch) => {
  const div = document.createElement("div");
  const insideDiv = document.createElement("div");
  div.appendChild(insideDiv);
  div.style.paddingTop = "12px";
  insideDiv.style.borderRadius = "4px";
  insideDiv.style.height = "100%";
  insideDiv.style.background = "#f1f4f4";
  div.setAttribute("id", "taskPlaceHolder");

  div.addEventListener("dragover", (e) => {
    e.stopPropagation();
    e.preventDefault();
  });
  div.addEventListener("drop", (e) => {
    e.stopPropagation();
    div.remove();
    dispatch(updateLists());
  });
  div.addEventListener("dragleave", (e) => {
    e.stopPropagation();
  });
  placeholder = div;
  return div;
};

const getPlaceHolderDiv = () => placeholder;
export default getPlaceHolderDiv;
