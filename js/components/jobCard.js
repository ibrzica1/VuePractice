export default {
    template: 
       ` 
        <p>{{job.title}}</p>
        <p>{{job.location}}</p>
        <p>{{job.wage}}</p>   
    `,

    props: {
        job: {
            type: Object,
            required: true
        }
    }
}