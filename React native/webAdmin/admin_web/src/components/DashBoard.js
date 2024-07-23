import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js/auto";
import styles from "./DashBoard.module.css";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Dashboard = () => {
  const userData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Users",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const recipeData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Recipes",
        data: [28, 48, 40, 19, 86, 27, 90],
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  const Piedata = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <div className={styles.container}>
      <div className={styles.drawerPlace}></div>
      <div className={styles.dashboardContainer}>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <h2>Total Users </h2>
            <p>
              1000{" "}
              <i class="fa-regular fa-user" style={{ color: "#f98a4f" }}></i>
            </p>
          </div>
          <div className={styles.stat}>
            <h2>Total Recipes</h2>
            <p>
              500 <i class="fa-solid fa-book" style={{ color: "#f98a4f" }}></i>
            </p>
          </div>
          {/* <div>
            <h2>Pie Chart</h2>
            <Pie data={Piedata} />
          </div> */}
        </div>
        <div className={styles.charts}>
          <div className={styles.chart}>
            <h2 style={{ color: "#f98a4f" }}>User Growth</h2>
            <Bar data={userData} />
          </div>
          <div className={styles.chart}>
            <h2 style={{ color: "#f98a4f" }}>Recipe Growth</h2>
            <Bar data={recipeData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
