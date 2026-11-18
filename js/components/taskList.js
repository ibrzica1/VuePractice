export default {
    template: `
        <div v-if="tasks.length" v-for="task in tasks">
            <p>{{task.title}}</p>
            <p>{{task.name}}</p>
            <p>{{task.wage}}</p>
       </div>
    `,
    props: {
        tasks: {
            type: Array
        }
    }
}