<template>
    <div class="container">
     <router-link to="/estudiante">Estudiante</router-link>
     <router-link to="/token">Token</router-link>
   </div>
 </template>
 
 <script>
 export default {
 
 }
 </script>
 
 <style scoped>
 * {
   font-size: 18px;
   text-decoration: none;
   font-weight: bold;
   color: #ffcf0f;
 }
 a {
   padding: 0px 70px;
   top: 15px;
 }
 
 .container {
   display: flex;
   justify-content: center;
   align-items: center;
   background:#1d6de4;
   position: fixed;
   padding: 0px;
   top: 0px;
   left: 0;
   width: 100%;
   height: 8%;
   border-bottom: 2px solid #1d6de4;
 }
 </style>