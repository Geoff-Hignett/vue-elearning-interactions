<template>
	<div class="home">
		this is fdhome
		<PageHero />
	</div>
</template>

<script>
import PageHero from "@/components/PageHero.vue";
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
	name: "HomeView",
	components: {
		PageHero,
	},
};
</script>
