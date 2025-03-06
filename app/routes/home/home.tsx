import type { Route } from "./+types/home";
import { Welcome } from "../../welcome/welcome";

export const meta = ({}: Route.MetaArgs) => {
  return [
    { title: "React Router Template" },
    { name: "description", content: "Главная страница" },
  ];
};

const Home = () => {
  return <Welcome />;
};

export default Home;
