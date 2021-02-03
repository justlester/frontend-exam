<template>
    <div class="carousel">
        <a @click.prevent="prev" href="#" class="carousel-prev">
            <i class="arrow left"></i>
        </a>
        <div class="carousel-imgs">
            <div v-for="item in items" :key="item.id" class="carousel-img" :style="{'background-image': `url('${item.img}')` }">
                <span class="carousel-img-title">
                    サンプルテキスト
                </span>
                 <span class="carousel-img-title">
                    サンプル ルテキスト
                   </span>
                 <span class="carousel-img-title">
                    サンプルテキスト
                </span>
                <h1 class="carousel-date">2019.06.19</h1>
            </div>
        </div>
        <a @click.prevent="next" href="#" class="carousel-next">
            <i class="arrow right"></i>
        </a>
        <div class="carousel-dots">
            <template v-for="item in items">
                <a @click.prevent="page(item.id)" href="#" :key="item.id" :class="{ 'carousel-dot': true, 'is-active': item.active }"></a>
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
                },
                {
                    id: 2,
                    img: mainPng,
                    active: false,
                },
                {
                    id: 3,
                    img: mainPng,
                    active: false,
                },
            ]
        }
    },
    computed: {
        currentActive(){
            return this.items.filter(x=>x.active);
        }
    },
    methods: {
        prev(){
            var temp = this.items;
            var index = temp.findIndex(x=> x.active);
            var arrayLength = temp.length;
            if(index > -1){
                temp.forEach(x=>x.active=false);
                if(index == 0){
                        index = arrayLength ? arrayLength - 1 : 0;
                }else{
                        index--;
                }
                temp[index].active = true;
                this.items = temp; 
            }
        },
        next(){
            var temp = this.items;
            var index = temp.findIndex(x=> x.active);
            var arrayLength = temp.length;
            if(index > -1){
                temp.forEach(x=>x.active=false);
                if(index == (arrayLength-1)){
                        index = 0;
                }else{
                        index++;
                }
                temp[index].active = true;
                this.items = temp; 
            }
        },
        page(id){
            var temp = this.items;
            var index = temp.findIndex(x=>x.id==id);
            if(index > -1){
                temp.forEach(x=>x.active=false);
                temp[index].active = true;
                this.items = temp; 
            }
        }
    }
}
</script>