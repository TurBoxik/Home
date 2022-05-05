<template>

<header>
  <div class="collapse bg-dark" id="navbarHeader">
    <div class="container">
      <div class="row">
        <div class="col-sm-8 col-md-7 py-4">
          <h4 class="text-white">About</h4>
          <p class="text-muted">JD</p>
        </div>
        <div class="col-sm-4 offset-md-1 py-4">
          <h4 class="text-white">Contact</h4>
          <ul class="list-unstyled">
            <li><a href="https://img.pixers.pics/pho_wat(s3:700/FO/53/38/51/71/700_FO53385171_785dfcdd0396f56ae63b5c51030b1fbd.jpg,606,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,386,650,jpg)/poduszki-dekoracyjne-ork-nerwowy-portret-twarz.jpg.jpg" class="text-white">Dis</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="navbar navbar-dark bg-dark shadow-sm">
    <div class="container">
      <a href="#" class="navbar-brand d-flex align-items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="me-2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
        <strong>Users List</strong>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </div>
</header>

<main>
  <section class="py-5 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light">Api Users</h1>
      </div>
    </div>
  </section>

  <div class="album py-5 bg-light">
    <div class="container">
 <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <UsersApi v-for="user in users[0]" 
            :key="user.id" 
            :name="user.name"
            :avatar="user.avatar"
            :createdAt="user.createdAt"
            :numbers="user.id"
            :j="j"
            :cards="cards"/>
      </div>
  </div>
</div>
</main>
<div class="d-flex justify-content-center">
    <PaginAtion 
      :totalPages="r"
      :perPage="cards"
      :currentPage="currentPage"
      @pagechanged="onPageChange"
      @x="x"
    />
</div>

<footer class="text-muted py-5">
  <div class="container">
    <p class="float-end mb-1">
      <a href="#">Back to top</a>
    </p>
    <p class="mb-1">&copy;JD Mafija</p>
  </div>
</footer>
</template>

<script>
import UsersApi from "./components/UsersApi.vue"
import PaginAtion from './components/PaginAtion.vue'

  export default {
    components:{
     UsersApi, 
     PaginAtion,
    },
 mounted() {
   this.userslist()
 },
  data() {
   return {
     users: [],
     currentPath: window.location.hash,
     currentPage: 1,
     long: null, 
     cards: 8,
     j: null,
     r: 0,
   }
  },
  methods: {
    userslist(){
     fetch('https://626b91876a86cd64adbe2d1f.mockapi.io/api/v1/users')
      .then(response => response.json())
      .then(data => 
      {
        this.users.push(data);
        this.long = this.users[0].length 
        this.rest()
      })
    },
    x(x){
      this.j = x
    },
    onPageChange(page) {
      this.currentPage = page;
    },
    rest(){
      if(this.long % this.cards != 0){
        this.r = this.long / this.cards +1
        this.r = parseInt(this.r) 
      }
      else{
        this.r = this.long / this.cards
      }
    }
  },
  computed: {
  },
}

</script>