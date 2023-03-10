import { useState } from "react";

export const TaskCardTitle = () => {
  const [isClick, setIsClick] = useState(false);

  const [inputCardTitle, setInputCardTitle] = useState("ToDo title");

  const handleChange = (e) => {
    setInputCardTitle(e.target.value);
  };

  const handleClick = () => {
    setIsClick(true);
    console.log(isClick);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClick(false);
  };

  // onBlurはどこをクリックしても〇〇をするって意味　handleClickをfalseにする
  const handleBlur = () => {
    setIsClick(false);
  };
  return (
    <div onClick={handleClick} className="taskCardTitleInputArea">
      {isClick ? (
        <form onSubmit={handleSubmit}>
          <input
            className="taskCardTitleInput"
            autoFocus
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={inputCardTitle}
            maxLength="10"
          />
        </form>
      ) : (
        <h3>{inputCardTitle}</h3>
      )}
    </div>
  );
};
