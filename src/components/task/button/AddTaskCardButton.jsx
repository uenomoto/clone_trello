import { v4 as uuid } from "uuid";

export const AddTaskCardButton = ({ taskCardsList, setTaskCardsList }) => {
  const assTaskCard = () => {
    const taskCardId = uuid();
    // タスクカード追加
    setTaskCardsList([
      ...taskCardsList,
      {
        id: taskCardId,
        draggbleId: `item${taskCardId}`,
      },
    ]);
  };
  return (
    <div className="addTaskCardButtonArea">
      <button className="addTaskCardButton" onClick={assTaskCard}>
        +
      </button>
    </div>
  );
};
