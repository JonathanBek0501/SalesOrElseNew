<template>
    <div class="bg-black py-12">
        <div class="max-w-base mx-auto space-y-10 p-2.5">
            <div class="max-w-4xl text-center md:text-left">
                <span class="block uppercase font-futuraRound text-primary-light font-bold leading-8">
                    What's the problem with
                </span>

                <div class="md:flex items-center">
                    <h2 class="text-white text-4xl-mobile md:text-4xl font-futuraRound font-bold">
                        Advertising Agencies?
                    </h2>

                    <p class="md:max-w-[500px] text-lg text-brand-gray pt-5 md:p-2.5">
                        Go browse around the web or social media for a while... It won’t be long until you stumble upon ads that looks like this:
                    </p>
                </div>
            </div>

            <div class="max-w-[960px] mx-auto grid grid-cols-2 sm:grid-cols-3 gap-5">
                <div class="relative rotate-[-3.67deg]">
                    <nuxt-img
                        src="/tablet.png"
                        alt="Tablet"
                        width="295"
                        height="449"
                    />
                    <div class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full h-full pt-3 md:pt-6 px-6 md:pr-12 pb-5 md:pb-8 md:pl-9">
                        <video class="rounded-2xl w-full h-full object-cover" autoplay loop muted playsinline>
                            <source src="/AdAgency11.mp4" />
                        </video>
                    </div>
                </div>
                <div class="relative rotate-[3.67deg] sm:rotate-0">
                    <nuxt-img
                        src="/tablet.png"
                        alt="Tablet"
                        width="295"
                        height="449"
                        class=""
                    />
                    <div class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full h-full pt-3 md:pt-6 px-6 md:pr-12 pb-5 md:pb-8 md:pl-9">
                        <video class="rounded-2xl w-full h-full object-cover" autoplay loop muted playsinline>
                            <source src="/AdAgency22.mp4" />
                        </video>
                    </div>
                </div>
                <div class="relative sm:rotate-[3.67deg] translate-x-1/2 sm:translate-x-0">
                    <nuxt-img
                        src="/tablet.png"
                        alt="Tablet"
                        width="295"
                        height="449"
                        class=""
                    />
                    <div class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full h-full pt-3 md:pt-6 px-6 md:pr-12 pb-5 md:pb-8 md:pl-9">
                        <video class="rounded-2xl w-full h-full object-cover" autoplay loop muted playsinline>
                            <source src="/AdAgency33.mp4" />
                        </video>
                    </div>
                </div>
            </div>

            <p class="text-xl font-futuraRound font-semibold text-white text-center">
                See the ads above? They promise nothing to the
                <br class="hidden sm:block">consumer.<br class="block sm:hidden"> They're vague. They're pointless. They're ridiculous and they DO NOT sell.
            </p>
        </div>
    </div>
</template>