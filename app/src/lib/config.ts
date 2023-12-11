export type MainNavigationItem = {
  name: string;
  path: string;
}

export const MAIN_NAVIGATION: Array<MainNavigationItem> = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Habits',
    path: '/admin/habits',
  },
  {
    name: 'Tasks',
    path: '/admin/habits',
  },
];

export type Difficulty = {
  name: string;
  color: "slate" | "blue" | "amber" | "rose";

}

export const DIFFICULTIES: { [key: string]: Difficulty } = {
  very_easy: {
    name: 'Very Easy',
    color: 'slate'
  },
  easy: {
    name: 'Easy',
    color: 'blue'
  },
  medium: {
    name: 'Medium',
    color: 'amber'
  },
  hard: {
    name: 'Hard',
    color: 'rose'
  },
};

export const DIFFICULTY_OPTIONS = Object.keys(DIFFICULTIES).map((key) => ({
  value: key,
  label: DIFFICULTIES[key].name,
}));