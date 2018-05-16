<template>
    <div class="wraper">
        <div class="search-icon">
        </div>
        <div class="searchBarWrapper">

        </div>
        <div class="search-login">

        </div>
    </div>
</template>
<script>
    export default {
        name:'header',
        data() {
            return {
                text: 1
            }
        }
    }
</script>
<style lang="scss" scoped>
    .wrapper {
        & > div {
            display: inline-block;
            font-size: 0;
            width: 15%;
        }
        .searchBarWrapper {
            width: 68%;
        }
        .search-icon {
            height: 10px;
        }

    }
</style>