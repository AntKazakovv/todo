<template>
    <div id="popup" v-if="true">
		<div id="msg-wrapper">
			<div id="popup-msg">{{msg}}</div>
		</div>
        <div id="dialog-wrapper">
			<div class="but-yes button">Да</div>
			<div class="but-no button">Нет</div>
		</div>
    </div>
</template>

<script>
export default {
    data(){
		return {
			msg: "test message"
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
}

.but-yes{
	
}

.but-no{

}

.button{
	padding: 0px 0px;
}

#msg-wrapper{

}

#dialog-wrapper {
	display: flex;
	justify-content: center;
	padding-bottom: 7px;
}

</style>