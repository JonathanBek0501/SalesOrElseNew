<template>
    <div id="pricing" class="bg-black pt-12 md:pt-20 pb-12">
        <div class="max-w-4xl mx-auto px-[3px]">
            <h2 class="text-4xl text-center text-white font-futuraRound font-bold pb-10 md:pb-16">
                Pricing
            </h2>

            <div class="space-y-12">
                <div v-for="(service, index) in services" :key="index" class="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-0">
                    <div class="w-44 shrink-0">
                        <nuxt-img
                            :src="`/${service.img}.png`"
                            :alt="service.imgAlt"
                            :width="service.imgWidth"
                            :height="service.imgHeight"
                        />
                    </div>

                    <div class="space-y-5 p-2.5">
                        <h3 class="text-brand2xl font-futuraRound font-bold text-white text-center md:text-left">
                            {{ service.title }}
                        </h3>
                        <p class="text-lg text-brand-gray text-center md:text-left">
                            {{ service.text }}
                        </p>

                        <ul class="space-y-5">
                            <li
                            v-for="(point, index) in service.points" :key="index"
                            class="flex items-center gap-2.5">
                                <div class="w-2 h-2 rounded-full bg-primary-light mx-3"></div>
                                <span class="text-lg text-brand-gray">
                                    {{ point }}
                                </span>
                            </li>
                            <li v-for="(link, index) in service.links" :key="index">
                                <a href="#book" class="block font-futuraRound font-semibold text-xl leading-[30px] tracking-[1.5px] text-primary-light border-l-2 border-primary-light hover:underline pl-8">
                                    {{ link.title }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const services = ref([
    {
        img: 'pricing-1',
        imgAlt: 'Social icons',
        imgWidth: '126',
        imgHeight: '128',
        title: 'Profitable Facebook And Instagram Ads',
        text: "We'll get you the lowest CPAs in the industry so you can actually make money from FB ads.",
        links: ref([
            {
                title: 'FB/IG Ads Or TikTok Ads Management + Creative Strategy Starts At $3000 + 5% Net Sales Generated',
                link: ''
            }
        ])
    },
    {
        img: 'pricing-2',
        imgAlt: 'Laptop',
        imgWidth: '124',
        imgHeight: '96',
        title: 'Landing Pages That Sell On The First Click',
        text: "Our PROVEN landing page formula converts up to 15% of FIRST time visitors.",
        links: ref([
            {
                title: 'Landing Page Builds Start At $4,995',
                link: ''
            },
            {
                title: 'Ongoing Conversion Optimization Starts At $2,500 Per Month',
                link: ''
            },
        ])
    },
    {
        img: 'pricing-3',
        imgAlt: 'dollar and coins',
        imgWidth: '124',
        imgHeight: '164',
        title: 'Email + SMS Marketing That Maximizes Your Profits',
        text: "We maximize customer lifetime value by making one time customers buy again and again.",
        links: ref([
            {
                title: 'Starts At $8000 Per Month + 5% Of Net Sales Generated',
                link: ''
            }
        ]),
        points: ref([
            'Email Marketing (Campaigns + Flows)',
            'SMS & Messenger Marketing (Campaigns + Flows)',
        ])
    },
    {
        img: 'pricing-4',
        imgAlt: 'Bottle Icon',
        imgWidth: '124',
        imgHeight: '141',
        title: "Full Funnel Service",
        text: "If you'd like us to do all of the above, we can do so at a discounted price. Get in touch and we'll send you an offer.",
        links: ref([
            {
                title: 'Get In Touch For Pricing',
                link: ''
            }
        ])
    },
])
</script>

<style scoped>

</style>