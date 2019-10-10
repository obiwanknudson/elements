import React from 'react';
import MaterialTable from "material-table";
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';
import { Check, Edit, Clear }from '@material-ui/icons';



class Math extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {title: 'REQUIREMENT', field: 'requirements', editable: 'never' },
        {title: 'COMPLETED', field: 'completed', type: 'date' },
        {title: 'APPROVED', field: 'approver',lookup: { 1: 'Dad', 2: 'Mom' },
        },
      ],
      data: [
        { requirements: 'Add and subtract 3 digits without a calculator', completed: '', approver: '' },
        { requirements: 'Memorize times tables to 12', completed: '', approver: '' },
        { requirements: 'Understand basic algebra (unit conversion and solving for x)', completed: '', approver: '' },
        { requirements: 'Calculate the area of a rectangle, triangle and circle and the volume of a cylinder, cube and pyramid', completed: '', approver: '' },
        { requirements: 'Calculate percentage (for tips or discounts)', completed: '', approver: '' },
        { requirements: 'Know the Order of Operations', completed: '', approver: '' },
      ],

      
      data2: [
        { requirements: 'Create a video of yourself teaching a math concept', completed: '', approver: '' },
        { requirements: 'Pass AP Calculus test', completed: '', approver: '' },
        { requirements: 'Publish a useful app in an app store', completed: '', approver: '' },
        { requirements: 'Learn 3 programming languages', completed: '', approver: '' },
        { requirements: 'Memorize pi to the 20th digit', completed: '', approver: '' },
        { requirements: 'Score 100% on the math sections of the SAT or ACT ', completed: '', approver: '' },
        { requirements: 'Publish a paper in a math journal', completed: '', approver: '' },
        { requirements: 'Be a math tutor for a semester ', completed: '', approver: '' },
        { requirements: 'Be able to quickly multiply any 2 digit numbers without a calculator', completed: '', approver: '' },
        { requirements: 'Win a regional Math Olympiad', completed: '', approver: '' },
        { requirements: 'Be awarded a math related grant', completed: '', approver: '' },
        ]
    }
  }
  
  render() {
    return (
     <div className="App" style={{ paddingTop:60}}>

        <body style={{ margin:20, }}>
       
      <Breadcrumbs>
        <Link href="/Pages/Home"><HomeIcon /></Link>
        <Link href="./Mental" >
          <SchoolIcon /></Link>
        <Typography color="textPrimary">Math</Typography>
      </Breadcrumbs>

      <div style={{ paddingTop:20}}>
              <h1> Math</h1>
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
export default Math;
