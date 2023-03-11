export const TaskCardDeleteButton = ({
  taskCardsList,
  setTaskCardsList,
  taskCard,
}) => {
  const tsakCardDelete = (id) => {
    // タスクカード削除
    setTaskCardsList(taskCardsList.filter((e) => e.id !== id));
  };
  return (
    <div>
      <button
        className="taskCardDeletebutton"
        onClick={() => tsakCardDelete(taskCard.id)}
      >
        x
      </button>
    </div>
  );
};
