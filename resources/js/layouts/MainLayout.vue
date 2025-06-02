<template>
	<div class="page">
		<app-header />
		<sidebar />
		<div class="main-content app-content">
			<div class="container-fluid">
				<slot />
			</div>
		</div>
		<app-footer />
	</div>
</template>

<script>
import { defineComponent } from 'vue'

import AppFooter from '../partials/Footer.vue'
import AppHeader from '../partials/Header.vue'
import Sidebar from '../partials/Sidebar.vue'

export default defineComponent({
	components: { AppFooter, AppHeader, Sidebar },
	name: 'MainLayout',
})
</script>

<style></style>
