<template>
  <div class="w-full justify-center sm:block custom_center">
    <div class="max-w-xs">
      <div class="bg-white shadow-xl rounded-lg py-3">
        <div class="photo-wrapper p-2">
          <img
            class="w-32 h-32 rounded-full mx-auto object-cover"
            src="https://res.cloudinary.com/jalvarez/image/upload/v1626517567/sample.jpg"
            alt="John Doe"
          />
        </div>
        <div class="p-2">
          <h3 class="text-center text-xl text-gray-900 font-medium leading-8">Joh Doe</h3>
          <div class="text-center text-gray-400 text-xs font-semibold">
            <p>Web Developer</p>
          </div>
          <h3 class="text-center text-xl text-gray-900 font-medium leading-8">Joh Doe</h3>
          <h3 class="text-center text-xl text-gray-900 font-medium leading-8">Joh Doe</h3>
          <h3 class="text-center text-xl text-gray-900 font-medium leading-8">Joh Doe</h3>

          <div class="text-center my-3">
            <a class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="#"
              >View Profile</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UserCard',
};
</script>

<style scoped>
.custom_center {
  text-align: -webkit-center;
}
</style>
