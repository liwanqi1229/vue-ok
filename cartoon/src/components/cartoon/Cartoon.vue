<template>
    <div>
        <common-header></common-header>
        <common-nav></common-nav>
        <router-view></router-view>
        <common-footer pic1="../../static/img/footer-1.png" pic2="../../static/img/footer-2.png" pic3="../../static/img/footer-3.png" pic4="../../static/img/footer-4.png" class="footer-img"></common-footer>
    </div>
</template>

<script>
import CommonHeader from '../common/Header'
import CommonFooter from '../common/Footer'
import CommonNav from '../common/Nav'

export default {
    components:{
        CommonHeader,
        CommonFooter,
        CommonNav,
    }
    
}
</script>

<style scoped>
.footer-img{}
</style>
