<style scoped>
.footer{width: 100%;height: 1rem;background:pink;position: fixed;bottom:0;   }
.footer ul{height: 1rem;display:flex;justify-content: space-evenly;}
.footer ul li p{justify-content: space-evenly;}
.footer img{width: 0.6rem;height: 0.5rem;margin-top: 0.05rem;float: left;}
.footer ul li p{margin-left: 0.07rem;}
.footer p:nth-of-type(1){color:#484848;}
</style>
<template>
    <div class="footer">
        <ul>
        <li>
            <router-link to="/cartoon/cartoonList">
                <img :src="pic1" alt="">
                <p>漫画</p>
            </router-link>
        </li>
        <li>
            <router-link to="/focus">
                <img :src="pic2" alt="">
                <p>关注</p>
            </router-link>
        </li>
        <li>
            <router-link to="/discover">
                <img :src="pic3" alt="">
                <p>发现</p>
            </router-link>
        </li>
        <li>
            <router-link to="/my">
                <img :src="pic4" alt="">
                <p>我的</p>
            </router-link>
        </li>
        </ul>
        
    </div>
</template>

<script>
export default {
    props:['pic1','pic2','pic3','pic4']
}
</script>



