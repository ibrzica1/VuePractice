export default {
    template: `
    <div>
        <p>{{job.title}}</p>
        <button @click="$emit('delete-job',job.id)">DELETE</button>
    </div>
    `,
    props: {
        job: {
            type: Object,
            required: true
        },
    },
    emits: ['delete-job']
}