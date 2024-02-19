<template>
<section >
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:pb-16 lg:pt-10">
    <div class="mx-auto max-w-lg text-center pb-10">
      <h2 class="text-3xl font-bold sm:text-4xl">{{ $t('our_services') }}</h2>
    </div>

    <div class="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">

      <a
        class="block rounded-xl border dark:border-gray-700  p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
      <div class="i-material-symbols-light-desktop-mac-outline-rounded size-10 text-pink-500"></div>
        <h2 class="mt-4 mb-2 pb-8 text-xl font-bold ">{{$t('dance_clase')}}</h2>

        <p class="mt-1 text-sm text-gray-400">{{ $t('learn_dance') }} </p>
      </a>
      <a
        class="block rounded-xl border dark:border-gray-700 p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10"
        href="#"
      >
      <div class="i-material-symbols-light-sports-gymnastics-rounded size-10 text-blue-500"></div>
        <h2 class="mt-4 mb-2 pb-8 text-xl font-bold ">{{$t('personalice_choreo')}}</h2>

        <p class="mt-1 text-sm pb-4 text-gray-400">
            {{$t('uniqueDanceChoreography')}}
        </p>
      </a>
      <a
        class="block rounded-xl border dark:border-gray-700 p-8 shadow-xl transition hover:border-yellow-500/10 hover:shadow-yellow-500/10"
        href="#"
      >
      <div class="i-material-symbols-light-data-thresholding-outline size-10 text-yellow-500"></div>
        <h2 class="mt-4 mb-2 pb-8 text-xl font-bold ">{{$t('workshopsAndEvents')}}</h2>

        <p class="mt-1 text-sm text-gray-400">
           {{ $t('improveDanceSkills') }}
        </p>
      </a>

      <a
        class="block rounded-xl border dark:border-gray-700 p-8 shadow-xl transition hover:border-green-500/10 hover:shadow-green-500/10"
        href="#"
      >
      <div class="i-material-symbols-light-mic-external-on-rounded size-10 text-green-500"></div>
        <h2 class="mt-4 mb-2 pb-8 text-xl font-bold ">{{$t('performancesAndShows') }}</h2>

        <p class="mt-1 text-sm text-gray-400">
            {{$t('hiringOurTeam') }}
        </p>
      </a>
    </div>
  </div>
</section>

</template>
