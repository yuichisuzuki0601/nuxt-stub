<template>
	<v-app>
		<v-navigation-drawer
			v-model="drawer"
			fixed
			app
		>
			<v-list>
				<v-list-tile
					v-for="(item, i) in items"
					:key="i"
					:to="item.to"
					router
					exact
				>
					<v-list-tile-action>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title v-text="item.title" />
					</v-list-tile-content>
				</v-list-tile>
			</v-list>
		</v-navigation-drawer>
		<v-toolbar
			color="primary"
			dark
			fixed
			app
		>
			<v-toolbar-side-icon @click="drawer = !drawer" />
			<v-toolbar-title v-text="title" />
			<v-spacer />
		</v-toolbar>
		<v-content>
			<v-layout>
				<nuxt />
			</v-layout>
		</v-content>
		<v-footer
			:fixed="fixed"
			app
		>
			<span>&copy; 2019 sample Co.,Ltd.</span>
		</v-footer>
	</v-app>
</template>

<script>
import 'normalize.css';

export default {
	data() {
		return {
			clipped: false,
			drawer: false,
			fixed: false,
			items: [
				{
					icon: 'apps',
					title: 'Emps',
					to: '/'
				},
				{
					icon: 'home',
					title: 'Default Index',
					to: '/default-index'
				},
				{
					icon: 'bubble_chart',
					title: 'Inspire',
					to: '/inspire'
				}
			],
			miniVariant: false,
			right: true,
			rightDrawer: false,
			title: 'Emp Search'
		};
	}
};
</script>
<style scoped>
</style>

