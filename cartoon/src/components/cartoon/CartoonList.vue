<template>
    <div>
        <!--小编推荐-->
        <div id="suggest">
             <p><img src="@/assets/images/pink.png" alt="">  小编推荐</p>
             <span>查看更多</span>
        </div>
        <div id="suggest1">
        <ul id="cartoon-suggest">
            <li @click="goDetail(cartoon.id)" class="cartoon" v-for="cartoon in cartoonSuggest" :key="cartoon.id">
                <div class="cartoon-img"><img :src="cartoon.img" alt=""></div>
                <div class="cartoon-info">
                    <p class="cartoon-name">{{cartoon.nm}}</p>
                    <p>{{cartoon.scm}}</p>
                 </div>
            </li>
        </ul>
        </div>
        
        <!--精品-->
        <div id="jingpin">
             <p><img src="@/assets/images/pink.png" alt=""> 精品佳作</p>
             <span>查看更多</span>
        </div>
        <ul id="cartoon-list">
            <li  @click="goDetail(cartoon.id)" class="cartoon" v-for="cartoon in cartoonList" :key="cartoon.id">
                <div class="cartoon-img"><img :src="cartoon.img" alt=""></div>
                <div class="cartoon-info">
                    <p class="cartoon-name">{{cartoon.nm}}</p>
                    <p>{{cartoon.scm}}</p>
                 </div>
            </li>
        </ul>
         <!--热门-->
        <div id="hot">
             <p><img src="@/assets/images/pink.png" alt="">  热门连载</p>
             <span>查看更多</span>
        </div>
        <ul id="cartoon-hot">
            <li @click="goDetail(cartoon.id)" class="cartoon" v-for="cartoon in cartoonHot" :key="cartoon.id">
                <div class="cartoon-img"><img :src="cartoon.img" alt=""></div>
                <div class="cartoon-info">
                    <p class="cartoon-name">{{cartoon.nm}}</p>
                    <p>{{cartoon.scm}}</p>
                 </div>
            </li>
        </ul>
         
    </div>
</template>

<script>
import Axios from 'axios'
export default {
    data(){
        return{
            cartoonList:[],
            cartoonHot:[],
            cartoonSuggest:[],
            
        }
    },
    methods:{
        loadData(){
            let url1='/static/data/cartoondata.json'
            Axios.get(url1).then((res)=>{
                let cartoonList=res.data.data.cartoons;
                this.cartoonList=cartoonList.slice(0,4)

                let cartoonHot=res.data.data.cartoons;
                this.cartoonHot=cartoonHot.slice(4,8)

                let cartoonSuggest=res.data.data.cartoons;
                this.cartoonSuggest=cartoonSuggest.slice(8,15)
            }
            ).catch()
        },
        goDetail(cartoonId){
            this.$router.push("/cartoon/cartoonDetail/"+cartoonId)
        }

    },
    
    mounted () {
        this.loadData()
    }
}
</script>
<style scoped>
<!--小编推荐-->
#suggest{width: 100%;height: 1rem;position: relative;margin-top: 0.2rem;}
#suggest p{font-size: 18px;line-height: 1rem;margin-left: 0.3rem;}
#suggest img{margin-top: 0.38rem;}
#suggest span{color:#B0B0B0;position: absolute;left: 80%;top: 6.6rem;font-size: 12px;}
#suggest1{flex-wrap: nowrap;justify-content: space-evenly;overflow: auto;}
#suggest1::-webkit-scrollbar{display: none;}
#cartoon-suggest{width:600%;display: flex;}
#cartoon-suggest .cartoon {width: 150%;margin-left: 0.1rem;}
#cartoon-suggest .cartoon .cartoon-img img{height: 2.5rem;width: 150%;} 
.cartoon .cartoon-info p{margin-left: 0.2rem;}
.cartoon .cartoon-info p:nth-of-type(1){color: black;font-size: 18px;}
.cartoon .cartoon-info p:nth-of-type(2){color:#666666;font-size: 14px;}
<!--精品-->
#jingpin{width: 100%;height: 1rem;position: relative;}
#jingpin p{font-size: 18px;line-height: 1rem;margin-left: 0.3rem;}
#jingpin img{margin-top: 0.38rem;}
#jingpin span{color:#B0B0B0;position: absolute;left: 80%;top: 11.08rem;font-size: 12px;}
#cartoon-list{display: flex;flex-wrap: wrap;justify-content: space-evenly;}
.cartoon {width: 49%}
.cartoon .cartoon-img img{height: 2rem;width: 100%;} 
.cartoon .cartoon-info p:nth-of-type(1){color: black;font-size: 18px;}
.cartoon .cartoon-info p:nth-of-type(2){color:#666666;font-size: 14px;}
 <!--热门-->
#hot{width: 100%;height: 1rem;position: relative;margin-top: 0.2rem;}
#hot p{font-size: 18px;line-height: 1rem;margin-left: 0.3rem;}
#hot img{margin-top: 0.38rem;}
#hot span{color:#B0B0B0;position: absolute;left: 80%;top: 18rem;font-size: 12px;}
#cartoon-hot{display: flex;flex-wrap: wrap;justify-content: space-evenly;margin-bottom: 1.3rem;}
.cartoon {width: 49%}
.cartoon .cartoon-img img{height: 2rem;width: 100%;} 
.cartoon .cartoon-info p{margin-left: 0.2rem;}
.cartoon .cartoon-info p:nth-of-type(1){color: black;font-size: 18px;}
.cartoon .cartoon-info p:nth-of-type(2){color:#666666;font-size: 14px;}
 
</style>
