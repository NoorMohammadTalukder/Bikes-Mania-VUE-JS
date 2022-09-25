<template>
  <nav class="navbar navbar-expand-lg navbar-light  ">
    <div class="container-fluid">
      <a class="navbar-brand " href="#">Bikes Mania</a>
  
      <button
        class="navbar-toggler "
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <!-- <a class="nav-link active text-white" aria-current="page" href="/home">Home</a> -->
            <router-link class="nav-link active " aria-current="page" to="/home">Home</router-link>
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link active text-white" aria-current="page" href="/bikes-list">Latest Bikes</a> -->
            <router-link class="nav-link active" aria-current="page" to="/bikes-list">Latest Bikes</router-link>
          </li>
          
          <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><router-link class="nav-link active " aria-current="page" to="/admin-login">Admin Logon</router-link></li>
          </ul>
        </li>

        </ul>
      </div>
    </div>
  </nav>
</template>
