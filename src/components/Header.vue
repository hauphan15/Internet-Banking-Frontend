<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand>
        <a class="brand" href="/">
          HHBank
        </a>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form>

          <b-nav-item-dropdown v-if="!Islogin" right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>Account</em>
            </template>
            <b-dropdown-item href="#">
              <router-link to="/login">
                Sign in
              </router-link>
            </b-dropdown-item>
            <b-dropdown-item href="#">
              <router-link to="/register">
                Sign up
              </router-link>
            </b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown v-if="Islogin" right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>{{User}}</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return{
      Islogin: false,
      User: "abc"
    }
  },
  mounted() {
    if(localStorage.getItem("myaccesstoken")){
      this.Islogin = true;
      this.User = localStorage.getItem("fullname");
    }
  }
};
</script>

<style >
.brand{
  color:#fff;
}
a:link{
  text-decoration: none!important;
}
a:visited {
  text-decoration: none!important;
}
</style>
