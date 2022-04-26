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
            <a href="#/ff">FF</a>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="navbar navbar-dark bg-dark shadow-sm">
    <div class="container">
      <a href="#" class="navbar-brand d-flex align-items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="me-2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
        <strong>Posts Album</strong>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </div>
</header>

<main>
          <component :is="currentView" />
  <section class="py-5 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light">Api Posts</h1>
      </div>
    </div>
  </section>

  <div class="album py-5 bg-light">
    <div class="container">
 <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
<PostsApi v-for="post in posts[0]" 
        :key="post.id" 
        :title="post.title"
        :discription="post.body" 
        :numbers="post.id"
        :l="this.l"/>
      </div>
  </div>
</div>
</main>

<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item">
      <a @click="change('-')" class="page-link" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        </a>
        </li>
    <li class="page-item"><a class="page-link" >1</a></li>
    <li class="page-item"><a class="page-link" @click="site()">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a  @click="change('+')" class="page-link" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>

<footer class="text-muted py-5">
  <div class="container">
    <p class="float-end mb-1">
      <a href="#">Back to top</a>
    </p>
    <p class="mb-1">&copy;JD Mafija</p>
    <p class="mb-0"><a href="/docs/5.0/getting-started/introduction/"></a>.</p>
  </div>
</footer>
</template>

<script>
import PostsApi from "./components/PostsApi.vue"
import FF from './components/FF.vue'

const routes = {
  '/ff': FF,
}

  export default {
    components:{
     PostsApi  
    },
 mounted()  {
   this.postss(),
    window.addEventListener('hashchange', () => {
    this.currentPath = window.location.hash
  })
 },
  data() {
   return {
     posts: [],
     i: null,
     l: 1,
     currentPath: window.location.hash,
   }
  },
  methods: {
    postss() {
     fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => 
      {
        this.posts.push(data); 
      })
      
   },
    change(operation){
    switch (operation){
      case '+': 
      if(this.l != this.posts[0].length){
         this.l += 6
      }
      break;
      
      case '-': 
      if(this.l != 1){
         this.l -= 6
      }
      break;
    }  
    },
    site(){
      this.l += 6
      console.log(this.l)
    }
  },
  
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/']
    }
  },
}

</script>