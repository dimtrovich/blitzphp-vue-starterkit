<template>
	<main class="container">
        <section class="d-grid justify-center gap-3 text-center my-5">

            <div class="d-flex gap-5 justify-content-center align-items-center text-4xl my-5">
                <Transition name="slide-left" appear>
                    <img src="@/assets/logos/vue.png" class="lg:w-24 w-20 duration-300" alt="Vite logo" />
                </Transition>
                +
                <Transition name="slide-top" appear>
                    <img src="@/assets/logos/blitz.png" class="lg:w-24 w-20 duration-300 delay-100" alt="BlitzPHP logo" />
                </Transition>
                =
                <Transition name="slide-right" appear>
                    <img src="@/assets/logos/vue-blitz.png" class="lg:w-24 w-20 duration-300 delay-200" alt="BlitzPHP vite logo" />
                </Transition>
            </div>

            <Transition name="slide-left" appear>
                <h1 class="text-4xl font-bold duration-500 delay-500">Welcome To BlitzPHP Vite App Starter</h1>
            </Transition>

            <Transition name="slide-right" appear>
                <h3 class="text-lg duration-500 delay-500">Take your project to the next level with VueJs and BlitzPHP</h3>
            </Transition>

        </section>
        <hr class="border-slate-700 my-3">
        <Transition name="slide-bottom" appear>
            <div class="row my-5 duration-300 delay-800 text-center">
                <section class="col-lg-6">
                    <h3 class="text-lg fw-bold mb-3">About This Page</h3>
                    <p class="my-3">This page may serve you as a homepage, feel free to edit or remove it</p>
                    <ul class="list-unstyled">
                        <li>
                            <strong>Controller: </strong> <em>app/Controllers/HomeController.php</em>
                        </li>
                        <li>
                            <strong>View file: </strong> <em>app/Views/app.php</em>
                        </li>
                        <li>
                            <strong>Vue Page: </strong> <em>resources/js/pages/Home.vue</em>
                        </li>
                    </ul>
                </section>

                <section class="col-lg-6">
                    <h3 class="text-lg fw-bold mb-3">Go Further</h3>
                    <p class="my-3">Here are some useful links</p>
                    <ul class="list-unstyled">
                        <li><a href="https://github.com/dimtrovich/blitzphp-vuejs" target="_blank"><i class="bi bi-link-45deg"></i> BlitzPHP Vue Repository</a></li>
                        <li><a href="http://blitz-php.byethost14.com/docs" target="_blank"><i class="bi bi-link-45deg"></i> BlitzPHP Official User Guide</a></li>
                        <li><a href="https://vuejs.org/" target="_blank"><i class="bi bi-link-45deg"></i> VueJs Documentation</a></li>
                    </ul>
                </section>
            </div>
        </Transition>
    </main>
</template>

<script setup>
import { useMeta } from 'vue-meta'

defineOptions({ name: 'HomePage' })

useMeta({
	title: 'Home page',
})
</script>
