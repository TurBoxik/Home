<template>
     <div class="col" v-if="numbers > (j*cards-cards) && numbers <= j*cards">
          <div class="card shadow-sm">
            <img src="https://img.wprost.pl/img/marcin-najman-pod-siedziba-klubu-rakow-czestochowa/74/83/27a6feab8f8245640ba2da8dda49.png" height="225">
            <div class="card-body">
              <p class="card-text"><strong>{{title}}</strong></p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button @click="show">View</button><br>
                </div>
              </div>
            </div>
              <p v-if="toggle == false"></p>
              <p class="text-center p-3" v-else>{{discription}}</p>
              <br><small class="text-muted text-end p-3">{{numbers}}</small>    
          </div>
     </div>
</template>

<script>
export default{
    props:['title', 'discription', 'numbers', 'j', 'cards'],

    mounted(){
 },
    data(){
        return{
            toggle: false,
            shownumber: null,
        }
    },
    methods: {
        show(){
            this.toggle = !this.toggle
        },
    }
}
</script>