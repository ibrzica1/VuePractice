export default {
    template: `
        <form @submit.prevent="add">
            <div v-if="errors.length">
                <p>Please correct the folowing errors</p>
                <ul>
                    <li v-for="error in errors">{{error}}</li>
                </ul>
            </div>
            <input type="text" v-model="title" placeholder="Enter title">
            <input type="text" v-model="name" placeholder="Enter name">
            <input type="number" v-model="wage" placeholder="Enter wage">
            <button type="submit">Submit</button>
       </form>
    `,
    data() {
        return {
            errors: [],
            title: null,
            name: null,
            wage: null
        }
    },
    methods: {
        add() {
            this.errors = [];
            if(!this.title){
                this.errors.push("Title is required");
            }
            if(!this.name){
                this.errors.push("Name is required");
            }
            if(!this.wage){
                this.errors.push("Wage is required");
            }
            if(!this.errors.length){
                this.$emit('taskCreated',{title:this.title, name:this.name, wage:this.wage});
            }
            this.title = null;
            this.name = null;
            this.wage = null;
        }
    }
}