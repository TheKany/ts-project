import { Header } from "./components/Header";

const app = document.getElementById("app");

if (app) {
  const header = new Header("타입스크립트");

  app.appendChild(header.render());
}
