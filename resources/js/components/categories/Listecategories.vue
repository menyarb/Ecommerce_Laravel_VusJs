<template>
    <div>
        <button class="btn btn-success">Ajouter</button>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Image</th>
                    <th><Nav>Nom categories</Nav></th>
                    <th> Modifier</th>
                    <th>Suppromer</th>
                    
                    
                </tr>
            </thead>
            <tbody>
                <tr v-for="cat in categories " :key="cat.id">
                <td><img :src="cat.imagecategorie" width="80" height="80"></td>
                <td>{{ cat.nomcategorie }}</td>
                <td><button class="btn btn-warning">Modifier</button></td>
                <td><button class="btn btn-danger">Supprimer</button></td>
               
                </tr>
            </tbody>
        </table>

    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import axios from "axios";

const categories = ref([]);
const getcategories = async()=>{
await axios.get("http://localhost:8000/api/categories")
.then(res=>{
    categories.value=res.data


})
.catch(error=>{console.log(console.error())
})
}
onMounted(()=>{
getcategories()
}
)
</script>
<style>

</style>