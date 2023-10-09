<template>
    <div id="reviews" class="max-w-base mx-auto space-y-16 p-2.5 mt-36 mb-8">
        <h2 class="text-4xl-mobile md:text-4xl font-futuraRound text-center font-bold">
            What
            <span class="text-primary">Our Partners</span>
            Are Saying
        </h2>

        <div class="space-y-10">
            <div v-for="(partner, index) in partners" :key="index" class="border-[1.5px] rounded border-black font-futuraRound p-6 sm:p-10 md:py-14 md:px-11">
                <div class="relative flex flex-col items-center gap-4">
                    <h4 :class="{'max-w-4xl mx-auto': index === 3}" class="font-futuraRound font-bold text-xl md:text-[27px] md:leading-9 text-center capitalize whitespace-pre-wrap">
                        {{ partner.text }}
                    </h4>

                    <div class="flex flex-col sm:flex-row items-center text-center sm:text-left gap-6">
                        <nuxt-img
                            :src="`/${partner.img}.webp`"
                            :alt="partner.img"
                            width="113"
                            height="113"
                            class="rounded-full"
                        />

                        <div class="space-y-1">
                            <h5 class="text-lg md:text-[22px] font-bold">
                                {{ partner.fullName }}
                            </h5>
                            <span class="md:text-xl md:leading-6 whitespace-pre-wrap">
                                {{ partner.job }}
                            </span>
                            <nuxt-img
                                src="/stars.svg"
                                alt="stars"
                                width="170"
                                height="34"
                                class="mx-auto md:mx-0"
                            />
                        </div>
                    </div>

                    <!-- Absolute -->
                    <svg class="absolute -bottom-5 md:bottom-0 -right-2 md:right-0 w-14 md:w-auto" width="76" height="49" viewBox="0 0 76 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.2" d="M54.5458 48.1387H42.1167C40.1639 48.1387 38.7653 47.9253 37.9208 47.4987C37.1292 47.0187 36.7333 46.2187 36.7333 45.0987C36.7333 44.4053 37.2347 43.152 38.2375 41.3387L58.9 3.73867C59.2167 3.15201 59.4542 2.72534 59.6125 2.45867C60.1931 1.39201 60.7472 0.752005 61.275 0.538672C61.8028 0.272005 63.0167 0.138672 64.9167 0.138672H70.6167C72.6222 0.138672 74.0208 0.378672 74.8125 0.858672C75.6042 1.28534 76 2.05867 76 3.17867C76 3.76534 75.6569 4.912 74.9708 6.61867L60.4833 44.0587C59.6917 46.0853 59.0319 47.2853 58.5042 47.6587C58.0292 47.9787 56.7097 48.1387 54.5458 48.1387ZM17.8125 48.1387H5.38333C3.37778 48.1387 1.97917 47.9253 1.1875 47.4987C0.395833 47.0187 0 46.2187 0 45.0987C0 44.352 0.475 43.0987 1.425 41.3387L22.1667 3.73867C22.4833 3.15201 22.6944 2.72534 22.8 2.45867C23.4333 1.39201 24.0139 0.752005 24.5417 0.538672C25.0694 0.272005 26.2833 0.138672 28.1833 0.138672H33.8042C35.8097 0.138672 37.2083 0.378672 38 0.858672C38.7917 1.28534 39.1875 2.05867 39.1875 3.17867C39.1875 3.87201 38.8708 5.01867 38.2375 6.61867L23.75 44.0587C22.9583 46.0853 22.2986 47.2853 21.7708 47.6587C21.2958 47.9787 19.9764 48.1387 17.8125 48.1387Z" fill="black"/>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const partners = ref([
    {
        text: "Juan is an amazing marketer who knows how to get results. I'd recommend him to any CPG or consumer brand who is looking to improve their marketing and get more sales. \ntestimonial",
        img: 'partner1',
        fullName: 'Brad Baum',
        job: 'Co-founder at Llama Naturals'
    },
    {
        text: "Juan’s landing pages convert up to 5% of FIRST-TIME visitors which is HUGE considering our first order value is about $220. We had projected 200k in revenue on our first year in DTC, but made more than $3.5 MILLION (and growing) thanks to his ad and landing page strategy.",
        img: 'partner2',
        fullName: 'Kurt Oriol',
        job: 'Founder & CEO at Campo Grande \nand Real Madrid Camps USA'
    },
    {
        text: "Sales genius. Knows how to make people convert on the \nfirst click with his landing pages.",
        img: 'partner3',
        fullName: 'Oliver Pestalozzi',
        job: 'Ex-Google, Founder & CEO of \nGADsmasters'
    },
    {
        text: "Juan knows how to write landing pages & ads that make people take action on the FIRST touchpoint. This is a key, yet overlooked piece of DTC that can be the difference between burn and profit. A true operator. Knows his stuff.",
        img: 'partner4',
        fullName: 'Mark Samuel',
        job: 'Founder & CEO at IWON \nOrganics'
    },
    {
        text: "The conversion rate Juan got for us was insane. We didn’t even know hitting a conversion rate of more than 10% was possible with cold traffic. That 10% actually BUYS on the first visit into our site. He’s the only marketer who’s actually generated money for us after trying with many “top tier” agencies.",
        img: 'partner5',
        fullName: 'Kara Landau',
        job: 'Autralia’s Top Gut Health Dietitian, \nFounder & CEO at Uplift Food'
    },
])
</script>