import http from "http";
import { TodoListService } from "./todolist-service.mjs";

const service = new TodoListService();

const server = http.createServer((req, res) => {
  res.setHeader(
    "Content-Type",
    "application/json"
  );

  if (req.method == "GET") {
    service.readTodoList(req, res);
  } else if (req.method == "POST") {
    service.createTodoList(req, res);
  } else if (req.method == "PUT") {
    service.updateTodoList(req, res);
  } else if (req.method == "DELETE") {
    service.deleteTodoList(req, res);
  }
});

server.listen(4000);
