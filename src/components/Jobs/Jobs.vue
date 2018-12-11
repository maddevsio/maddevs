<template>
    <section id="jobs" class="jobs">
        <div class="container">
            <h2 class="sec-title">{{ $t('jobs-title') }}</h2>
            <div class="jobs_list">
                <a href="https://blog.maddevs.io/middle-senior-backend-developer-e5bf0d97c037" class="jobs_list-item" target="_blank" rel="noreferrer">
                    <h4>{{ $t('jobs1-subtitle') }}</h4>
                    <p>{{ $t('jobs1-desc') }}</p>
                    <h6>{{ $t('jobs1-date') }}</h6>
                </a>
                <a href="https://blog.maddevs.io/middle-senior-frontend-developer-323773c91134" class="jobs_list-item" target="_blank" rel="noreferrer">
                    <h4>{{ $t('jobs2-subtitle') }}</h4>
                    <p>{{ $t('jobs2-desc') }}</p>
                    <h6>{{ $t('jobs2-date') }}</h6>
                </a>
                <a href="https://blog.maddevs.io/senior-php-developer-86cb0d11ae3c" class="jobs_list-item" target="_blank" rel="noreferrer">
                    <h4>{{ $t('jobs3-subtitle') }}</h4>
                    <p>{{ $t('jobs3-desc') }}</p>
                    <h6>{{ $t('jobs3-date') }}</h6>
                </a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Jobs',
};
</script>
