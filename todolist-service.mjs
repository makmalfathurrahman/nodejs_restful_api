export class TodoListService {
  todolist = ["one", "two", "three"];

  jsonTodoList() {
    return JSON.stringify({
      code: 200,
      status: "OK",
      data: this.todolist.map((value, index) => {
        return {
          id: index,
          todo: value,
        };
      }),
    });
  }

  createTodoList(req, res) {
    req.addListener("data", (data) => {
      const body = JSON.parse(data.toString());
      this.todolist.push(body.todo);

      res.write(this.jsonTodoList());
      res.end();
    });
  }

  readTodoList(req, res) {
    res.write(this.jsonTodoList());
    res.end();
  }

  updateTodoList(req, res) {
    req.addListener("data", (data) => {
      const body = JSON.parse(data.toString());

      if (this.todolist[body.id]) {
        this.todolist[body.id] = body.todo;
      }

      res.write(this.jsonTodoList());
      res.end();
    });
  }

  deleteTodoList(req, res) {
    req.addListener("data", (data) => {
      const body = JSON.parse(data.toString());

      if (this.todolist[body.id]) {
        this.todolist.splice(body.id, 1);
      }

      res.write(this.jsonTodoList());
      res.end();
    });
  }
}
