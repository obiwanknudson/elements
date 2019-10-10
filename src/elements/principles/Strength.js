import React from 'react';
import MaterialTable from "material-table";
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import { Check, Edit, Clear }from '@material-ui/icons';



class Strength extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {title: 'REQUIREMENT', field: 'requirements', editable: 'never' },
        {title: 'COMPLETED', field: 'completed', type: 'date' },
        {title: 'APPROVED', field: 'approver',lookup: { 1: 'Dad', 2: 'Mom', 3:'Youth Leader', 4:'Sponser' },
        },
      ],
      data: [
        { requirements: '10 push ups, 30 sit ups, 1 pull-up', completed: '', approver: '' },
        { requirements: 'Box jump half your height,  broad jump your height', completed: '', approver: '' },
        { requirements: 'Carry 50 lbs 50 yds', completed: '', approver: '' },
        { requirements: 'Identify major muscle groups ', completed: '', approver: '' },
        { requirements: 'Complete balanced strength training routine for a month ', completed: '', approver: '' },
        { requirements: '1 minute plank', completed: '', approver: '' },
      ],

      
      data2: [
        { requirements: 'Bench press your weight', completed: '', approver: '' },
        { requirements: 'Dunk a basketball', completed: '', approver: '' },
        { requirements: 'Take a self defense course', completed: '', approver: '' },
        { requirements: 'Survive boot camp', completed: '', approver: '' },
        { requirements: 'Reach the highest level in a martial art ', completed: '', approver: '' },
        { requirements: 'Participate in an obstacle course race', completed: '', approver: '' },
        { requirements: 'Run 40m under 10 sec', completed: '', approver: '' },
        { requirements: 'Pass the presidential fitness test ', completed: '', approver: '' },
        { requirements: 'Climb 100 feet of rope', completed: '', approver: '' },
        { requirements: '100 pushups, 100 sit ups, 25 pull ups', completed: '', approver: '' },
        { requirements: 'Compete on an obstacle course game show (eg American Ninja Warrior)', completed: '', approver: '' },
        { requirements: 'Lift something over your head that weighs twice your weight', completed: '', approver: '' },
      ]
    }
  }
  
  render() {
    return (
     <div className="App" style={{ paddingTop:60}}>

        <body style={{ margin:20, }}>
       
      <Breadcrumbs>
        <Link href="/Pages/Home"><HomeIcon /></Link>
        <Link href="./Physical" >
          <AccessibilityIcon /> </Link>
        <Typography color="textPrimary">Strength</Typography>
      </Breadcrumbs>

      <div>
              <h1> Strength</h1>
      <MaterialTable 
             icons={{ Check: Check, Edit: Edit, Clear:Clear }}
              options={{search: false, sorting:false, paging: false, actionsColumnIndex: -1 }}
              // localization={{ header: { actions: 'Pass'}}}
              title="Awesome Level Requirements"
              columns={this.state.columns}
              data={this.state.data}
              editable={{
                
                onRowUpdate: (newData, oldData) =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      {
                        const data = this.state.data;
                        const index = data.indexOf(oldData);
                        data[index] = newData;
                        this.setState({ data }, () => resolve());
                      }
                      resolve()
                    }, 1000)
                  }),
               
              }}
            />

<div style={{ paddingTop:20}}>

        <MaterialTable 
             icons={{ Check: Check, Edit: Edit, Clear:Clear }}
              options={{search: false, sorting:false, paging: false, actionsColumnIndex: -1 }}
              title="Epic Level Requirements (Pick 3)"
              columns={this.state.columns}
              data={this.state.data2}
              editable={{
                
                onRowUpdate: (newData, oldData) =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      {
                        const data2 = this.state.data2;
                        const index = data2.indexOf(oldData);
                        data2[index] = newData;
                        this.setState({ data2 }, () => resolve());
                      }
                      resolve()
                    }, 1000)
                  }),
               
              }}
            />

        </div>
        </div>
        </body>
      </div>
    );
  }
}
export default Strength;
