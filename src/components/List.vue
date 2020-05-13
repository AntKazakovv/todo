<template>
    <div>
        <router-link to="/" tag="div" class="note-item"  v-for="noteItem in tempListNotes">
            <h2>{{noteItem.title}}</h2>
            <ul>
                <li>{{noteItem.listItems[0].task}}</li>
                <li>{{noteItem.listItems[1].task}}</li>
            </ul>
        </router-link>
    </div>
</template>

<script>
export default {
    // Временная структура данных для заметок
    data(){
        return {
            tempListNotes: [
                {
                    title: 'Test Note 1',
                    date: '02.04.20',
                    listItems: [
                        {
                            task: 'daawd awdwadawd awdawdawd awdawdaw awdwad',
                            isCompleted: false
                        },
                        {
                            task: 'fsefgl lkwjd dvnwdj wadkawkk dnvnvee',
                            isCompleted: false
                        },
                    ]
                },
                {
                    title: 'Test Note 2',
                    date: '02.04.20',
                    listItems: [
                        {
                            task: 'daawd awdwadawd awdawdawd awdawdaw awdwad',
                            isCompleted: false
                        },
                        {
                            task: 'fsefgl lkwjd dvnwdj wadkawkk dnvnvee',
                            isCompleted: false
                        },
                    ]
                },

            ]
        }
    }

}
</script>

<style lang="sass">
    .note-item
        padding: 13px
        border-bottom: 2px solid white

        &:hover
            background: #f79797
    
    ul
        padding-left: 20px
</style>