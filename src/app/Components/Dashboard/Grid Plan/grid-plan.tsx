import React from "react";
import styles from "./grid-plan.module.css";
import { IWeeklyPlan } from "@/app/shared/interfaces/weeklyPlan";
import GridView from "../GridView/gridview";
import { IDayPlan } from "@/app/shared/interfaces/dayPlan";

type Props = {
  planning: IWeeklyPlan;
  setPlanning: (planning: IWeeklyPlan) => void;
};

const GridPlan = ({ planning, setPlanning }: Props) => {
  return (
    <div className={styles.grid_plan}>
      {Object.entries(planning).map(
        ([dayName, dayPlan]: [string, IDayPlan]) => (
          <GridView
            key={dayName}
            dayPlan={dayPlan}
            planning={planning}
            setPlanning={setPlanning}
          />
        )
      )}
    </div>
  );
};

export default GridPlan;
