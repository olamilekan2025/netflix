// import { create } from "zustand";

// const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
// const storedAuth = JSON.parse(localStorage.getItem("isAuthenticated")) || false;

// const useAuthStore = create((set, get) => ({
//   isAuthenticated: storedAuth,
//   users: storedUsers,

//   signup: (fullName, email, password) => {
//     const { users } = get();

    
//     if (users.some(u => u.email === email)) return false;

//     const newUser = [...users, { fullName, email, password }];

//     set({ users: newUser });
//     localStorage.setItem("users", JSON.stringify(newUser));

//     return true;
//   },

//   login: (email, password) => {
//     const { users } = get();

//     const user = users.find(
//       (u) => u.email === email && u.password === password
//     );

//     if (user) {
//       set({ isAuthenticated: true });
//       localStorage.setItem("isAuthenticated", "true");
//       return true;
//     }

//     return false;
//   },

//   logout: () => {
//     set({ isAuthenticated: false });
//     localStorage.setItem("isAuthenticated", "false");
//   },
// }));

// export default useAuthStore;



import { create } from "zustand";

// Safe JSON loader
function load(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

const useAuthStore = create((set, get) => ({
  isAuthenticated: load("isAuthenticated", false),
  users: load("users", []),
  currentUser: load("currentUser", null),

  signup: (fullName, email, password) => {
    const { users } = get();

    // Check user exists
    if (users.some((u) => u.email === email)) return false;

    const updatedUsers = [...users, { fullName, email, password }];
    set({ users: updatedUsers });
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    return true;
  },

  login: (email, password) => {
    const { users } = get();

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) return false;

    set({
      isAuthenticated: true,
      currentUser: { fullName: user.fullName, email: user.email },
    });

    localStorage.setItem("isAuthenticated", JSON.stringify(true));
    localStorage.setItem(
      "currentUser",
      JSON.stringify({ fullName: user.fullName, email: user.email })
    );

    return true;
  },

  logout: () => {
    set({
      isAuthenticated: false,
      currentUser: null,
    });

    localStorage.setItem("isAuthenticated", JSON.stringify(false));
    localStorage.removeItem("currentUser");
  },
}));

export default useAuthStore;
