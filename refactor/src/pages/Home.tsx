import React from "react";
import Todo from "components/Todo";
import Form from "components/Form";
import Header from "components/Header";
import "App.css";

function Home() {
  return (
    <div className="layout">
      <Header />
      <Form />
      <Todo isDone={false} />
      <Todo isDone={true} />
    </div>
  );
}

export default Home;
