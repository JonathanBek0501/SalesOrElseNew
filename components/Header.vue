<template>
    <div class="relative bg-black">
        <div class="flex items-center justify-between max-w-[1352px] mx-auto px-5 pt-10 pb-4">
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
                class="px-4"
                >
                    {{ link.title }}
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
                v-for="(link, index) in links" :key="index" :href="link.goTo"
                :class="{'text-primary-light': index === 4}"
                class="block py-2.5 px-5">
                    {{ link.title }}
                </a>
            </nav>
        </div>
    </div>
</template>

<script setup>
const links = ref([
    {
        title: 'Home',
        goTo: '/'
    },
    {
        title: 'About',
        goTo: '#about'
    },
    {
        title: 'Services',
        goTo: '#services'
    },
    {
        title: 'Team',
        goTo: 'https://www.linkedin.com/in/juan-alou/'
    },
    {
        title: 'Book A Free Strategy Session',
        goTo: '#book'
    },
])

const menuOpen = ref(false)
</script>