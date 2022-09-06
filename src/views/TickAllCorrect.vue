<template>
	<div>
		<PageHero title="Tick All Correct" description="The learner has to tick every option that they think is true." />
		<div class="flex justify-center text-center">
			<div class="flex justify-center flex-col mt-5">
				<div v-for="(statement, index) in getStatements" :key="statement.id" @click="toggleStatement" v-bind:id="statement.elementId" class="flex items-center mb-3">
					<button tabindex="0" class="h-7 w-7 border-2 border-solid border-black mr-5">
						<img :class="{ invisible: !getStatements[index].isSelected }" src="../assets/icons/tick.svg" alt="" />
					</button>
					<p class="">{{ statement.text }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import PageHero from "@/components/PageHero.vue";

export default {
	name: "TickAllCorrect",
	components: {
		PageHero,
	},
	computed: {
		getStatements() {
			const { statements, randomOrder } = this.$store.state.tickAllCorrect;

			if (randomOrder) {
				for (let i = statements.length - 1; i > 0; i--) {
					const j = Math.floor(Math.random() * (i + 1));
					[statements[i], statements[j]] = [statements[j], statements[i]];
				}
			}
			return statements;
		},
	},
	methods: {
		toggleStatement(event) {
			const answerElementId = event.currentTarget.id;
			const answerElementIdLastChar = Number(answerElementId[answerElementId.length - 1]);

			console.log("answer el id is " + answerElementId);
			this.$store.commit("TOGGLE_TICK_ALL_CORRECT_STATEMENT", answerElementIdLastChar);
		},
		lockTickAllCorrect() {},
	},
};
</script>

<style></style>
