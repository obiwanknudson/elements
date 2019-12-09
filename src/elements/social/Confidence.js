import React from 'react';
import MaterialTable from "material-table";
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import ShareIcon from '@material-ui/icons/Group';
import { Check, Edit, Clear }from '@material-ui/icons';
import { awesomeConfidence, epicConfidence } from '../../components/reqs'

class Confidence extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {title: 'REQUIREMENT', field: 'requirements', editable: 'never' },
        {title: 'COMPLETED', field: 'completed', type: 'date' },
        {title: 'APPROVED', field: 'approver',lookup: { 1: 'Dad', 2: 'Mom' },
        },
      ],
      awesomeConfidence: awesomeConfidence,
      epicConfidence: epicConfidence 
    }
  }
  
  render() {
    return (
     <div className="App" style={{ paddingTop:60}}>

        <body style={{ margin:20, }}>
       
      <Breadcrumbs>
        <Link href="/Pages/Home"><HomeIcon /></Link>
        <Link href="../Social" >
          <ShareIcon /> </Link>
        <Typography color="textPrimary">Confidence
    </Typography>
      </Breadcrumbs>

      <div>
              <h1> Confidence</h1>

      <MaterialTable 
             icons={{ Check: Check, Edit: Edit, Clear:Clear }}
              options={{search: false, sorting:false, paging: false, actionsColumnIndex: -1 }}
              // localization={{ header: { actions: 'Pass'}}}
              title="Awesome Level Requirements"
              columns={this.state.columns}
              data={this.state.awesomeConfidence}
              editable={{
                
                onRowUpdate: (newData, oldData) =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      {
                        const awesomeConfidence = this.state.awesomeConfidence;
                        const index = awesomeConfidence.indexOf(oldData);
                        awesomeConfidence[index] = newData;
                        this.setState({ awesomeConfidence }, () => resolve());
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
              data={this.state.epicConfidence}
              editable={{
                
                onRowUpdate: (newData, oldData) =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      {
                        const epicConfidence = this.state.epicConfidence;
                        const index = epicConfidence.indexOf(oldData);
                        epicConfidence[index] = newData;
                        this.setState({ epicConfidence }, () => resolve());
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
export default Confidence;
