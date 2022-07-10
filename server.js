const express = require('express');
const app= express();
const PORT= 8000
const cors = require('cors');


const dogPhotos={
	"first":"https://images.unsplash.com/photo-1615751072497-5f5169febe17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGRvZ3xlbnwwfHwwfHw%3D&w=1000&q=80",
	"second":"https://hips.hearstapps.com/wdy.h-cdn.co/assets/17/39/1506709524-cola-0247.jpg?crop=1.00xw:0.750xh;0,0.226xh&resize=480:*",
	"third":"https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=600",
	"fourth":"https://images.pexels.com/photos/4681107/pexels-photo-4681107.jpeg?auto=compress&cs=tinysrgb&w=600",
	"fifth":"https://images.pexels.com/photos/97082/weimaraner-puppy-dog-snout-97082.jpeg?auto=compress&cs=tinysrgb&w=600",
	"sixth":"https://images.pexels.com/photos/1562983/pexels-photo-1562983.jpeg?auto=compress&cs=tinysrgb&w=600",
	"seventh":"https://images.pexels.com/photos/2820134/pexels-photo-2820134.jpeg?auto=compress&cs=tinysrgb&w=600",
	"eigth":"https://images.pexels.com/photos/3009441/pexels-photo-3009441.jpeg?auto=compress&cs=tinysrgb&w=600",
	"ninth":"https://images.pexels.com/photos/2797318/pexels-photo-2797318.jpeg?auto=compress&cs=tinysrgb&w=600",
	"tenth":"https://images.pexels.com/photos/3658120/pexels-photo-3658120.jpeg?auto=compress&cs=tinysrgb&w=600"
}

app.use(cors())


app.get('/',(req,res)=>{
	res.sendFile(__dirname+'/index.html')
})
app.get('/api',(req,res)=>{
	res.json(dogPhotos)
})
app.get('/api/:dog',(req,res)=>{
	const lol= req.params.dog
	if (dogPhotos[lol]){
		res.json(dogPhotos[lol])
	}
	
})







app.listen(process.env.PORT||PORT,()=>{
	console.log(`port is running on Port ${PORT}, you better go catch it`)
})