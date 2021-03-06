import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { Grid } from '@material-ui/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import Earth from './images/Physical.svg';
import Fire from './images/Spiritual.svg';
import Air from './images/Mental.svg';
import Water from './images/Social.svg';
import { Chart } from "react-google-charts";



class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };
    this.firebase = firebase;
  }

  
  
  render() {
   
    

    return (
      <div className="App" style={{ paddingTop:60, }} align="Left">

        <body style={{ margin:20,}}>
          <h1>Profile</h1> 
          
          <Card style={{ margin:10, padding:0}}  >
           
            <CardActionArea href= '/elements/Physical'>
            <CardHeader
                avatar={<Avatar>R</Avatar> }
                title="Username"
                subheader="Being Awesome since September 14, 2016"
              />
                
                <CardContent> 
                <h3>Companion(s)</h3>
                <p>name</p>
                <h3>Sponsor(s)</h3>
                <p>name</p>
                <h3>Start date</h3>
                <p>date</p>
                </CardContent>
            </CardActionArea>
            </Card>
          <Grid container spacing={1}>
       



        </Grid> 
        <Card style={{margin:10, padding:0}}>
            <CardActionArea href= '/elements/Physical'>                
                <CardContent>
                <Chart
                  height={'300px'}
                  chartType="Bar"
                  loader={<div>Loading Chart</div>}
                  data={[
                    ['Principle', 'Awesome', 'Epic', 'Legendary'],
                    ['Strength', 100, 66, 0],
                    ['Endurance', 50, 33, 0],
                    ['Agility', 20, 0, 0],
                    ['Dexterity', 75, 0, 0],
                    ['Poise', 100, 66, 0],
                    ['Nutrition', 50, 33, 0],
                    ['First Aid', 20, 0, 0],
                    ['Survival', 75, 0, 0]]}
                  options={{
                    // Material design options
                    chart: {
                      title: 'Earth',
                      subtitle: 'Progress on Pyhsical Requirements',
                    },}}
                  // For tests
                  rootProps={{ 'data-testid': '2' }}
                />  
                </CardContent>
            </CardActionArea>
          </Card> 
          <Card style={{margin:10, padding:0}}>
            <CardActionArea href= '/elements/Spiritual'>                
                <CardContent>
                <Chart
                  height={'300px'}
                  chartType="Bar"
                  loader={<div>Loading Chart</div>}
                  data={[
                    ['Principle', 'Awesome', 'Epic', 'Legendary'],
                    ['Integrity', 100, 66, 0],
                    ['Humility', 50, 33, 0],
                    ['Virtue', 20, 0, 0],
                    ['Faith', 75, 0, 0],
                    ['Hope', 100, 66, 0],
                    ['Charity', 50, 33, 0],
                    ['Patience', 20, 0, 0],
                    ['Grit', 20, 0, 0],
                    ['Diligence', 75, 0, 0]]}
                  options={{
                    // Material design options
                    chart: {
                      title: 'Fire',
                      subtitle: 'Progress on Spiritual Requirements',
                    },}}
                  // For tests
                  rootProps={{ 'data-testid': '2' }}
                />  
                </CardContent>
            </CardActionArea>
          </Card> 
          <Card style={{margin:10, padding:0}}>
            <CardActionArea href= '/elements/Mental'>                
                <CardContent>
                <Chart
                  height={'300px'}
                  chartType="Bar"
                  loader={<div>Loading Chart</div>}
                  data={[
                    ['Principle', 'Awesome', 'Epic', 'Legendary'],
                    ['Math', 100, 66, 0],
                    ['Science', 50, 33, 0],
                    ['History', 20, 0, 0],
                    ['Engineering', 75, 0, 0],
                    ['Technology', 100, 66, 0],
                    ['Geography', 50, 33, 0],
                    ['Language', 20, 0, 0],
                    ['Civics', 20, 0, 0],
                    ['Finance', 75, 0, 0]]}
                  options={{
                    // Material design options
                    chart: {
                      title: 'Air',
                      subtitle: 'Progress on Mental Requirements',
                    },}}
                  // For tests
                  rootProps={{ 'data-testid': '2' }}
                />  
                </CardContent>
            </CardActionArea>
          </Card> 
          <Card style={{margin:10, padding:0}}>
            <CardActionArea href= '/elements/Social'>                
                <CardContent>
                <Chart
                  height={'300px'}
                  chartType="Bar"
                  loader={<div>Loading Chart</div>}
                  data={[
                    ['Principle', 'Awesome', 'Epic', 'Legendary'],
                    ['Leadership', 100, 66, 0],
                    ['Confidence', 50, 33, 0],
                    ['Courage', 20, 0, 0],
                    ['Responsability', 75, 0, 0],
                    ['Empathy', 100, 66, 0],
                    ['Enthusiasm', 50, 33, 0],
                    ['Music', 20, 0, 0],
                    ['Art', 20, 0, 0],
                    ['Culture', 75, 0, 0]]}
                  options={{
                    // Material design options
                    chart: {
                      title: 'Water',
                      subtitle: 'Progress on Social Requirements',
                    },}}
                  // For tests
                  rootProps={{ 'data-testid': '2' }}
                />  
                </CardContent>
            </CardActionArea>
          </Card> 
        
        </body>
      </div>
    );
  }
}
export default Profile;
