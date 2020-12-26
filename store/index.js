import Vue from "vue";
import Vuex from "vuex";
import firebaseAuth from "~/assets/firebase";
Vue.use(Vuex);

const store = () =>
  new Vuex.Store({
    state: () => ({
      userToken: window.localStorage.getItem("token"),
      userEmail: window.localStorage.getItem("email"),
      vip: false
    }),

    mutations: {
      SET_USER(state, { token, email }) {
        state.userToken = token;
        state.userEmail = email;
      },
      REMOVE_USER(state) {
        state.userToken = null;
        state.userEmail = null;
      },
      TOGGLE_VIP(state) {
        state.vip = !state.vip;
      }
    },

    actions: {
      async login(store, { email, password }) {
        const res = await firebaseAuth.signInWithEmailAndPassword(
          email,
          password
        );
        const token = await res.user.getIdToken();
        store.commit("SET_USER", { email, token });
        window.localStorage.setItem("token", token);
        window.localStorage.setItem("email", email);
        return token;
      },
      async signup(store, { email, password }) {
        const res = await firebaseAuth.createUserWithEmailAndPassword(
          email,
          password
        );
        const token = await res.user.getIdToken();
        store.commit("SET_USER", { email, token });
        window.localStorage.setItem("token", token);
        window.localStorage.setItem("email", email);
        return token;
      },
      async logout(store) {
        await firebaseAuth.signOut();
        store.commit("REMOVE_USER");
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("email");
      }
    }
  });

export default store;
