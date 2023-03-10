import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./App.css";
import { Header } from "./components/header/Header";

export const App = () => {
  return (
    <div>
      <Header />
    </div>
  );
};
