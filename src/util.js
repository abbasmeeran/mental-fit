export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const navDetails = [
  { name: "Dashboard", path: "/home", title: "Home" },
  {
    name: "Mental Stats",
    path: "/mentalstat",
    title: "Mental Stats",
    isALlowed: () => {
      return localStorage.getItem("access_token") != null;
    },
  },
];
