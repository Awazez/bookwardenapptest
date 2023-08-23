import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        user: null
    }),

    getters: {
        isAuthenticated(state) {
            return !!state.user;
        }
    },

    actions: {
        setUser(newUser) {
            this.user = newUser;
        },

        logout() {
            this.user = null;
        }
    }
});