<template>
    <div class="ank-full-content">
        <vs-navbar class="ank-navbar" style="background-color: #FFFFFF">
            <div slot="title">
                <vs-navbar-title>
                    \{{ $t('app_name') }}
                </vs-navbar-title>
            </div>
            <vs-navbar-item index="0">
                <a href="/">\{{ $t('sair') }}</a>

            </vs-navbar-item>
        </vs-navbar>

        <section el="main" class="ank-main">
            <vs-sidebar class="ank-main--sidebar" :default-index="menus[0].nome" :reduce="true" static-position hidden-background :parent="$refs.main" color="primary" spacer>
                <div class="ank-sidebar-header" slot="header">
                    <div class="ank-sidebar-header">
                        <div class="ank-sidebar-header--content">
                            <vs-avatar size="70px" src="https://scontent.fthe3-1.fna.fbcdn.net/v/t1.0-9/26196419_1510007365763973_5171093865577357015_n.jpg?_nc_cat=100&_nc_ht=scontent.fthe3-1.fna&oh=34f869b01414ab72802f2d02748fb11a&oe=5D3AA27A"/>
                        </div>
                    </div>
                </div>

                <template v-for="(menu, i) in menus">
                    <vs-sidebar-group v-if="menu.submenus" :title="$t(menu.nome)" :key="i">
                        <template v-for="(submenu, j) in menu.submenus">
                            <vs-sidebar-group v-if="submenu.submenus" :title="$t(submenu.nome)" :key="j">
                                <vs-sidebar-item v-for="(sub_submenu, k) in submenu.submenus" :index="sub_submenu.nome" :icon="sub_submenu.icone" :key="k" :to="sub_submenu.path">
                                    \{{ $t(sub_submenu.nome) }}
                                </vs-sidebar-item>
                            </vs-sidebar-group>

                            <vs-sidebar-item v-else :index="submenu.nome" :icon="submenu.icone" :key="j" :to="submenu.path">
                                \{{ $t(submenu.nome) }}
                            </vs-sidebar-item>
                        </template>

                    </vs-sidebar-group>

                    <vs-sidebar-item v-else :index="menu.nome" :icon="menu.icone" :key="i" :to="menu.path">
                        \{{ $t(menu.nome) }}
                    </vs-sidebar-item>
                </template>

                <div class="ank-sidebar-footer" slot="footer">

                </div>
            </vs-sidebar>

            <section class="ank-main--content">
                <router-view/>
            </section>
        </section>
    </div>
</template>

<script src="./principal.js"/>
