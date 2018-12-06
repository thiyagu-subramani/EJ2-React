/**
 * AutoComplete Default functionality Sample
 */
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
// import { SampleBase } from './sample-base';
// import { PropertyPane } from './property-pane';
import Home from './datepicker-component';
import Auto from './datetime-component';
import Combo from './calendar-component';
import DateRange from './daterangepicker-component';
import sidebar from './sidebar-component';
import Time from './timepicker-component';


export class Default extends React.Component<{}, {}> {

 public render() {
    return (
      <BrowserRouter>
        <div >
          <h2>Syncfusion controls</h2>
          <ul className='navigation nav navbar-nav'>
            <li className='active' id="date" ><Link to={'/'} >DatePicker</Link></li>
            <li id="dateTime"><Link to={'/datetime-component'} >DateTimePicker</Link></li>
            <li id="cal"><Link to={'/calendar-component'}>Calendar</Link></li>
            <li id="dateRange"><Link to={'/daterangepicker-component'}>DateRangePicker</Link></li>
            <li id="side"><Link to={'/sidebar-component'}>Sidebar</Link></li>
            <li id="time"><Link to={'/timepicker-component'}>Time</Link></li>
          </ul>

          <Switch>
            <Route exact path='/' active={true}  component={Home}  />
            <Route exact path='/datetime-component' component={Auto} />
            <Route exact path='/calendar-component' component={Combo} />
            <Route exact path='/daterangepicker-component'  component={DateRange} />
            <Route exact path='/sidebar-component' component={sidebar} />
            <Route exact path='/timepicker-component' component={Time} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
ReactDOM.render(<Default />, document.getElementById('sample'));
