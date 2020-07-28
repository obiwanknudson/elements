import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import TableColor from './TableColor.png';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Awesome from './images/fire.jpg';
import Earth from './images/earth.jpg';
import Fire from './images/fire2.jpg';
import Air from './images/air.jpg';
import Water from './images/water.jpg';


class Home extends React.Component {
  
  render() {
    return (
     
      <div className="App" align="center" style={{backgroundImage:{Awesome} }}>


       <body style={{ margin:40, }}>
        <Breadcrumbs>
              </Breadcrumbs>

      
            <h1 style={{ align: 'left', margin:30, color: 'black'}}>Be Ye Therefore Awesome</h1> 
       
        
        
        {/* <img alt='Earth' src={Awesome} style={{width: 'auto', height:400 }}/>  */}
        
        <p style={{ padding:10,margin:10}}>
          Elements of Awesome is an achievement system for teens to set goals and become better versions of themselves.  
        </p>
        <p style={{ padding:10,margin:10}}>
         The system breaks down character attributes into four pillars:
        </p>

        <Grid container spacing={1}>
          <Grid item xs> 
            <Card style={{ minWidth: 200, maxWidth: 345, margin:10, padding:0}}  >
              <CardActionArea href= '/elements/Physical'>
                  <CardMedia 
                  component="img"
                  height='140'
                  title="Physical"
                  image={Earth} />
                  <CardContent> 
                  <h3>Earth (Physical)</h3>
                  </CardContent>
              </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs> 
              <Card style={{ minWidth: 200, maxWidth: 345,margin:10, padding:0}}>
                <CardActionArea href= '/elements/Spiritual'>
                    <CardMedia 
                    component="img"
                    height='140'
                    title="Spiritual"
                    image={Fire}/>
                    <CardContent>
                    <h3>Fire (Spiritual)</h3>
                    </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item xs> 
              <Card style={{ minWidth: 200, maxWidth: 345, margin:10, padding:0}}>
                <CardActionArea href= '/elements/Mental'>
                    <CardMedia
                    component="img"
                    height='140'
                    title="Mental"
                    image={Air}/>
                    <CardContent>
                        <h3>Air (Mental)</h3>
                    </CardContent>
                </CardActionArea  >
              </Card>
            </Grid>

            <Grid item xs> 
              <Card style={{ minWidth: 200, maxWidth: 345,margin:10, padding:0}}>
                <CardActionArea href= '/elements/Social'>
                    <CardMedia
                    component="img"
                    height='140'
                    title="Social"
                    image={Water}/>
                    <CardContent>
                        <h3>Water (Social)</h3>
                    </CardContent>
                </CardActionArea>
              </Card>  
            </Grid>
         </Grid> 

      <p style={{ padding:10,margin:10}}>
      Within each pillare there are 9 principles.  Each principle has a series of requirements to complete to rank up.</p>   
      <Grid container spacing={3}>
        <Grid item xs>       
          <img alt='Table of Elements' src={TableColor} style={{paddingTop:60,width:400}}/>
          
        </Grid>
        </Grid>
        
            <Card style={{  display: 'flex',Width: 50, margin:10, padding:10}}  >
            <CardActionArea href= 'https://www.amazon.com/dp/1699871310/ref=cm_sw_em_r_mt_dp_U_a0SZDbXW3MYBR'>
                <CardMedia/>
                <CardContent>
                <h1>Get the Guidebook</h1>
                </CardContent>
            </CardActionArea>
            </Card>
        </body>
      </div>
    );
  }
}
export default Home;
