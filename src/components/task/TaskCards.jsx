import { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import { AddTaskCardButton } from "./button/AddTaskCardButton";
import { TaskCard } from "./TaskCard";

const reorder = (taskCardsList, startIndex, endIndex) => {
  // タスクカードを並び替える
  const remove = taskCardsList.splice(startIndex, 1);
  taskCardsList.splice(endIndex, 0, remove[0]);
};

export const TaskCards = () => {
  const [taskCardsList, setTaskCardsList] = useState([
    {
      id: "0",
      draggableId: "item0",
    },
  ]);

  const handleDragEnd = (result) => {
    // わかりやすくスタートIndexとエンドIndexに名前置き換えてる
    reorder(taskCardsList, result.source.index, result.destination.index);

    setTaskCardsList(taskCardsList);
  };
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided) => (
          <div
            className="TaskCardsArea"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {taskCardsList.map((taskCard, index) => (
              <TaskCard
                key={taskCard.id}
                index={index}
                taskCardsList={taskCardsList}
                setTaskCardsList={setTaskCardsList}
                taskCard={taskCard}
              />
            ))}
            {provided.placeholder}
            <AddTaskCardButton
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
            />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
