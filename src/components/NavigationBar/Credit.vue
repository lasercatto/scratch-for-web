<template>
        <b-nav-item @click="credit">{{ $t('Credit') }}</b-nav-item>
</template>

<script>
// import localforage from 'localforage';
import Swal from "sweetalert2";
export default {
    name: "credits",
    methods: {
        credit() {
            Swal.fire({
                position: 'center',
                icon: 'info',
                title: 'S4W Developers',
                text: 'Not The Droids, LaserCat, Malik999 ,Parham - v1.0',
                showConfirmButton: true
            })
        },
    }
}
</script>
