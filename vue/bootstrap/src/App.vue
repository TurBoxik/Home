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
          <h4 class="text-white">Osobistośći</h4>
          <ul class="list-unstyled">
            <li><a href="#" class="text-white">Dis</a></li>
            <li><a href="#" class="text-white">Bedoes</a></li>
            <li><a href="#" class="text-white">Boxdel</a></li>
            <li><a href="#" class="text-white">Mandzio</a></li>
            <li><a href="#" class="text-white">Japczan</a></li>
            <li><a href="#" class="text-white">Najman</a></li>
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

  <section class="py-5 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light">Api Posts</h1>
      </div>
    </div>
  </section>

  <div class="album py-5" style="background-color: #232323">
    <div class="container">
 <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
<PostsApi v-for="post in posts[0]" 
        :key="post.id" 
        :title="post.title"
        :discription="post.body" />
      </div>
  </div>
</div>
</main>

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

  export default {
    components:{
     PostsApi  
    },
 mounted()  {
   this.postss()
 }, 
 data() {
   return {
     posts: [],
     i: null,

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
  }

}


</script>