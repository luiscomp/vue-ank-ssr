<template>
    <div class="card">
        <vs-row class="card--header">
            <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-w="12">
                <span class="title">\{{ title }}</span>
            </vs-col>
        </vs-row>

        <vs-row class="card--bottom">
            <vs-col vs-type="flex" vs-justify="left" vs-align="flex-end" vs-w="6">
                <vs-icon :icon="icon" size="small" :color="iconColor" style="float: left"></vs-icon>
                <span style="float: right" :style="{ 'color': iconColor }">{{ rentability }}</span>
            </vs-col>
            <vs-col vs-type="flex" vs-justify=" flex-end" vs-align="flex-end" vs-w="6">
                <span class="value">\{{ value }}</span>
            </vs-col>
        </vs-row>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        },
        iconColor: {
            type: String,
            required: true
        },
        rentability: {
            type: String,
            required: true
        },
        value: {
            type: String,
            required: true
        }
    },
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
@import '~scss/base/_breakpoints.scss';
@import '~scss/base/_colors.scss';

.card {
    width: 100%;
    height: 120px;
    margin: 0px 16px 10px 0px;
    padding: 16px;
    background-color: $card-color;
    border: 1px solid $card-color;
    border-radius: 5px;
    -webkit-transition: all 300ms ease-in;
    -moz-transition: all 300ms ease-in;
    -ms-transition: all 300ms ease-in;
    -o-transition: all 300ms ease-in;
    transition: all 300ms ease-in;

    @media (min-width: $md) {
        margin: 0px 16px;
    }

    &:hover {
        -webkit-box-shadow: 0px 4px 25px 0px $shadow-color;
        -moz-box-shadow: 0px 4px 25px 0px $shadow-color;
        box-shadow: 0px 4px 25px 0px $shadow-color;
    }

    &--header {
        height: calc(50%);

        .title {
            font-size: 18px;
            font-weight: bold;
        }
    }

    &--bottom {
        height: calc(50%);

        .value {
            font-size: 28px;
            font-weight: bold;
            line-height: 18px;
        }
    }
}
</style>
