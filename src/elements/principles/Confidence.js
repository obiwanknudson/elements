import React from 'react';
import MaterialTable from "material-table";
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import ShareIcon from '@material-ui/icons/Group';
import { Check, Edit, Clear }from '@material-ui/icons';

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
      data: [
        { requirements: 'List 10 stengths and talk about them with an adult', completed: '', approver: '' },
        { requirements: 'Have a conversation with someone you don’t know very well', completed: '', approver: '' },
        { requirements: 'Talk comfortably to someone of the opposite sex', completed: '', approver: '' },
        { requirements: 'Make a resume ', completed: '', approver: '' },
        { requirements: 'Haggle a price or complain to a manager to get a better price ', completed: '', approver: '' },
        { requirements: 'Know how to drive a stickshift', completed: '', approver: '' },
      ],

      
      data2: [
        { requirements: 'Earn the Public Speaking merit badge', completed: '', approver: '' },
        { requirements: 'Perform as the lead role in a play', completed: '', approver: '' },
        { requirements: 'Perform a service for someone who does that same service professionally', completed: '', approver: '' },
        { requirements: 'Sell something door to door for more than one full day', completed: '', approver: '' },
        { requirements: 'Tutor another student in a subject for a semester', completed: '', approver: '' },
        { requirements: 'Perform an original work on stage (song, poem, etc.)', completed: '', approver: '' },
        { requirements: 'Earn Epic Pins for First Aid and Survival', completed: '', approver: '' },
        { requirements: 'Host a radio show', completed: '', approver: '' },
        { requirements: 'Be part of a flash mob of more than 100 people', completed: '', approver: '' },
        { requirements: 'Live with somewhere without your family for 3 months', completed: '', approver: '' },
        { requirements: 'Perform a solo in a musical concert', completed: '', approver: '' },
      ]
    }
  }
  
  render() {
    return (
     <div className="App" style={{ paddingTop:60}}>

        <body style={{ margin:20, }}>
       
      <Breadcrumbs>
        <Link href="/Pages/Home"><HomeIcon /></Link>
        <Link href="./Social" >
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
export default Confidence;
