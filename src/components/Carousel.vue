<template>
    <div class="carousel">
        <a @click.prevent="prev" href="#" class="carousel-prev">
            <i class="arrow left"></i>
        </a>
        <div class="carousel-imgs">
            <div v-for="(item,i) in items" :key="item.id"
                :class="{
                    'carousel-img' : true, 
                    'is-next-to-show' : isNextToShow(i),
                    'is-prev-to-show': isPrevToShow(i),
                    'is-leaving-next' :item.isLeavingNext ,
                    'is-entering-next': item.isEnteringNext,
                    'is-leaving-prev': item.isLeavingPrev,
                    'is-entering-prev': item.isEnteringPrev,
                }"
                :style="{'background-image': `url('${item.img}')` }">
                <span class="carousel-img-title">
                    サンプルテキスト
                </span>
                 <span class="carousel-img-title">
                    サンプル ルテキスト
                   </span>
                 <span class="carousel-img-title">
                    サンプルテキスト
                </span>
                <h1 class="carousel-img-date">2019.06.19</h1>
            </div>
        </div>
        <a @click.prevent="next" href="#" class="carousel-next">
            <i class="arrow right"></i>
        </a>
        <div class="carousel-dots">
            <template v-for="item in items">
                <a @click.prevent="moveToSlide(item.id)" href="#" :key="item.id" :class="{ 'carousel-dot': true, 'is-active': item.active }"></a>
            </template>
        </div>
    </div>
</template>

<script>
import mainPng from '@/assets/images/main.png';

export default {
    name: 'Carousel',
    data() {
        return {
            sampleImage: mainPng,
            items: [
                {
                    id: 1,
                    img: mainPng,
                    active: true,
                    isEnteringNext: false,
                    isLeavingNext: false,
                    isEnteringPrev: false,
                    isLeavingPrev: false,
                },
                {
                    id: 2,
                    img: mainPng,
                    active: false,
                    isEnteringNext: false,
                    isLeavingNext: false,
                    isEnteringPrev: false,
                    isLeavingPrev: false,
                },
                {
                    id: 3,
                    img: mainPng,
                    active: false,
                    isEnteringNext: false,
                    isLeavingNext: false,
                    isEnteringPrev: false,
                    isLeavingPrev: false,
                },
            ],
            isPrevRunning: false,
            isNextRunning: false,

            autoPlayStartDelay: null,
            autoPlayInstance: null,
        }
    },
    computed: {
        currentActive(){
            var temp = this.items.filter(x=>x.active);
            return temp.length ? temp[0] : null;
        },
    },
    mounted(){
        this.autoPlay();
    },
    watch: {
        isNextRunning: function(){
            this.determineAutoPlay();
        },
        isPrevRunning: function(){
            this.determineAutoPlay();
        }
    },
    methods: {
        autoPlay(){
            var that = this;
            this.autoPlayInstance = setInterval(()=>{
                that.next();
            },10000);
        },
        determineAutoPlay(){
            var that = this;
            clearInterval(this.autoPlayInstance);
            clearTimeout(this.autoPlayStartDelay);
            this.autoPlayStartDelay = setTimeout(()=>{
                that.autoPlay();
            },3000);
        },
        prev(){
            if(!this.isPrevRunning){
                this.isPrevRunning= true;
                var that = this, 
                    temp = this.items,
                    arrayLength = temp.length,
                    currentIndex = this.currentActiveIndex(),
                    lastIndex = null;
                if(currentIndex > -1){
                    lastIndex = currentIndex;
                    if(currentIndex == 0){
                            currentIndex = arrayLength ? arrayLength - 1 : 0;
                    }else{
                            currentIndex--;
                    }
                    temp[lastIndex].active = false;
                    temp[lastIndex].isLeavingPrev = true;
                    temp[currentIndex].active = true;
                    temp[currentIndex].isEnteringPrev = true;
                    this.items = temp;  
                    setTimeout(()=>{
                        temp[lastIndex].isLeavingPrev = false;
                        temp[currentIndex].isEnteringPrev = false;
                        that.items = temp;  
                        that.isPrevRunning = false;
                    },500);
                }else this.isPrevRunning = false;
            }
        },
        next(){
            if(!this.isNextRunning){
                this.isNextRunning = true;
                var that = this, 
                    temp = this.items, 
                    arrayLength = temp.length, 
                    currentIndex = this.currentActiveIndex(),
                    lastIndex = null;
                if(currentIndex > -1){
                    lastIndex = currentIndex;
                    if(currentIndex == (arrayLength-1)){
                            currentIndex = 0;
                    }else{
                            currentIndex++;
                    }
                    temp[lastIndex].active = false;
                    temp[lastIndex].isLeavingNext = true;
                    temp[currentIndex].active = true;
                    temp[currentIndex].isEnteringNext = true;
                    this.items = temp; 
                    setTimeout(()=>{
                        temp[lastIndex].isLeavingNext = false;
                        temp[currentIndex].isEnteringNext = false;
                        that.items = temp;
                        that.isNextRunning = false; 
                    },500);
                }
            }else this.isNextRunning = false;
        },
        moveToSlide(id){
            var that = this, temp = this.items,
                selectedIndex = temp.findIndex(x=>x.id==id),
                lastSelectedIndex = this.currentActiveIndex();
            if(selectedIndex > -1 && lastSelectedIndex > -1){
                if(selectedIndex > lastSelectedIndex){
                    if(!this.isNextRunning){
                        this.isNextRunning = true;
                        temp[lastSelectedIndex].active = false;
                        temp[lastSelectedIndex].isLeavingNext = true;
                        temp[selectedIndex].active = true;
                        temp[selectedIndex].isEnteringNext = true;
                        this.items = temp;
                        setTimeout(()=>{
                            temp[lastSelectedIndex].isLeavingNext = false;
                            temp[selectedIndex].isEnteringNext = false;
                            that.items = temp;  
                            that.isNextRunning = false;
                        },500);
                    }
                }else {
                    if(!this.isPrevRunning){
                        this.isPrevRunning = true;
                        temp[lastSelectedIndex].active = false;
                        temp[lastSelectedIndex].isLeavingPrev = true;
                        temp[selectedIndex].active = true;
                        temp[selectedIndex].isEnteringPrev = true;
                        this.items = temp;
                        setTimeout(()=>{
                            temp[lastSelectedIndex].isLeavingPrev = false;
                            temp[selectedIndex].isEnteringPrev = false;
                            that.items = temp;  
                            that.isPrevRunning = false;
                        },500);
                    }
                }
            }
        },
        isNextToShow(i){
            var selectedIndex = this.currentActiveIndex();
            if(selectedIndex == (this.items.length - 1)){
                return i == 0;
            }else {
                return (selectedIndex + 1) == i;
            }
        }
        ,isPrevToShow(i){
            var selectedIndex = this.currentActiveIndex();
            if(selectedIndex == 0){
                return (this.items.length - 1) == i;
            }else {
                return (selectedIndex - 1) == i;
            }
        },
        currentActiveIndex(){
            return this.items.findIndex(x=>x.active);
        },
    }
}
</script>