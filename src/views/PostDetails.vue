<template>
    <div>
        <div class="breadcrumb">
            <div class="breadcrumb-inner l-container">
                <router-link class="breadcrumb-item" to="/">HOME</router-link>
                <router-link class="breadcrumb-item" to="/post-details">サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキスト
                </router-link>
            </div>
        </div>
        <div class="post-details l-container">
            <div v-if="isLoggedIn" class="post-details-actions">
                <template v-if="isEditPost">
                    <a @click.prevent="save" class="btn text text-underlined" href="#">
                        Save Post
                    </a>
                    <a @click.prevent="cancel" class="btn text text-underlined" href="#">
                        Cancel
                    </a>
                </template>
                <template v-else>
                    <a @click.prevent="edit" class="btn text text-underlined" href="#">
                        Edit Post
                    </a>
                </template>
            </div>
            <div class="post-details-date">2019.06.19</div>
            <template v-if="!isEditPost">
                <h1 class="post-details-title" v-text="postTitle"></h1>
                <img class="post-details-image" :src="postImage" />
                <div class="post-details-content" v-html="postContent"></div>
            </template>
            <template v-else>
                <textarea v-model="editTitle" class="post-details-textarea post-details-title" placeholder="Title"
                    rows="3"></textarea>
                <PostImageField v-model="editImage" />
                <textarea v-model="editContent" class="post-details-textarea post-details-content" placeholder="Content"
                    rows="10"></textarea>
            </template>
            <hr />
            <h1 class="section-title">COMMENT</h1>

            <div v-for="n in 2" :key="n" class="post-details-comment">
                <p>ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。
                </p>
                <span class="post-details-comment-time">3 Months ago</span>
            </div>

            <form @submit.prevent="">
                <textarea class="post-details-textarea" placeholder="Write a Comment" rows="10"></textarea>
                <div class="text-right">
                    <button type="submit" class="btn">
                        SUBMIT
                    </button>
                </div>
            </form>

        </div>
        <Dialog v-model="showCancelConfirmation" title="Discard Changes?" text="Are you sure you want to discard all changes?" @result="onDiscardResult"/>
    </div>
</template>

<script>
    import PostImageField from '@/components/PostImageField.vue';
    import Dialog from '@/components/Dialog.vue';
    import mainPng from '@/assets/images/main.png';

    export default {
        name: 'PostDetails',
        components: {
            PostImageField,
            Dialog
        },
        data() {
            return {
                isEditPost: false,
                postTitle: 'サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキスト',
                postImage: mainPng,
                postContent: `ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。
            
    ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。`,
            

                editTitle: null,
                editImage: null,
                editContent: null,

                showCancelConfirmation: false 
            }
        },
        computed: {
            isLoggedIn: function () {
                return this.$store.getters.isLoggedIn
            },
        },
        methods: {
            edit() {
                var title = this.postTitle, image = this.postImage, content = this.postContent;
                this.editTitle = title;
                this.editImage = image;
                this.editContent = content;
                this.isEditPost = true;
            },
            save() {
                var title = this.editTitle, image = this.editImage, content = this.editContent;
                this.postTitle = title;
                this.postImage = image;
                this.postContent = content;
                this.isEditPost = false;
            },
            cancel() {
                this.showCancelConfirmation = true;
            },
            onDiscardResult(res){
                if(res){
                    this.isEditPost = false;
                }
            }
        }
    }
</script>