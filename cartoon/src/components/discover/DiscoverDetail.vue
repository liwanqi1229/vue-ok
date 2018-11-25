<template>
    <div>
        <div class="top">
            <router-link to="/discover/discoverList">
                <img src="/static/img/back1.png" alt="">
            </router-link>
            
        </div>
        <v-touch class="detail" :style="styleObj" @swipeleft="swipeLeft" @swiperight="swipeRight" @swipedown="swipeDown" @tap="tap"></v-touch>
   </div>
</template>

<script>
export default {
    data(){
        return {              
            nowIndex: 0, //获取用户当前选中的图片的下标
        }
    },
    mounted(){    
        this.nowIndex = this.$route.params.index;
        console.log('接收的参数ID= '+this.nowIndex); //接收route传参     
    },
    computed: {
        styleObj(){
           // console.log('nowindex='+this.nowIndex);
            return{
                background: `#000 url(${this.$store.state.discoverList[this.nowIndex].src}) no-repeat center / contain`   
            }  
        }
    },
    methods: {  
        swipeLeft(){//左右滑动原理: 类似轮播图
            this.nowIndex++;
            if(this.nowIndex == this.$store.state.discoverList.length ){
                this.nowIndex = 0
            }
            //console.log("Left! 左左!");
        },
        swipeRight(){
            this.nowIndex--;
            if(this.nowIndex < 0 ){
                this.nowIndex = this.$store.state.discoverList.length - 1;
            }
            console.log("right!!!");
        },
        swipeDown(){
            console.log("Down!!!");
        },
        tap(){
            this.$router.go(-1);
           // console.log('tappppp');
        }
    }
}
</script>

<style scoped>
.top{width: 100%;height: 1rem;background: pink;}
.top img{margin-left: 0.1rem;margin-top: 0.1rem;}
.detail{margin: 1rem 0; position:absolute; top:0; right:0; bottom:0; left:0;}
</style>