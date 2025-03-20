import { HabitCategory, Status } from "@prisma/client";

export type HabitType = {
  id?: string;
  userId: string;
  name: string;
  description?: string | null;
  category: HabitCategory;
  start_date: Date;
  status: Status;
  habitTrackers?: HabitTrackerType[];
};


export type HabitTrackerType =  {
  id?: string;
  logged_at: Date;
  status: Status;
  userId: string;
  habitId: string;
  habit? : {
    name : string,
    category : HabitCategory
  }
  daily_difficulty: number;
  expected_difficulty: number;
}

