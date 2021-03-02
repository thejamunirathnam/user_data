<template>
  <v-container fluid class="fluid">
    <h3 class="p-3 text-center">New Registration</h3>
    <v-row justify="center" align="center" class="row">
 
      <v-col
        cols="6"
        sm="12"
        md="6"
        xs="12"
        class="text-center form_div">
        
        <v-form ref="form" class="mx-2" v-model="valid" lazy-validation>
          <v-row align="center">
            <v-col cols="6">
              <v-text-field
                v-model="firstname"
                :rules="nameRules"
                label="First Name"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="lastname"
                :rules="nameRules"
                label="Last Name"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Email"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          
          <!-- File uploading -->
         <v-row>
          <v-file-input id="fileinput" truncate-length="30" accept="image/*" :rules="AvatarRules"  label="Avatar" class="mt-5"  required></v-file-input>
          </v-row>
          <v-row>
          <!-- SUbmit and cancel buttons -->
           
          <v-btn class="purple darken-2 white--text  mx-2" @click="submitForm"> 
            Save
          </v-btn>
           <v-btn class="purple darken-2 white--text  mx-2"  @click="cancel"> 
            Cancel
          </v-btn>
           
         </v-row> 


        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import $ from 'jquery';
import axios from 'axios';

export default {
  name: "RegisterForm",
  data: () => ({
    firstname: '',
    lastname: '',
    valid:'',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'E-mail must be valid',
    ],
    AvatarRules:[
      v => !!v || 'File is required',
      v => (v && v.length > 0) || 'File is required',
    ]
  }),
  methods: {
      submitForm () {
        this.$refs.form.validate();
        this.submit_details();
      },

      cancel(){ 
         this.$router.push('/');
      },
    
      submit_details(){
        console.log(this.firstname,this.lastname,this.email,$('#fileinput').prop('files')[0].name );
        axios.post("https://reqres.in//api/users" , {
          firstname: this.firstname,
          lastName: this.lastname ,
          email: this.email,
          avatar:$('#fileinput').prop('files')[0].name
        })
        .then((response) => {
          console.log(response);
          this.$router.push('/'); 
        }, (error) => {
          console.log(error);
          this.$router.push('/'); 
        });
      
       }
      
    }
};
</script>
<style scoped>
.form_div{
    height: 100%;
    border-radius: 24px;
    border: 1px solid #dfe1e5;
    margin-top: 75px;
    background-color: #fff;
    box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
}
</style>
