<template>
	<div id="app">
		<div>
			<div id="search-area">
				<v-text-field
					v-model="msg"
					type="text"
					label="Search"
				/>
			</div>
			<v-btn @click="greeting()">
				greeting
			</v-btn>
			<v-btn @click="show()">
				show
			</v-btn>
			<v-btn @click="clear()">
				clear
			</v-btn>
		</div>
		<transition name="fade">
			<div
				v-if="emps.length > 0"
				class="flex-container"
			>
				<div
					v-for="emp in emps"
					:key="emp.id"
					class="flex-item"
				>
					<Emp :emp="emp" />
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
import Emp from '../components/Emp';

export default {
	components: {
		Emp
	},
	data() {
		return {
			msg: '',
			emps: []
		};
	},
	created () {
		fetch('/api/emps').then(res => res.json()).then(json => {
			this.emps = json;
		}).catch(() => {});
	},
	methods: {
		greeting() {
			fetch('/api/greeting').then(res => res.json()).then(json => {
				this.msg = json.msg;
			});
		},
		show() {
			alert(this.msg);
		},
		clear() {
			this.msg = '';
		}
	}
};
</script>

<style>
.fade-enter-active, .fade-leave-active {
	transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
	opacity: 0;
}
#app {
	margin: 0 auto;
	text-align: center;
}
#search-area {
	padding: 30px;
}
.flex-container {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-wrap: wrap;
	flex-wrap: wrap;
	justify-content: flex-start;
}
.flex-item {
	background: #FAFAFA;
	border-radius: 5px;
	box-shadow: 0 2px 5px #CCC;
	color: #2C3E50;
	flex-grow: 1;
	margin: 5px;
	padding: 10px;
	width: 200px;
}
</style>