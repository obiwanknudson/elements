import React from 'react';
import MaterialTable from "material-table";
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Check, Edit, Clear }from '@material-ui/icons';
import { awesomeFaith, epicFaith } from '../../components/reqs'

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
      awesomeFaith: awesomeFaith,
      epicFaith: epicFaith
    }
  }
  
  render() {
    return (
     <div className="App" style={{ paddingTop:60}}>

        <body style={{ margin:20, }}>
       
      <Breadcrumbs>
        <Link href="/Pages/Home"><HomeIcon /></Link>
        <Link href="../Spiritual" >
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
              data={this.state.awesomeFaith}
              editable={{
                
                onRowUpdate: (newData, oldData) =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      {
                        const awesomeFaith = this.state.awesomeFaith;
                        const index = awesomeFaith.indexOf(oldData);
                        awesomeFaith[index] = newData;
                        this.setState({ awesomeFaith }, () => resolve());
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
              data={this.state.epicFaith}
              editable={{
                
                onRowUpdate: (newData, oldData) =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      {
                        const epicFaith = this.state.epicFaith;
                        const index = epicFaith.indexOf(oldData);
                        epicFaith[index] = newData;
                        this.setState({ epicFaith }, () => resolve());
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