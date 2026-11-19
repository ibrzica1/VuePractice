export default {
    template: `
    <div v-if="filteredJobs.length">
        <div v-for="job in filteredJobs">
            <p>{{job.title}}</p>
        </div>
    </div>
    <p v-else>No Jobs found</p>
    `,
    props: {
        filteredJobs: {
            type: Array,
            default: () => []
        }
    }
}