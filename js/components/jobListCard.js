export default {
    template: `
        <div>
            <p>{{job.title}}</p>
            <p>{{job.location}}</p>
            <p>{{job.wage}}</p>
            <button @click="$emit('remove','index')">Delete Job</button>
        </div>
    `,
    props: {
        job: {
            type: Object,
            required: true
        }
    }
}