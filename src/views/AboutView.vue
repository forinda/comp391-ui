<template>
  <div class="about">
    <div>
      <fa icon="fa-brands fa-twitter" :style="{ color: 'blue' }" size="3x" />
      <fa icon="fa-brands fa-linkedin" :style="{ color: 'blue' }" size="3x" />
      <fa icon="fa-coffee" :style="{ color: 'brown' }" size="3x" />
      <fa icon="fa-brands fa-whatsapp" :style="{ color: 'green' }" size="3x" />
      <fa icon="fa-brands fa-facebook" :style="{ color: 'blue' }" size="3x" />
    </div>
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
