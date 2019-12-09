import React from 'react';
import MaterialTable from "material-table";
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';
import { Check, Edit, Clear }from '@material-ui/icons';
import 'firebase/firestore';
import { awesomeMath, epicMath } from '../../components/reqs'


//*

// getReq.get()
// loadReq.update({
    
//     awesomeMath: [


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
      awesomeMath: awesomeMath,
      epicMath: epicMath
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
             
      <MaterialTable icons={{ Check: Check, Edit: Edit, Clear:Clear }}
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
                        this.setState({ awesomeMath }, 
                                                 
                          () => resolve());
                    }
                      resolve()
                    }, 1000)
                  })
                }}/>
<div style={{ paddingTop:20}}>

        <MaterialTable icons={{ Check: Check, Edit: Edit, Clear:Clear }}
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


               
              }} /></div>
        </div>
        
        </body>
      </div>
    );
  }


  
  handleSubmit = (event) => {
    event.preventDefault();
    let approver = this.refs.approver.value;
    let completed = this.refs.completed.value;
    let uid = this.refs.uid.value;
  
    if (uid && approver && completed){
      const { developers } = this.state;
      const devIndex = developers.findIndex(data => {
        return data.uid === uid 
      });
      developers[devIndex].approver = approver;
      developers[devIndex].completed = completed;
      this.setState({ developers });
    }
    else if (approver && completed ) {
      const uid = new Date().getTime().toString();
      const { developers } = this.state;
      developers.push({ uid, approver, completed })
      this.setState({ developers });
    }
  
    this.refs.approver.value = '';
    this.refs.completed.value = '';
    this.refs.uid.value = '';
  }
  
  removeData = (developer) => {
    const { developers } = this.state;
    const newState = developers.filter(data => {
      return data.uid !== developer.uid;
    });
    this.setState({ developers: newState });
  }
  
  updateData = (developer) => {
    this.refs.uid.value = developer.uid;
    this.refs.approver.value = developer.approver;
    this.refs.completed.value = developer.completed;
  }
}
export default Math;
