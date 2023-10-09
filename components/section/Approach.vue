<template>
    <div class="max-w-5xl mx-auto px-3 pb-24">
        <h2 class="text-4xl-mobile md:text-4xl text-center font-futuraRound font-bold pb-16">
            The Sales Or Else Approach
        </h2>

        <!-- Steps -->
        <div class="space-y-28">
            <div v-for="(step, index) in steps" :key="index" class="md:p-2.5">
                <div class="md:flex items-start justify-between">
                    <h2 class="block md:hidden text-4xl-mobile font-futuraRound font-bold text-center pb-8">
                        <span class="text-primary">Step {{ index + 1 }}:</span>
                        {{ step.title }}
                    </h2>

                    <div :class="{'pt-3': index !== 2}" class="lg:w-full w-[216px] ml-5 md:ml-0">
                        <div class="relative rotate-[-3.67deg] max-w-[295px] mx-auto">
                            <nuxt-img
                                src="/tablet-black.png"
                                alt="Tablet"
                                width="295"
                                height="449"
                            />
                            <div class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full h-full pt-3 lg:pt-7 px-6 lg:pr-10 pb-5 lg:pb-8 lg:pl-9">
                                <video v-if="index === 0" src="/Step1Ad.mp4" class="rounded-2xl w-full h-full object-cover" autoplay loop muted playsinline></video>
                                <nuxt-img v-else
                                    :src="`/${step.content}`"
                                    :alt="step.title"
                                    width="320"
                                    height="590"
                                    class="w-full h-full object-fill"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="max-w-[558px] lg:shrink-0 space-y-5 md:p-2.5">
                        <h2 class="hidden md:block text-4xl font-futuraRound font-bold">
                            <span class="text-primary">Step {{ index + 1 }}:</span>
                            {{ step.title }}
                        </h2>

                        <ul class="space-y-5 text-lg">
                            <li v-for="(point, index) in step.points" :key="index" class="flex items-start gap-6">
                                <IconTick class="shrink-0 text-black mt-1.5"/>
                                <p>
                                    {{ point }}
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="mt-5 md:mt-0">
                    <nuxt-img
                        :src="!isMobile ? `/${step.img}.svg` : `/${step.imgMobile}`"
                        :alt="step.alt"
                        :width="step.width"
                        :height="step.height"
                        class="mx-auto"
                    />
                </div>

                <h3 :class="index === 2 ? 'max-w-xl' : 'max-w-2xl'" class="mx-auto md:whitespace-pre text-2xl leading-7 md:text-[29px] md:leading-[36px] font-bold font-futuraRound mt-8">
                    {{ step.subTitle }}
                </h3>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const steps = ref([
    {
        title: 'The AD',
        points: ref([
            "Good ads begin with a HOOK. An effective hook gets attention but also create a strong emotional response.",
            "Good ads are driven by BENEFITS... not features. People simply DON'T care about products! They only care about what products can do for them. It's OKAY to sell. As long as you provide BENEFITS.",
            "Good Ads PROMISE VALUE. They make it very clear to the consumer that they will get VALUE by clicking-through. And by providing value, ads become enjoyable... not intrusive or annoying!",
        ]),
        img: 'step-1',
        imgMobile: 'step-1-mobile.svg',
        alt: 'TikTok and Meta statistics',
        width: '852',
        height: '374',
        subTitle: '“Lowest CPAs In The Industry, Guaranteed"'
    },
    {
        content: 'Step2LandingPage.png',
        title: 'The Landing Page',
        points: ref([
            "Once you have the click... It's up to the landing page to close the sale. Otherwise... your ad dollars will be wasted.",
            "Our PROVEN landing page formula gets conversion rates as high 15% (cold traffic) and even more in some cases.",
            "How do we do it? We simply know WHAT to write and HOW to design pages that make people jump off their seats and TAKE ACTION! All of our clients are ranked among Shopify's top converting websites on their respective categories.",
        ]),
        img: 'step-2',
        imgMobile: 'step-2-mobile.svg',
        alt: 'Shopify statistics',
        width: '852',
        height: '248',
        subTitle: 'All Of Our Clients Are Ranked As The Top Converting Stores In Their Niche By SHOPIFY'
    },
    {
        content: 'Step3EmailSms.png',
        title: 'Maximizing LTV',
        points: ref([
            "Once you convert a customer for the first time, your job is to maximize the Lifetime Value metric.",
            'Our Email and SMS strategy ensures your buyers will come back again and again through campaigns and automated flows... building you a fortune on the "backend"!',
            "Enjoy Open Rates of as high as 50%, CTRs of 3% and Conversion Rates of 1%+ in ALL of your campaigns! (ADDED OF IN BOLD JUST TO POINT OUT, SHOULDN'T BE BOLD IN THE SITE)",
        ]),
        img: 'step-3',
        imgMobile: 'step-3.svg',
        alt: 'Klaviyo Postscript',
        width: '570',
        height: '256',
        subTitle: 'If you think 20% open rates \nare good, think again.'
    },
])

const isMobile = ref(false);

const updateIsMobile = () => {
  isMobile.value = window.innerWidth < 768;
};

onMounted(() => {
  // Initial check
  updateIsMobile();

  // Add a resize event listener
  window.addEventListener('resize', updateIsMobile);
  console.log(isMobile.value);
});

onBeforeUnmount(() => {
  // Remove the resize event listener when the component is unmounted
  window.removeEventListener('resize', updateIsMobile);
});
</script>