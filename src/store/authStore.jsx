import { create } from "zustand";


const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
const storedAuth = JSON.parse(localStorage.getItem("isAuthenticated")) || false;

const useAuthStore = create((set, get) => ({
  isAuthenticated: storedAuth,
  users: storedUsers,

  signup: (email, password) => {
    const { users } = get();
    if (users.some(u => u.email === email)) return false; 

    const newUsers = [...users, { email, password }];
    set({ users: newUsers });

   
    localStorage.setItem("users", JSON.stringify(newUsers));
    return true;
  },

  login: (email, password) => {
    const { users } = get();
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      set({ isAuthenticated: true });
      localStorage.setItem("isAuthenticated", "true");
      return true;
    }
    return false;
  },

  logout: () => {
    set({ isAuthenticated: false });
    localStorage.setItem("isAuthenticated", "false");
  },
}));

export default useAuthStore;
