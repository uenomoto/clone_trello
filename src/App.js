import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./App.css";
import { Header } from "./components/header/Header";
import { TaskCards } from "./components/task/TaskCards";

export const App = () => {
  return (
    <div>
      <Header />
      <TaskCards />
    </div>
  );
};
