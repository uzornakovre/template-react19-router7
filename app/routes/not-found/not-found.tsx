import { useNavigate } from "react-router";
import styles from "./not-found.module.scss";
import type { Route } from "../../+types/root";

export const meta = ({}: Route.MetaArgs) => {
  return [
    { title: "Not Found" },
    { name: "description", content: "Страница не найдена" },
  ];
};

const NotFound = () => {
  const navigate = useNavigate();

  const navigateHome = (): void => {
    navigate("/");
  };

  return (
    <div className={styles.not_found_page}>
      <div className={styles.content}>
        <h2 className={styles.error_code}>404</h2>
        <p className={styles.error_description}>Страница не найдена</p>
        <button className={styles.go_back} type="button" onClick={navigateHome}>
          На главную
        </button>
      </div>
    </div>
  );
};

export default NotFound;
