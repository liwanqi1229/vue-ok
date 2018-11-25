<style scoped>
    .top{height: 1rem;background: white;}
    .back img{width:25px;height: 25px;margin-left: 0.3rem;margin-top: 0.3rem;}
     h3{width:120px;height:0.7rem;overflow: hidden;text-overflow: ellipsis;white-space: nowrap; margin-left: 10%;margin-top: -0.55rem;font-weight: bold;}
    .attention{color: white;background:#FF4F6C;width: 55px;height: 30px;border-radius: 12px;line-height: 30px;margin-left:4rem; margin-top: -0.6rem;}
    .down img{width: 30px;height: 30px;margin-left:5.2rem; margin-top: -0.49rem;}
    .share img{width: 30px;height: 30px;margin-left:5.8rem; margin-top: -0.94rem;}
    .title{color:white;font-size:22px;margin-top: -1rem;margin-left: 0.3rem;}
    .introduce{color: white;font-size: 16px;margin-left: 0.3rem;margin-top: -0.1rem;}
    .box{height: 0.7rem;border-bottom: 7px solid #F5F5F5;}
    .no{font-size: 18px;margin-left: 0.3rem;margin-top: 0.1rem;}
    .begin{font-size: 18px;margin-left: 2.5rem;margin-top: -0.55rem;width: 200px;height: 30px;background: #FF4F6C;color: white;border-radius:10px;text-align: center;}
    .detail-title{font-size: 20px;color: #FF4F6C;text-align: center;}
    .detail-content{font-size: 18px;color: rgb(126, 89, 120);text-align: center;width: 90%;height: 3rem;margin-left: 5%;}
</style>
<template>
    <div>
       <div class="top">
           <p class="back">
                <router-link to="/cartoon/CartoonList">
                    <img src="/static/img/back.png" alt="">
                </router-link>
           </p>
           <h3>{{cartoonDetail.title}}</h3>
           <p class="attention">&nbsp;+ 关注</p>
           <p class="down"><img src="/static/img/down.png" alt=""></p>
           <p class="share"><img src="/static/img/share.png" alt=""></p>
       </div>
       <div class="cartoon-img">
           <img :src="cartoonDetail.src" alt="">
           <p class="title">{{cartoonDetail.title}}</p>
           <p class="introduce">{{cartoonDetail.disa}} {{cartoonDetail.disb}} {{cartoonDetail.disc}} </p>
       </div>
       <div class="box">
           <p class="no">暂未阅读</p>
           <p class="begin">开始阅读</p>
       </div>
       <div class="detail">
           <p class="detail-title">详情</p>
           <span class="detail-content">{{cartoonDetail.detail}}</span>
       </div>
             
    </div>
</template>

<script>
import Axios from 'axios'
export default {
    data(){
        return{
            cartoonDetail:{}
        }
    },
    mounted(){
        let url = "/static/data/cartoondetail"+this.$route.params.cartoonId+'.json' 
        Axios.get(url).then( res => {
            this.cartoonDetail = res.data;
            console.log(res)
        }).catch()

    }
}
</script>



