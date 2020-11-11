<template>
  <div
    class="flex flex-col items-start justify-center max-w-screen-sm min-h-screen px-4 mx-auto"
  >
    <div class="flex items-center mb-8">
      <icon-logo class="w-10 h-10 mr-4"></icon-logo>
      <div class="text-2xl font-extrabold text-teal-900">Everything ML</div>
    </div>

    <div class="mb-8">
      <h1 class="mb-4 text-2xl leading-9 md:text-3xl sub-heading">
        The important things you NEED to know about
        <span class="highlight">machine learning</span> and
        <span class="highlight">data science</span> in production. <br />
      </h1>
      <p class="mb-4 text-2xl leading-9 md:text-3xl sub-heading">
        Packaged in a SHORT newsletter.
      </p>

      <p class="mb-4">
        We want to surface the stories that make you better at providing value
        using machine learning and data science.
      </p>

      <!-- <p>
        We want to give you ideas and methods you can use to make serious impact
        with data.
      </p> -->

      <!-- <p>
        There's a lot of information on the internet about machine learning and
        data science and how companies are using it to solve real world
        problems. We want to surface the stories that make sense to help you
        become a better and create a solid impact in your company.
      </p> -->

      <!-- <p>
        Every two weeks, we'll send you our curated digest of highlights.
        Conflicted? Have a read of our first issue or check out our latest
        issue.
      </p> -->
    </div>

    <div class="flex w-full">
      <a
        href="https://everythingml.substack.com/"
        class="inline-flex items-center justify-center w-full px-8 py-4 text-lg text-white bg-teal-900 rounded-lg md:w-auto hover:bg-opacity-75 hover:shadow-lg"
      >
        I'm Interested!
      </a>
    </div>

    <!-- <div>
      <iframe
        src="https://everythingml.substack.com/embed"
        width="480"
        height="320"
        style="border: 1px solid #eee; background: white"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div> -->
  </div>
</template>

<script>
import IconLogo from '@/assets/svg/logo.svg?inline'

export default {
  components: {
    IconLogo,
  },
}
</script>

<style scoped>
.sub-heading {
  font-family: 'Crimson Text', serif;
}

.highlight {
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(60%, transparent),
    color-stop(0, #f7f1cb)
  );
  background-image: linear-gradient(180deg, transparent 60%, #f7f1cb 0);
  -webkit-transition: background-color 500ms ease;
  transition: background-color 500ms ease;
}
</style>
