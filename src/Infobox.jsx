
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Infobox({info}) {
 
     const init = "https://unsplash.com/photos/green-grass-field-near-lake-under-white-clouds-and-blue-sky-during-daytime-KWTkd7mHqKE";
 const init2 = "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  

  return (
    <div>
        <h1>weather : {info.weather} </h1>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={ init2}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p> Humidity ={info.humidity}</p>
         <p> Temperature = {info.temp}&deg;C</p>
         <p> Min temp = {info.tempMin}&deg;C</p>
         <p> Max temp = {info.tempMax}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}