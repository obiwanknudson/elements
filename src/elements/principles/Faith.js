import React from 'react';
import MaterialTable from "material-table";
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Check, Edit, Clear }from '@material-ui/icons';



class Faith extends React.Component {
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
        { requirements: 'Be familiar with articles of faith or creed of your church.', completed: '', approver: '' },
        { requirements: 'Know 6 faith scriptures', completed: '', approver: '' },
        { requirements: 'Know how to navigate scriptures and read them regularly.', completed: '', approver: '' },
        { requirements: 'Be familiar with main tenets of world religions list ', completed: '', approver: '' },
        { requirements: 'Testify to others about your beliefs ', completed: '', approver: '' },
        { requirements: 'Pay tithing or offering to your church', completed: '', approver: '' },
      ],

      
      data2: [
        { requirements: 'Go to a week long church camp (FSY, trek, etc)', completed: '', approver: '' },
        { requirements: 'Attend a church service of 6 different faiths', completed: '', approver: '' },
        { requirements: 'Memorize the creeds or articles of faith of your religion', completed: '', approver: '' },
        { requirements: 'Teach Sunday School for 6 months', completed: '', approver: '' },
        { requirements: 'Memorize 12 scriptures about faith ', completed: '', approver: '' },
        { requirements: 'Practice the five pillars of Islam', completed: '', approver: '' },
        { requirements: 'Graduate from Seminary', completed: '', approver: '' },
        { requirements: 'Complete Catholic Catechism ', completed: '', approver: '' },
        { requirements: 'Read 2 books of scripture cover to cover twice ', completed: '', approver: '' },
        { requirements: 'Earn the Awesome Pin for every principle of the Spiritual pillar.', completed: '', approver: '' },
         ]
    }
  }
  
  render() {
    return (
     <div className="App" style={{ paddingTop:60}}>

        <body style={{ margin:20, }}>
       
      <Breadcrumbs>
        <Link href="/Pages/Home"><HomeIcon /></Link>
        <Link href="./Spiritual" >
          <FavoriteIcon /></Link>
        <Typography color="textPrimary">Faith</Typography>
      </Breadcrumbs>

      <div style={{ paddingTop:20}}>
       <h1>Faith</h1>       
      <MaterialTable 
             icons={{ Check: Check, Edit: Edit, Clear:Clear }}
              options={{search: false, sorting:false, paging: false, actionsColumnIndex: -1 }}
              headeractions= "Pass"
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
export default Faith;