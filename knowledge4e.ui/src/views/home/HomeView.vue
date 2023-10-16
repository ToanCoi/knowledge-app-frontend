<template>
	<div class="home w-full">
		<div class="home__header">
			<q-btn color="primary" icon="fa-solid fa-right-to-bracket" label="Login" />

			<q-input
				dark
				dense
				standout
				v-model="text"
				input-class="text-right"
				class="q-ml-md"
				bg-color="info"
			>
				<template v-slot:append>
					<q-icon v-if="text === ''" name="search" />
					<q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
				</template>
			</q-input>
		</div>

		<div class="home__content">
			<div v-for="(roomItem, index) in listRoom" :key="index" class="room__item">
				<div class="room__item-info">
					<div class="room-topic">{{ roomItem.topic }}</div>
					<div class="room-level">{{ roomItem.level }}</div>
				</div>
				<div class="room__item-member">
					<q-btn round class="ml-2 mr-2 mb-2">
						<q-avatar size="60px">
							<img src="https://cdn.quasar.dev/img/avatar2.jpg" />
						</q-avatar>
					</q-btn>
					<q-btn round class="ml-2 mr-2 mb-2">
						<q-avatar size="60px">
							<img src="https://cdn.quasar.dev/img/avatar2.jpg" />
						</q-avatar>
					</q-btn>
					<q-btn round class="ml-2 mr-2 mb-2">
						<q-avatar size="60px">
							<img src="https://cdn.quasar.dev/img/avatar2.jpg" />
						</q-avatar>
					</q-btn>
					<q-btn round class="ml-2 mr-2 mb-2">
						<q-avatar size="60px">
							<img src="https://cdn.quasar.dev/img/avatar2.jpg" />
						</q-avatar>
					</q-btn>
					<q-btn round class="ml-2 mr-2 mb-2">
						<q-avatar size="60px">
							<img src="https://cdn.quasar.dev/img/avatar2.jpg" />
						</q-avatar>
					</q-btn>
					<q-btn round class="ml-2 mr-2 mb-2">
						<q-avatar size="60px">
							<img src="https://cdn.quasar.dev/img/avatar2.jpg" />
						</q-avatar>
					</q-btn>
					<q-btn round class="ml-2 mr-2 mb-2">
						<q-avatar size="60px">
							<img src="https://cdn.quasar.dev/img/avatar2.jpg" />
						</q-avatar>
					</q-btn>
					<q-btn round class="ml-2 mr-2 mb-2">
						<q-avatar size="60px">
							<img src="https://cdn.quasar.dev/img/avatar2.jpg" />
						</q-avatar>
					</q-btn>
					
				</div>

				<q-btn color="primary" label="Join and learn" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
	components: {},
	setup(props) {
		const text = ref('');
		const listRoom = reactive([
			{
				topic: 'Đây là topic',
				level: 'Đây là level',
				member: [
					
				],

			},
		]);

		return {
			text,
			listRoom,
		};
	},
});
</script>


<style scoped lang="scss">
@import '@/views/home/HomeView.scss';
</style>