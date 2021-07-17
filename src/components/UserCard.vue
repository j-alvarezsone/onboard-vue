<template>
  <div class="w-full justify-center sm:block custom_center">
    <div class="max-w-xs">
      <div class="bg-white shadow-md hover:shadow-2xl rounded-lg py-3">
        <!-- Avatar -->
        <div class="p-2">
          <svg class="w-24" viewBox="0 0 20 20">
            <path
              d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"
            ></path>
          </svg>
        </div>
        <!-- User name -->
        <div class="p-2">
          <h3 class="text-center text-xl text-indigo-800 font-medium leading-8">{{ users.name }}</h3>
          <!-- User email -->
          <div class="text-center text-gray-500 text-xs font-semibold">
            <p>{{ users.email }}</p>
          </div>
          <br />
          <br />
          <!-- User company -->
          <h3 class="text-center text-xl text-gray-900 font-medium leading-8">{{ users.company.name }}</h3>

          <br />
          <br />
          <!-- User phone number -->
          <div class="text-center text-gray-500 text-xs font-semibold">
            <p>{{ users.phone }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UserCard',
  props: {
    users: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.custom_center {
  text-align: -webkit-center;
}
</style>
