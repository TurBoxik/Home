<template>
     <div class="col">
          <div class="card shadow-sm">
            <img src="{{avatar}}" height="225" />
            <div class="card-body">
              <p class="card-text"><strong>{{name}}</strong></p>
              <div class="d-flex justify-content-between align-items-center">
              </div>
            </div>
              <p class="text-center p-3">Data {{createdAt}}</p>
              <br><small class="text-muted text-end p-3">{{numbers}}</small>    
          </div>
     </div>
</template>

<script>
export default{
    props:['name', 'avatar', 'createdAt', 'numbers', 'j', 'cards'],

    mounted(){
 },
    data(){
        return{

        }
    },
    methods: {
    }
}
</script>