import { IActivity } from "./activity";

export interface IGroupActivity {
    groupId: string;
    groupName: string;
    activities: IActivity[];
}