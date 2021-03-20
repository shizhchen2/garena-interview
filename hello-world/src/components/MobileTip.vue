<template>
    <div class="mask">
        <img src="../assets/scape.jpg" alt="" class="rotate-tip">
    </div>
</template>
<style scoped>
    .mask{
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        background-color: black;
    }
    .rotate-tip{

    }
    @media all and (orientation : portrait){ 
        .mask {
            opacity: 0.5;
        }
        .rotate-tip {
            animation: rotation 1s infinite;
            height: 80vw;
            width: 80vw;
        }
    }
    /* 判断ipad */

    @keyframes rotation {
        0% {
            transform: rotate(-90deg);
        }
        100% {
            transform: rotate(0deg);
        }
    }
</style>