import { ref } from "vue";

const isOpen = ref(false)

export function UseSidebar(){
    return isOpen
}