export type MainNavigationItem = {
  name: string;
  path: string;
}

export const MAIN_NAVIGATION: Array<MainNavigationItem> = [
  {
    name: 'Dashboard',
    path: '/',
  },
  {
    name: 'Habits',
    path: '/admin/habits',
  },
  {
    name: 'Tasks',
    path: '/admin/tasks',
  },
];

export type Difficulty = {
  name: string;
  color: "slate" | "blue" | "amber" | "rose";
  points?: number;

}

export const DIFFICULTIES: { [key: string]: Difficulty } = {
  very_easy: {
    name: 'Very Easy',
    color: 'slate',
    points: 1,
  },
  easy: {
    name: 'Easy',
    color: 'blue',
    points: 2
   },
  medium: {
    name: 'Medium',
    color: 'amber',
    points: 3
  },
  hard: {
    name: 'Hard',
    color: 'rose',
    points: 5
  },
};

export const DIFFICULTY_OPTIONS = Object.keys(DIFFICULTIES).map((key) => ({
  value: key,
  label: DIFFICULTIES[key].name,
}));