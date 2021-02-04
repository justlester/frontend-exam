<template>
    <div>
        <div class="breadcrumb">
            <div class="breadcrumb-inner l-container">
                <router-link class="breadcrumb-item" to="/">HOME</router-link>
                <router-link class="breadcrumb-item" to="/create-new-post">Create New Post</router-link>
            </div>
        </div>

        <div class="post-details l-container">
            <div class="post-details-actions">
                <a @click.prevent="save" class="btn text text-underlined" href="#">
                    Save Post
                </a> 
                <a @click.prevent="cancel" class="btn text text-underlined" href="#">
                    Cancel
                </a> 
            </div>
            <div class="post-details-date">2019.06.19</div>
            <textarea class="post-details-textarea post-details-title" placeholder="Title" rows="3"></textarea>
            <PostImageField v-model="postImage" />
            <textarea class="post-details-textarea post-details-content" placeholder="Content" rows="10"></textarea>

        </div>
        <Dialog v-model="showCancelConfirmation" title="Discard Changes?" text="Are you sure you want to discard all changes?" @result="onDiscardResult"/>
    </div>
</template>

<script>
    import PostImageField from '@/components/PostImageField.vue';
    import Dialog from '@/components/Dialog.vue';

    export default {
        name: 'CreateNewPost',
        components: {
            PostImageField,
            Dialog
        },data(){
            return {
                postImage: null,
                showCancelConfirmation: false,
            }
        },
        methods: {
            save(){
                this.$router.push('/post-details');
            },
            cancel(){
                this.showCancelConfirmation = true;
            },
            onDiscardResult(res){
                if(res){
                    this.$router.push('/');
                }
            }
        }
    }
</script>