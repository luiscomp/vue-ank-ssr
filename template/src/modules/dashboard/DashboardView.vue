<template>
    <div class="dashboard-content">
        <vs-row class="dashboard-content--header">
            <vs-col vs-type="flex" vs-justify="left" vs-align="center" vs-w="12">
                <h1>{{ $t('visao_global') }}</h1>
            </vs-col>
        </vs-row>

        <vs-row>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3" vs-xs="12">
                <estatistica-card :title="$t('total_pedidos').concat('/').concat($t('mes'))" icon="arrow_upward" iconColor="#27AE60" rentability="13,8%" value="320"/>
            </vs-col>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3" vs-xs="12">
                <estatistica-card :title="$t('ticket_medio').concat('/').concat($t('mes'))" icon="arrow_upward" iconColor="#27AE60" rentability="5,4%" value="65,27"/>
            </vs-col>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3" vs-xs="12">
                <estatistica-card :title="$t('faturamento_total').concat('/').concat($t('mes'))" icon="arrow_downward" iconColor="#C0392B" rentability="9,2%" value="5.748,29"/>
            </vs-col>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3" vs-xs="12">
                <estatistica-card :title="$t('pedidos_com_cupom').concat('/').concat($t('mes'))" icon="arrow_downward" iconColor="#C0392B" rentability="2%" value="3%"/>
            </vs-col>
        </vs-row>

    </div>
</template>

<script src="./dashboard.js" />
