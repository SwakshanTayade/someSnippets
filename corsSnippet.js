//cors configuration
const prodOrigin = [process.env.ORIGIN_1, process.env.ORIGIN_2]
const devOrigin = ['http://localhost:5173',]
const allowedOrigins = process.env.NODE_ENV === 'production' ? prodOrigin : devOrigin 
app.use(cors({
    origin:(origin, callback)=>{
        if(!origin || allowedOrigins.includes(origin)) {
            console.log(origin, allowedOrigins);
            callback(null, true);
        }else {
            console.log('Cors origin blocked',origin);
            callback(new Error('Not Allowed by CORS'));
        }
    },
    credentials:true,
    methods:['GET','POST','PUT','DELETE'],
}));
