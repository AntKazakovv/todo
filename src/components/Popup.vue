<template>
    <div id="popup" v-if="$store.state.popup.show">
		<div id="msg-wrapper">
			<div id="popup-msg">{{$store.state.popup.msg}}</div>
		</div>
        <div id="dialog-wrapper">
			<div class="but-yes button" @click="allow(true)">Да</div>
			<div class="but-no button" @click="allow(false)">Нет</div>
		</div>
    </div>
</template>

<script>
export default {
	props: ['callb'],
	methods: {
		allow(answer){
			if(answer){
				this.callb()
			}
			this.$store.commit('hidePopup')
		}
	}
}
</script>

<style>

#popup {
	position: fixed;
	width: 556px;
	height: 245px;
	top: calc(50% - 134px);
	background: #d7d4d4f7;
	border-radius: 11px;
	right: calc(50% - 290px);
	box-shadow: 0px 0px 7px -1px black;
	align-content: center;
	display: grid;
	grid-template-rows: 3fr 1fr;
	align-items: center;
	justify-content: center;
}

#popup-msg {
	font-size: 2em;
	color: #333131;
	width: 342px;
    font-weight: 600;
	text-align: center;
}



.button {
	padding: 7px 34px;
	background-color: #978888;
	margin: 3px 10px;
	color: white;
	border-radius: 6px;
	font-size: 1.6em;
	margin-bottom: 11px;
	font-weight: 400;
}

.button:active{
	background-color: #7b6464;
}

#msg-wrapper{

}

#dialog-wrapper {
	display: flex;
	justify-content: center;
	padding-bottom: 7px;
}

</style>