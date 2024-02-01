<script setup></script>
<template>
  <div class="loader">
    <div class="cup">
      <div class="handle"></div>
    </div>
  </div>
</template>
<style scoped>
.Loader{
   position: fixed;
   top: 50%;
   left: 50px;
   transform: translate(-50%, 50%);
   z-index: 9999999;
   width: 300px;
   height: 300px;
   border-radius: 50px;
   background: #efb54a;
}
.cup{
	height: 200px;
	width: 160px;
	border: 6px solid #efb54a;
	border-radius: 0 0 30px 30px;
	position: absolute;
	top: 40%;
	left: 40%;
	background: url(https://i.postimg.cc/8z5t32TG/coffee.png);
	box-shadow: 0 0 0 5px #fff;
	animation: fill 3s linear infinite;
	background-repeat: repeat-x;
}

@keyframes fill{
	0%{
		background-position: 0px 200px;
	}
	20%{
		background-position: -450px 100px;
	}
	40%{
		background-position: -900px 50px;
	}
	80%{
		background-position: -1350px 0px;
	}
	100%{
		background-position: 0px 200px;
	}
}

.handle{
	position: relative;
	height: 70px;
	width: 40px;
	border: 6px solid #fff;
	left: 166px;
	top: 50px;
	border-radius: 0 70px 70px 0;
}
</style>
