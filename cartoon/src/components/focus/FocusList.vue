<template>
    <div>
        <div class="top">热门关注</div>
        <div class="nav">
            <ul class="week">
                <li>周日</li>
                <li>周一</li>
                <li>周二</li>
                <li>周三</li>
                <li>周四</li>
                <li>周五</li>
                <li>今天</li>
            </ul>
        </div>
        <div>
            <ul class="focus-list">
                <li  class="focus" v-for="focus in focusList" :key="focus.id">
                    <div class="focus-img"><img :src="focus.img" alt="">
                        <p class="focus-name">{{focus.nm}}</p>
                        <p class="talk">{{focus.pn}}</p>
                    </div>
                    
                </li>
                <div class="loading" v-show="loadingShow">
                    <img src="@/assets/images/timg.gif" alt="">
                </div>    
                <div class="tip" v-show="tip">
                    <h4>已到世界尽头</h4>
                </div>
            </ul>        
        </div>
    </div>
</template>
<script>
import Axios from 'axios'
export default {
    data(){
        return{
            focusList:[],
            loadingShow:false,
            tip:false,
        }
    },
    methods:{
        loadData(){ //封装为函数
            /* let url1=API_PROXY + "http://m.maoyan.com/focus/list.json?type=hot&limit=10&offset="  */
            let url2='/static/data/focusdata.json'
            
            Axios.get(url2).then((res)=>{
                console.log(res)
                let list=res.data.data.focus;
                let data=list.slice(this.focusList.length,this.focusList.length+5)
                if(data.length<5){
                    this.tip=true;
                }
                this.focusList=this.focusList.concat(data);
                }).catch(
                    ()=>{
                    alert('错误')
                }
            )
        },
       
    },
    mounted(){
         this.loadData()
         window.onscroll=()=>{
             let clientHeight = document.documentElement.clientHeight;
             let scrollTop = document.documentElement.scrollTop;
             let scrollHeight = document.documentElement.scrollHeight;
             if( scrollTop+clientHeight >= scrollHeight-110){ //110是底部导航的高度.
                console.log('这里是世界尽头: '+this.tip, this.loadingShow);
                this.loadingShow = true; //当前页数据获取完毕后加载动画
                if(!this.tip){
                this.loadData();   
                }else{
                    this.loadingShow = false;
                }
            }     
         }    
    },
    
}
</script>
<style scoped>
.top{width: 100%;height: 1rem;background: pink;color: white;text-align: center;line-height: 1rem;font-size: 22px;}
.nav{width: 100%;height: 0.5rem;margin-top: 0.1rem;}
.nav .week{display: flex;justify-content: space-evenly;color: rgb(177, 174, 174);}
.nav .week li:nth-of-type(7){color: black;}
.focus-list{ margin:  0;margin-bottom: 1.2rem;}
.focus{padding: 0.01rem;margin-bottom: 0.1rem;}
.focus .focus-name{height: 0.6rem;margin-top: -1rem;margin-left: 0.2rem;color: white;font-size: 20px;font-weight: bold;}
.focus .talk{margin-left: 0.2rem;color: white;}
.loading{margin-bottom: 1rem;text-align: center;}
.tip{ text-align: center;}

</style>

