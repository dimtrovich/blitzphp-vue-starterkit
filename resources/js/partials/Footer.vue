<template>
	<footer class="py-3 border-t border-primary-500">
        <div class="container">
            <div class="text-center">
                Copyrights {{ $dayjs().format('YYYY') }}
            </div>
        </div>
    </footer>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'AppFooter',
})
</script>
