<template>
        <div class="col">
          <div class="card shadow-sm">
            <img src="https://img.wprost.pl/img/marcin-najman-pod-siedziba-klubu-rakow-czestochowa/74/83/27a6feab8f8245640ba2da8dda49.png" height="225">
            <div class="card-body">
              <p class="card-text"><strong>{{title}}</strong></p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button @click="show">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button><br>
                </div>
              </div>
            </div>
              <p v-if="toggle == false"></p>
              <p class="text-center p-3" v-else>{{discription}}</p>
              <br><small class="text-muted text-end p-3">9 mins</small>
          </div>
        </div>
</template>

<script>
export default{
    props:['title', 'discription'],
    data(){
        return{
            toggle: false
        }
    },
    methods: {
        show(){
            this.toggle = !this.toggle
        }
    }
}
</script>