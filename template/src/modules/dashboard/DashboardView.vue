<template>
    <div class="dashboard-content">
        <vs-row class="dashboard-content--header">
            <vs-col vs-type="flex" vs-justify="left" vs-align="center" vs-w="12">
                <h1>\{{ $t('overview') }}</h1>
            </vs-col>
        </vs-row>

        <vs-row>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3" vs-xs="12">
                <dashboard-card :title="$t('total_orders').concat('/').concat($t('month'))" icon="arrow_upward" iconColor="#27AE60" rentability="13,8%" value="320"/>
            </vs-col>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3" vs-xs="12">
                <dashboard-card :title="$t('average_ticket').concat('/').concat($t('month'))" icon="arrow_upward" iconColor="#27AE60" rentability="5,4%" value="65,27"/>
            </vs-col>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3" vs-xs="12">
                <dashboard-card :title="$t('billing').concat('/').concat($t('month'))" icon="arrow_downward" iconColor="#C0392B" rentability="9,2%" value="5.748,29"/>
            </vs-col>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3" vs-xs="12">
                <dashboard-card :title="$t('orders_with_coupons').concat('/').concat($t('month'))" icon="arrow_downward" iconColor="#C0392B" rentability="2%" value="3%"/>
            </vs-col>
        </vs-row>

    </div>
</template>

<script src="./dashboard.js" />
