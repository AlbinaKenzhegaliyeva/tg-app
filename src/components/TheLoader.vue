<template>
    <div class="loader">
        <img src="@/assets/logoo.svg" alt="logo" class="logo">
        <img src="@/assets/load.svg" alt="logo" class="spinner">
    </div>

</template>


<style lang="scss">
.loader {
    background: #0a3956;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 100px;

    .logo {
        margin: 150px 0 0 0;
    }

    .spinner {
        animation: spin 1s linear infinite;
    }
}


@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>