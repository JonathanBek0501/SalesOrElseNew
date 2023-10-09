<template>
    <div class="fixed bg-white w-full z-50">
        <div class="flex items-center justify-between max-w-[1352px] mx-auto px-5 py-4">
            <nuxt-link to="/">
                <nuxt-img
                    src="/logo.svg"
                    alt="Logo"
                    width="67"
                    height="77"
                />
            </nuxt-link>

            <div class="hidden md:flex items-center text-[#9E9E9E]">
                <a
                v-for="(link, index) in links" :key="index" :href="link.goTo"
                :class="{'text-primary-light': index === 4}"
                @click.prevent="scrollToSection(link.goTo)"
                class="px-4"
                >
                    {{ link.title }}
                </a>

                <a @click.prevent="scrollToBooking" href="#book" class="uppercase inline-block rounded-full leading-none text-white bg-primary-light border border-transparent transition-all ease-in-out hover:border-primary-light hover:text-black hover:bg-white px-8 py-4">
                    free strategy session
                </a>
            </div>

            <!-- Mobile -->
            <button @click="menuOpen = !menuOpen" type="button" aria-label="Toggle the mobile menu" class="block md:hidden text-primary-light p-3">
                <svg v-if="!menuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>

        <!-- Mobile menu -->
        <div v-if="menuOpen" class="md:hidden absolute top-full right-0 w-full bg-white z-10">
            <nav class="divide-y">
                <a
                v-for="(link, index) in links" :key="index" :href="link.goTo" @click.prevent="scrollToSection(link.goTo)"
                class="block transition-all ease-in-out hover:bg-primary-light hover:text-white py-2.5 px-5">
                    {{ link.title }}
                </a>

                <a @click.prevent="scrollToBooking" href="#book"
                class="block transition-all ease-in-out text-primary-light hover:bg-primary-light hover:text-white py-2.5 px-5">
                    Free Strategy Session
                </a>
            </nav>
        </div>
    </div>
</template>

<script setup>
const links = ref([
    {
        title: 'Case Studies',
        goTo: '#caseStudies'
    },
    {
        title: 'About',
        goTo: '#about'
    },
    {
        title: 'Reviews',
        goTo: '#reviews'
    },
    {
        title: 'Pricing',
        goTo: '#pricing'
    },
])

const menuOpen = ref(false)

const scrollToSection = (target) => {
  const targetSection = document.querySelector(target);
  if (targetSection) {
    const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: targetPosition - 100, behavior: 'smooth' });
    menuOpen.value = false;
  }
};

const scrollToBooking = () => {
  const bookSection = document.getElementById('book');
  if (bookSection) {
    const targetPosition = bookSection.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: targetPosition - 100, behavior: 'smooth' });
    menuOpen.value = false;
  }
};
</script>