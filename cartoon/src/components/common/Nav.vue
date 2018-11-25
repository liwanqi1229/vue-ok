<template>
    <div>
        <div id="container">
           <swipe class="my-swipe">           
                <swipe-item class="slide2"></swipe-item>
                <swipe-item class="slide3"></swipe-item>
                <swipe-item class="slide4"></swipe-item>
                <swipe-item class="slide5"></swipe-item>
                <swipe-item class="slide6"></swipe-item>
            </swipe>
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
import {Swipe,SwipeItem} from 'vue-swipe';
import 'vue-swipe/dist/vue-swipe.css'
export default {
    components: {     
        'swipe':Swipe,
        'swipe-item':SwipeItem,
    }
}
</script>

<style scoped>
.my-swipe{height: 210px;margin:1rem 0;}
.slide2 {background-image: url('/static/img/scroll2.jpg');color: #000;background-size: 100%;}
.slide3 {background-image: url('/static/img/scroll3.jpg');color: #fff;background-size: 100%;}
.slide4 {background-image: url('/static/img/scroll4.jpg');color: #fff;background-size: 100%;}
.slide5 {background-image: url('/static/img/scroll5.jpg');color: #fff;background-size: 100%;}
.slide6 {background-image: url('/static/img/scroll7.jpg');color: #fff;background-size: 100%;}

#search{width: 85%;height: 0.5rem;position: absolute;z-index: 6;background: #4C4C4C;opacity: 0.4;border-radius: 0.4rem;margin:-4.3rem 0 0 7%;}
#search_pic img{width: 0.4rem;height: 0.4rem;margin-left: 0.2rem;margin-top: 0.03rem;}
#placeholder{color: white;font-size: 16px;line-height: 0.5rem;margin-left: 0.1rem;}

#pic{width: 100%;height: 1rem;display: flex;justify-content: space-evenly;margin-top: -0.8rem;}
#word{width: 98%;height: 0.5rem;display: flex;justify-content: space-evenly;margin-left: 0.1rem;}
#word li:nth-of-type(1){margin-left: -0.2rem;}
#word li:nth-of-type(2){margin-left: 0.1rem;}
#word li:nth-of-type(3){margin-left: 0.3rem;}
#word li:nth-of-type(4){margin-left: 0.3rem;}
</style>
