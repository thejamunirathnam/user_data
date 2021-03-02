<template>

 <div class="container">
        <h3 class="p-3 text-center">Registered User's Data</h3>
        <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Email</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Avatar</th>
                </tr>
            </thead>
            <tbody id="tdisplay">
                <tr v-for="user in user" :key="user.id">
                            <td>{{user.id}}</td>
                            <td>{{user.email}}</td>
                            <td>{{user.first_name}}</td>
                            <td>{{user.last_name}}</td>
                            <td style="padding: 4px;width: 6%;text-align: center;"><img :src="user.avatar" style="width:50px;height:50px;"/></td>
                  </tr>
            </tbody>
        </table>
        <div style="text-align:center;">
            <v-btn color="primary" dark @click="register">Register
            </v-btn>
        </div>
    </div>    

</template>

<script>
import axios from 'axios';

export default {
   
  name: "Login",
  data () {
      return{

          user:[],

      }
  },
  watch: {
    options: {
      handler() {
        this.readDataFromAPI();
      },
    },
    deep: true,
  },
  created() {
      this.readDataFromAPI();
  },
   mounted() {
    this.readDataFromAPI();
  },

  methods: {
      register(){
           this.$router.push('/RegisterForm');
      },
  
      readDataFromAPI() {
      this.loading = true;
      axios
        .get(
          "https://reqres.in/api/users?page=2" 
        )
        .then((response) => {
          this.loading = false;
          this.user = response.data.data;
        });
       }
    }
};
</script>

