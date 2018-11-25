<template>
    <div>
        <router-view></router-view>
        <common-footer pic1="../../static/img/footer-11.png" pic2="../../static/img/footer-2.png" pic3="../../static/img/footer-33.png" pic4="../../static/img/footer-4.png" class="footer-img"></common-footer>
    </div>
</template>

<script>
import CommonHeader from '../common/Header'
import CommonFooter from '../common/Footer'


export default {
    components:{
        CommonHeader,
        CommonFooter,
       
    }
    
}
</script>

<style scoped>

</style>