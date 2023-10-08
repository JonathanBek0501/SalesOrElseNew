<template>
    <div class="bg-black">
        <div class="max-w-base mx-auto text-white pt-10 md:pt-15 pb-10 md:pb-25 px-2.5 lg:px-0">
            <h1 class="max-w-4xl text-5xl-mobile md:text-5xl text-center md:text-left font-bold font-futuraRound lg:pr-6 pb-10 md:pb-6">
                We Grow CPG Brands From $0 to Over 8 Figures In Online Sales
            </h1>

            <div class="flex flex-col md:flex-row sm:items-start md:items-center lg:items-start gap-20 md:gap-0 pb-16 md:pb-28">
                <div class="order-1 md:order-none max-w-2xl lg:shrink-0 space-y-10 lg:pr-5">
                    <ul class="text-lg leading-8 space-y-5">
                        <li v-for="(list, index) in lists" :key="index" class="flex items-start gap-6">
                            <IconTick class="shrink-0 text-primary mt-1.5"/>

                            <span>
                                <strong>
                                    {{ list.textBold }}
                                </strong>
                                {{ list.text }}
                            </span>
                        </li>
                    </ul>

                    <div class="flex flex-col lg:flex-row items-center md:items-start lg:items-center gap-2.5">
                        <a href="#book" class="block tracking-tighter w-fit rounded-full bg-primary border-2 border-transparent hover:bg-transparent hover:border-primary hover:scale-110 transition-transform ease-in-out duration-200 text-[17px] leading-none py-4 px-8">
                            Book A Free Strategy Session
                        </a>
                        <a href="#about" class="block underline hover:no-underline text-[17px] md:text-xl leading-none py-4 px-8">
                            Learn how we do it
                        </a>
                    </div>
                </div>

                <div class="relative min-w-[220px] w-[220px] md:w-full ml-12 sm:ml-12 md:ml-5 md:mr-16 lg:ml-0 lg:mr-0">
                    <div class="relative w-56 lg:w-[295px] rotate-[3.67deg] mx-auto">
                        <nuxt-img
                            src="/tablet.png"
                            alt="Tablet"
                            width="295"
                            height="448"
                            class="w-full h-full"
                        />

                        <div class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full p-7 sm:p-9">
                            <video class="rounded-2xl w-full" autoplay loop muted playsinline>
                                <source src="/Hero.mp4" />
                            </video>
                        </div>
                    </div>

                    <nuxt-img
                        src="/rocket.png"
                        alt="Rocket"
                        width="242"
                        height="265"
                        class="absolute -bottom-12 lg:-bottom-16 -right-12 lg:-right-2 w-36 lg:w-[242px] z-10"
                    />
                </div>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 justify-items-center items-center gap-5">
                <div v-for="(logo, index) in logos" :key="index" class="w-full">
                    <nuxt-img
                        :src="`/${logo.name}`"
                        :width="logo.width"
                        :height="logo.height"
                        :alt="logo.name"
                        :class="{'md:!mx-auto': index === 1 || index === 2, 'md:!ml-auto': index === 3, 'p-5 md:p-0': index !== 2}"
                        class="mx-auto md:mx-0"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const lists = ref([
    {
        textBold: 'Enjoy the LOWEST FB/TikTok CPAs in the CPG industry',
        text: 'with our high-converting ad creative formula and over 10 years of media buying experience.'
    },
    {
        textBold: 'Landing pages with conversion rates as high as 15% (cold traffic)',
        text: '– ALL of our clients (yes, all of them) are ranked among the top converting stores in their categories by Shopify themselves!'
    },
    {
        textBold: 'WIN-WIN pricing model',
        text: '– We charge a competitive retainer + small % of the NET SALES we generate for you. This rev-share model gives us ownership and provides the motivation to make YOU as much money as possible!'
    },
])

const logos = ref([
    {
        name: 'real-madrid-logo.svg',
        width: '220',
        height: '72',
    },
    {
        name: 'mondelez-international-logo.svg',
        width: '198',
        height: '48',
    },
    {
        name: 'iwon-organics-logo.svg',
        width: '108',
        height: '72',
    },
    {
        name: 'cg-logo.svg',
        width: '185',
        height: '16',
    }
])
</script>