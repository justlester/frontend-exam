<template>
    <div>
        <div class="breadcrumb">
            <div class="breadcrumb-inner l-container">
                <router-link class="breadcrumb-item" to="/">HOME</router-link>
                <router-link class="breadcrumb-item" to="/post-details">サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキスト</router-link>
            </div>
        </div>
        <div class="post-details l-container">
            <div class="post-details-date">2019.06.19</div>
            <h1 class="post-details-title">サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキスト</h1>
            <img class="post-details-image" src="@/assets/images/main.png"/>
            <div class="post-details-content">
                <p>ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。</p>
                <p>ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。</p>
            </div>
            <hr />
            <h1 class="section-title">COMMENT</h1>

            <div class="post-details-comment">
                <p>ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。</p>
                <span class="post-details-comment-time">3 Months ago</span>
            </div>

            <div class="post-details-comment">
                <p>ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。</p>
                <span class="post-details-comment-time">3 Months ago</span>
            </div>

            <form @submit.prevent="">
                <textarea class="post-details-comment-box" rows="10"></textarea>
                <div class="text-right">
                    <button type="submit" class="btn">
                        SUBMIT
                    </button>
                </div>
            </form>

        </div>
    </div>
</template>

<script>
import mainPng from '@/assets/images/main.png';
    export default {
        name: 'PostDetails',
        data(){
            return {
                   sampleImage: mainPng,
            }
        }
    }
</script>