<template>
	<div>
		<PageHero title="Tick All Correct" description="The learner has to tick every option that they think is true." />
		<div class="flex justify-center text-center">
			<div class="flex justify-center flex-col mt-5">
				<div v-for="question in getQuestions" :key="question.id" @click="toggleAnswer" v-bind:id="question.elementId" class="flex items-center mb-3">
					<button tabindex="0" class="h-7 w-7 border-2 border-solid border-black mr-5">
						<img :class="{ invisible: !tickIsVisible }" src="../assets/icons/tick.svg" alt="" />
					</button>
					<p class="">{{ question.text }}</p>
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
		getQuestions() {
			const questions = this.$store.state.tickAllCorrect.questions;
			if (this.$store.state.tickAllCorrect.randomOrder) {
				for (let i = questions.length - 1; i > 0; i--) {
					const j = Math.floor(Math.random() * (i + 1));
					[questions[i], questions[j]] = [questions[j], questions[i]];
				}
				return questions;
			} else {
				return this.$store.state.tickAllCorrect.questions;
			}
		},
	},
	methods: {
		toggleAnswer(event) {
			const answerElementId = event.currentTarget.id;
			const answerElementIdLastChar = Number(answerElementId[answerElementId.length - 1]);
			// const questions = this.$store.state.tickAllCorrect.questions;

			console.log("answer el id is " + answerElementId);

			// for (let i = 0; i < questions.length; i++) {
			// 	const questionId = questions[i].id;
			// 	if (questionId == answerElementIdLastChar) {
			// 		console.log("the question id is" + questionId);
			// 		console.log("the question id is here with " + questionId);
			// 	}
			// }
			// this.$store.commit("TOGGLE_TICK_ALL_CORRECT_ANSWER", answerElementIdLastChar);
			// console.log(this.$store.state.tickAllCorrect);
			this.$store.commit("TOGGLE_TICK_ALL_CORRECT_ANSWER", answerElementIdLastChar);
		},
		lockTickAllCorrect() {},
	},
};
</script>

<style></style>
