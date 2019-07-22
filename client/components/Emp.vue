<template>
	<div>
		<img
			class="emp-photo"
			:src="emp.photo" 
		/>
		<div class="emp-line">
			<span>社員番号: </span><span>{{ emp.number }}</span>
		</div>
		<div class="emp-line">
			<span>名前: </span><span>{{ emp.name }}</span>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		emp: {
			type: Object,
			default() {
				return {
					number: 0,
					name: ''
				};
			}
		} 
	}
};
</script>

<style>
.emp-photo {
	cursor: pointer;
	height: 100px;
	width: 100px;
}
.emp-line {
	padding: 5px;
}
</style>