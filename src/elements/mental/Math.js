import React from 'react';
import MaterialTable from "material-table";
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';
import { Check, Edit, Clear }from '@material-ui/icons';
import firebase from '../../config/firebase';


// let requirements = []
let db = firebase.firestore()

// let awesomeMath = db.get.requirements(snapshot)
  


var updateReq = db.collection("users").doc("requirements");
updateReq.set({
    
    awesomeMath: [
      { requirements: 'Add and subtract 3 digits without a calculator', completed: '', approver: '' },
      { requirements: 'Memorize times tables to 12', completed: '', approver: '' },
      { requirements: 'Understand basic algebra (unit conversion and solving for x)', completed: '', approver: '' },
      { requirements: 'Calculate the area of a rectangle, triangle and circle and the volume of a cylinder, cube and pyramid', completed: '', approver: '' },
      { requirements: 'Calculate percentage (for tips or discounts)', completed: '', approver: '' },
      { requirements: 'Know the Order of Operations', completed: '', approver: '' },
    ],
    
//     epicMath: [
//       { requirements: 'Create a video of yourself teaching a math concept', completed: '', approver: '' },
//       { requirements: 'Pass AP Calculus test', completed: '', approver: '' },
//       { requirements: 'Publish a useful app in an app store', completed: '', approver: '' },
//       { requirements: 'Learn 3 programming languages', completed: '', approver: '' },
//       { requirements: 'Memorize pi to the 20th digit', completed: '', approver: '' },
//       { requirements: 'Score 100% on the math sections of the SAT or ACT ', completed: '', approver: '' },
//       { requirements: 'Publish a paper in a math journal', completed: '', approver: '' },
//       { requirements: 'Be a math tutor for a semester ', completed: '', approver: '' },
//       { requirements: 'Be able to quickly multiply any 2 digit numbers without a calculator', completed: '', approver: '' },
//       { requirements: 'Win a regional Math Olympiad', completed: '', approver: '' },
//       { requirements: 'Be awarded a math related grant', completed: '', approver: '' },
//       ]
});

class Math extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {title: 'REQUIREMENT', field: 'requirements', editable: 'never' },
        {title: 'COMPLETED', field: 'completed', type: 'date' },
        {title: 'APPROVED', field: 'approver',lookup: { 1: 'Dad', 2: 'Mom', 3:'Youth Leader' },
        },
      ],
      
      awesomeMath: 
      
      [
        { requirements: 'Add and subtract 3 digits without a calculator', completed: '', approver: '' },
        { requirements: 'Memorize times tables to 12', completed: '', approver: '' },
        { requirements: 'Understand basic algebra (unit conversion and solving for x)', completed: '', approver: '' },
        { requirements: 'Calculate the area of a rectangle, triangle and circle and the volume of a cylinder, cube and pyramid', completed: '', approver: '' },
        { requirements: 'Calculate percentage (for tips or discounts)', completed: '', approver: '' },
        { requirements: 'Know the Order of Operations', completed: '', approver: '' },
      ],

      
      epicMath: [
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

        <body style={{ margin:20 }}>
       
      <Breadcrumbs>
        <Link href="/Pages/Home"><HomeIcon /></Link>
        <Link href="../../elements/Mental" >
          <SchoolIcon /></Link>
        <Typography color="textPrimary">Math</Typography>
      </Breadcrumbs>

      <div style={{ paddingTop:20}}>
              <h1> Math</h1>
      <MaterialTable 
             icons={{ Check: Check, Edit: Edit, Clear:Clear }}
              options={{search: false, sorting:false, paging: false, actionsColumnIndex: -1 }}
              title="Awesome Level Requirements"
              columns={this.state.columns}
              data={this.state.awesomeMath}
              editable={{
                
                onRowUpdate: (newData, oldData) =>

            
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      {
                        const awesomeMath = this.state.awesomeMath;
                        const index = awesomeMath.indexOf(oldData);
                        awesomeMath[index] = newData;
                        this.setState({ awesomeMath }, () => resolve());
                      }
                      resolve()
                    }, 1000);
                    db.collection("users").doc("requirements").update({
                      "awesomeMath[index].completed": newData,
                      "awesomeMath[index].approver": newData
                  })
                })


.then(function() {
    console.log("Document successfully updated!");
    

                  }),
               
              }}
            />

<div style={{ paddingTop:20}}>

        <MaterialTable 
             icons={{ Check: Check, Edit: Edit, Clear:Clear }}
              options={{search: false, sorting:false, paging: false, actionsColumnIndex: -1 }}
              title="Epic Level Requirements (Pick 3)"
              columns={this.state.columns}
              data={this.state.epicMath}
              editable={{
                
                onRowUpdate: (newData, oldData) =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      {
                        const epicMath = this.state.epicMath;
                        const index = epicMath.indexOf(oldData);
                        epicMath[index] = newData;
                        this.setState({ epicMath }, () => resolve());
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
