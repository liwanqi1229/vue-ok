<template>
    <div>
        <div id="container">
            <ul id="imgs">
                <li v-for="(item,index) in imgs" :key="index" v-show="index==nowIndex">
                    <img :src="item" alt="">
                </li>
            </ul>
            <ul id="tabs">
                <li v-for="(item,index) in imgs.length" :key="index" :class="{selected:index==nowIndex}" @click="changeImg(index)">
                    <small></small>
                </li>
            </ul> 
            <div id="search">
                <i id="search_pic"><img src="@/assets/images/search.png" alt=""></i>
                <span id="placeholder">搜索作品或作者名称</span>  
            </div>    
        </div>
        <div >
            <ul id="pic">
                <li><img src="@/assets/images/nav-1.jpg" alt=""></li>
                <li><img src="@/assets/images/nav-2.jpg" alt=""></li>
                <li><img src="@/assets/images/nav-3.jpg" alt=""></li>
                <li><img src="@/assets/images/nav-4.jpg" alt=""></li>
            </ul>
            <ul id="word">
                <li>放送表</li>
                <li>分类</li>
                <li>表单</li>
                <li>完结</li>
            </ul>
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            imgs:[
                require('@/assets/images/scroll1.jpg'),
                require('@/assets/images/scroll2.jpg'),
                require('@/assets/images/scroll3.jpg'),
                require('@/assets/images/scroll4.jpg'),
                require('@/assets/images/scroll5.jpg'),
            ],
            nowIndex:0,
            timer:null,
            work:'',
        }
    },
    methods:{
        play(){
            this.timer=setInterval(()=>{
                this.nowIndex++;
            if(this.nowIndex==this.imgs.length){
                this.nowIndex=0;
            }
            },1800);
        },
        changeImg(index){
            this.nowIndex=index;
        }
    },
    mounted(){
        this.play()
    },
}
</script>

<style scoped>
#container{width: 100%;height: 4rem;margin-top:1rem; position: relative;overflow: hidden;}
#imgs li{width: 100%;height: 100%;position: absolute;top:0;left: 0;}
#container img{width: 100%;height: 4rem;}
#tabs{position:absolute;left:40%;bottom:15px;color: #fff;cursor: pointer;}
#tabs li{width: 0.1rem;height: 0.1rem;float: left;line-height: 0.1rem;margin-right: 0.2rem}
#tabs li small{width:100%;height:100%;display:inline-block;border-radius: 5px;background: rgba(255,255,255,0.7);}
#tabs .selected small{background:pink;}
#search{width: 85%;height: 0.5rem;position: absolute;z-index: 6;background: #4C4C4C;opacity: 0.4;border-radius: 0.4rem;margin:0.3rem 0 0 7%;}
#search_pic img{width: 0.4rem;height: 0.4rem;margin-left: 0.2rem;margin-top: 0.03rem;}
#placeholder{color: white;font-size: 16px;line-height: 0.5rem;margin-left: 0.1rem;}

#pic{width: 100%;height: 1rem;display: flex;justify-content: space-evenly;margin-top: 0.2rem;}
#word{width: 98%;height: 0.5rem;display: flex;justify-content: space-evenly;margin-left: 0.1rem;}
#word li:nth-of-type(1){margin-left: -0.2rem;}
#word li:nth-of-type(2){margin-left: 0.1rem;}
#word li:nth-of-type(3){margin-left: 0.3rem;}
#word li:nth-of-type(4){margin-left: 0.3rem;}
</style>
