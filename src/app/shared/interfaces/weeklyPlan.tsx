import { IDayPlan } from "./dayPlan";

export interface IWeeklyPlan {
  segunda: IDayPlan;
  terça: IDayPlan;
  quarta: IDayPlan;
  quinta: IDayPlan;
  sexta: IDayPlan;
  sabado: IDayPlan;
  domingo: IDayPlan;
}
