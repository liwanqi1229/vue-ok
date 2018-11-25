<style scoped>
.top{background: pink;width: 100%;height:1rem;position: fixed;z-index:9;margin-top: -1rem;}
h3{font-size: 24px;font-weight: bold;color: white;margin-left: 35%;line-height: 1rem;}
.top img{width: 40px;height: 40px;margin-left: 85%;margin-top: -0.8rem;}
@import url('../../assets/css/common.css');
.list{margin-top: 1rem;}
.list li{width: 50%;height:200px;float:left;margin-bottom: 0.1rem;}
.list li img{width: 100%;height: 100%;}
</style>

<template>
    <div class="father">
        <div class="top">
            <h3>看图发现</h3>
            <p><img src="@/assets/images/sousuo.png" alt=""></p>
        </div>
        <div class="list clearfix">
            <ul>
                <li v-for="(discover, index) in discoverList" :key="index">
                    <router-link :to="'/discover/discoverDetail/'+index">
                        <img :src="discover.src" />
                    </router-link>               
                </li>
            </ul>
        </div>
        
    </div>
</template>

<script>
import Axios from 'axios'
export default {
    data(){
        return {
            discoverList: []
        }
    },
    mounted(){
        let url = '/static/data/discover.json'

        Axios.get(url).then(res => {
           console.log(res)
            this.discoverList = res.data.discoverData
             
            //将数据存入vuex
            this.$store.dispatch('actionDiscoverList', this.discoverList);
           console.log(this.discoverList);
        }).catch()
    }
}

</script>

