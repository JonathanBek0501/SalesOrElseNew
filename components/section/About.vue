<template>
    <div class="bg-black text-white pt-36 pb-40">
        <div class="max-w-base mx-auto flex flex-col lg:flex-row gap-14 lg:gap-24 px-2.5">
            <div class="max-w-[380px] mx-auto lg:mx-0 w-full h-fit shrink-0 lg:sticky lg:top-28">
                <nuxt-img
                    src="/Juan.png"
                    alt="Juan Personal Photo"
                    width="380"
                    height="421"
                    class="w-full"
                />
            </div>

            <div class="space-y-20">
                <div class="lg:max-w-xl">
                    <div class="pb-20">
                        <h3 class="text-4xl-mobile md:text-[40px] md:leading-[52px] font-futuraRound font-bold pb-4">
                            Hi there. My name is Juan, and this is why you should trust me with your landing pages and paid media.
                        </h3>

                        <ul class="space-y-6 text-lg pr-2">
                            <li v-for="(list, index) in lists" :key="index" class="flex items-start gap-4">
                                <svg class="shrink-0" width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M28.5 12.1016C20.3454 16.0498 15.365 23.2439 13.0812 27.5347C11.616 25.076 9.75799 22.8898 7.5 20.983" stroke="#F65A34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <p>
                                    {{ list }}
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div class="font-futuraRound font-bold">
                        <span class="text-sm text-primary-light pb-0.5">
                            In short
                        </span>
                        <h4 class="text-brand2xl">
                            I’m the guy who finally made DTC work for many brands who’ve been burned by many (sometimes famous) agencies before.
                        </h4>

                        <div class="flex items-center flex-wrap gap-x-14 gap-y-5 opacity-40 mt-11">
                            <nuxt-img
                                src="/mondelez-international-logo.svg"
                                alt="Mondelez Logo"
                                width="146"
                                height=""
                            />
                            <nuxt-img
                                src="/lama-naturals-logo.svg"
                                alt="Lama Naturals Logo"
                                width="155"
                                height=""
                            />
                            <nuxt-img
                                src="/real-madrid-logo.svg"
                                alt="Real Madrid Logo"
                                width="128"
                                height=""
                            />
                            <nuxt-img
                                src="/iwon-organics-logo.svg"
                                alt="Iwon Organics Logo"
                                width="66"
                                height=""
                            />
                            <nuxt-img
                                src="/cg-logo.svg"
                                alt="Campo Grande Logo"
                                width="156"
                                height=""
                            />
                        </div>
                    </div>
                </div>

                <h4 class="font-futuraRound font-bold capitalize text-brand2xl pt-3">
                    Since no “NDA” prevents me from sharing this past success – I’m upfront and transparent about whom I work with. 
                    <br>
                    <br>
                    My clients (which you can find on this site) will be happy to recommend my services to anyone, so feel free to reach out to them.
                    <br>
                    <br>
                    So… if you’ve created a potentially life-changing product that solves a BIG problem for your consumer.
                    <br>
                    <br>
                    I can definitely replicate the above success for you.
                </h4>

                <a href="#book" class="inline-block rounded-full leading-none text-white bg-primary-light border border-transparent transition-all ease-in-out hover:border-primary-light hover:text-black hover:bg-white px-8 py-4">
                    Book A Free Strategy Session
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
const lists = ref([
    'I have scaled a handful of CPG brands from $0 to the high 8 figures by leading their paid media and landing pages.',
    'My metrics have been key in closing multi-million dollar funding rounds for them, and that’s after 2023 – when capital is not easy to come by.',
    'And if you’re not into fundraising… I have helped others build profitable businesses that grow comfortably with ZERO outside investment.'
])
</script>