import { DataSource } from "typeorm";
import { Task } from "./tasks/task.entity";

export const datasource = new DataSource({
    type: "postgres",
    database: 'task-management',
    entities: [Task],
})
