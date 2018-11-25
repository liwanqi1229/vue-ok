<style scoped>
    .top{width: 100%;height: 3rem;background: pink;}   
    .pic img{width: 100px;height: 100;margin-left: 35%;margin-top: 0.3rem;}
    .click{font-size: 20px;color: white;margin-left: 22%;margin-top: 0.2rem;}
    .focus{width: 100%;height: 0.7rem;border-bottom: 1px solid pink;}
    .fo{font-size: 20px;margin-left: 0.3rem;margin-top: 0.4rem;}
    .fo img{width: 30px;height: 30px;}
    .point{margin-left: 90%;margin-top: -0.5rem;}
    .history{width: 100%;height: 0.7rem;border-bottom: 1px solid pink;}
    .advice{width: 100%;height: 0.7rem;border-bottom: 1px solid pink;}

</style>
<template>
    <div>
        <div class="top">
            <p class="pic"><img src="@/assets/images/denglu.png" alt=""></p>
            <p class="click">戳我立即登录哦QAQ</p>
        </div>
        <div class="con">
            <div class="focus">
                <p class="fo"><img src="@/assets/images/guanzhu.png" alt="">我的关注</p>
                <p class="point"><img src="@/assets/images/dayu.png" alt=""></p>
            </div>
            <div class="history">
                <p class="fo"><img src="@/assets/images/history.png" alt="">浏览历史</p>
                <p class="point"><img src="@/assets/images/dayu.png" alt=""></p>
            </div>
            <div class="advice">
                <p class="fo"><img src="@/assets/images/advice.png" alt="">意见反馈</p>
                <p class="point"><img src="@/assets/images/dayu.png" alt=""></p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>



