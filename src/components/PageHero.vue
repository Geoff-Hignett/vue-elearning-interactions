<template>
	<section class="text-center py-5">
		<h1 class="mb-3">{{ title }}</h1>
		<p>{{ description }}</p>
	</section>
</template>

<script>
export default {
	name: "PageHero",
	props: ["title", "description"],
	components: {
		// HelloWorld,
	},
};
</script>

<style></style>
