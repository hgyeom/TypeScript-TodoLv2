import Form from "components/form/Form";
import Todo from "components/todo/Todo";
import React from "react";

const Main = () => {
  return (
    <>
      <Form />
      <Todo isDone={false} />
      <Todo isDone={true} />
    </>
  );
};

export default Main;
