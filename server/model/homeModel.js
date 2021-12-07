import mongoose from 'mongoose'

const homeSchema = mongoose.Schema(
    {
        logo: {
        type: String,
        // required: true,
        },
        title: {
        type: String,
        // required: true,
        },
        header: {
        type: String,
        // required: true,
        },
        desc: {
        type: String,
        // required: true,
        },
    },
    {
        timestamps: true,
    }
)
const Home = mongoose.model('Home', homeSchema)

export default Home