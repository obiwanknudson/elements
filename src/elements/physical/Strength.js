import React from 'react';
import MaterialTable from "material-table";
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import { Check, Edit, Clear }from '@material-ui/icons';
import { awesomeStrength, epicStrength } from '../../components/reqs'


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
      awesomeStrength: awesomeStrength,
      epicStrength: epicStrength,
    }
  }
  
  render() {
    return (
     <div className="App" style={{ paddingTop:60}}>

        <body style={{ margin:20, }}>
       
      <Breadcrumbs>
        <Link href="/Pages/Home"><HomeIcon /></Link>
        <Link href="../Physical" >
          <AccessibilityIcon /> </Link>
        <Typography color="textPrimary">Strength</Typography>
      </Breadcrumbs>

      <div>
              <h1> Strength</h1>
      <MaterialTable 
             icons={{ Check: Check, Edit: Edit, Clear:Clear }}
              options={{search: false, sorting:false, paging: false, actionsColumnIndex: -1 }}
              title="Awesome Level Requirements"
              columns={this.state.columns}
              data={this.state.awesomeStrength}
              editable={{
                
                onRowUpdate: (newData, oldData) =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      {
                        const awesomeStrength = this.state.awesomeStrength;
                        const index = awesomeStrength.indexOf(oldData);
                        awesomeStrength[index] = newData;
                        this.setState({ awesomeStrength }, () => resolve());
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
              data={this.state.epicStrength}
              editable={{
                
                onRowUpdate: (newData, oldData) =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      {
                        const epicStrength = this.state.data2;
                        const index = epicStrength.indexOf(oldData);
                        epicStrength[index] = newData;
                        this.setState({ epicStrength }, () => resolve());
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
export default Strength
