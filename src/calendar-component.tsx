import * as React from 'react';
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { SampleBase } from './sample-base';



class Combo extends SampleBase<{}, {}> {

  public calendarInstance: CalendarComponent;
  public float: string[] = ['Auto', 'Never', 'Always'];
  public format: string[] = ['dd/MM/yyyy', 'MM/dd/yy', 'MMMM-dd-yyyy'];
  public start: string[] = ['Month', 'Year', 'Decade'];
  public depth: string[] = ['Month', 'Year', 'Decade'];
  public widthDimention = {
    width: '200px'
  }
  constructor(prop: any) {
    super(prop);
    this.enablePersistence = this.enablePersistence.bind(this);
    this.enableRTL = this.enableRTL.bind(this);
    this.enable = this.enable.bind(this);
    this.readOnly = this.readOnly.bind(this);
    this.strictMode = this.strictMode.bind(this);
    this.showClearButton = this.showClearButton.bind(this);
    this.enableWeekNumber = this.enableWeekNumber.bind(this);
    this.showtodaybutton = this.showtodaybutton.bind(this);
    this.floatChange = this.floatChange.bind(this);
    this.formatChange = this.formatChange.bind(this);
    this.startChange = this.startChange.bind(this);
    this.depthChange = this.depthChange.bind(this);
    this.onPlaceHolderFocusout = this.onPlaceHolderFocusout.bind(this);
    this.onFirstFocusout = this.onFirstFocusout.bind(this);
    this.onValueFocusout = this.onValueFocusout.bind(this);
    this.onMinFocusout = this.onMinFocusout.bind(this);
    this.onMaxFocusout = this.onMaxFocusout.bind(this);
    this.onNumberFocusout = this.onNumberFocusout.bind(this);
    this.onStringFocusout = this.onStringFocusout.bind(this);
    this.onIndexFocusout = this.onIndexFocusout.bind(this);
    this.oncssClassFocusout = this.oncssClassFocusout.bind(this);
    this.showHide = this.showHide.bind(this);
    this.onDestroy = this.onDestroy.bind(this);
    this.GetView = this.GetView.bind(this);
    this.GetPesistData = this.GetPesistData.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onfocusIn = this.onfocusIn.bind(this);
  }

  public enablePersistence(args: any) {
    if (args.checked) {
      this.calendarInstance.enablePersistence = true;
    } else {
      this.calendarInstance.enablePersistence = false;
    }
  }

  public enableRTL(args: any) {
    if (args.checked) {
      this.calendarInstance.enableRtl = true;
    } else {
      this.calendarInstance.enableRtl = false;
    }
  }

  public readOnly(args: any) {
    // if (args.checked) {
    //   this.calendarInstance.readonly = true;
    // } else {
    //   this.calendarInstance.readonly = false;
    // }
  }

  public enable(args: any) {
    // if (args.checked) {
    //   this.calendarInstance.enabled = true;
    // } else {
    //   this.calendarInstance.enabled = false;
    // }
  }

  public strictMode(args: any) {
    // if (args.checked) {
    //   this.calendarInstance.strictMode = true;
    // } else {
    //   this.calendarInstance.strictMode = false;
    // }
  }
  public showClearButton(args: any) {
    // if (args.checked) {
    //   this.calendarInstance.showClearButton = true;
    // } else {
    //   this.calendarInstance.showClearButton = false;
    // }
  }

  public enableWeekNumber(args: any) {
    if (args.checked) {
      this.calendarInstance.weekNumber = true;
    } else {
      this.calendarInstance.weekNumber = false;
    }
  }

  public showtodaybutton(args: any) {
    if (args.checked) {
      this.calendarInstance.showTodayButton = true;
    } else {
      this.calendarInstance.showTodayButton = false;
    }
  }

  public floatChange(args: any) {
    // this.calendarInstance.floatLabelType = args.value;
  }

  public formatChange(args: any) {
    // this.calendarInstance.format = args.value;
  }

  public startChange(args: any) {
    this.calendarInstance.start = args.value;
  }

  public depthChange(args: any) {
    this.calendarInstance.depth = args.value;
  }

  public onPlaceHolderFocusout(args: any) {
    // if (args.target.value) {
    //   this.calendarInstance.placeholder = args.target.value;
    // } else {
    //   this.calendarInstance.placeholder = '';
    // }
  }

  public onMaxFocusout(args: any) {
    this.calendarInstance.max = args.target.value;
  }

  public onMinFocusout(args: any) {
    this.calendarInstance.min = args.target.value;
  }

  public onValueFocusout(args: any) {
    this.calendarInstance.value = args.target.value;
  }

  public onFirstFocusout(args: any) {
    this.calendarInstance.firstDayOfWeek = JSON.parse(args.target.value);
  }

  public onNumberFocusout(args: any) {
    // if (args.target.value) {
    //   this.calendarInstance.width = JSON.parse(args.target.value);
    // } else {
    //   return;
    // }
  }
  public onStringFocusout(args: any) {
    // if (args.target.value) {
    //   this.calendarInstance.width = args.target.value;
    // } else {
    //   return;
    // }
  }
  public onIndexFocusout(args: any) {
    // if (args.target.value) {
    //   this.calendarInstance.zIndex = JSON.parse(args.target.value);
    // }
  }

  public oncssClassFocusout(args: any) {
    // if (args.target.value) {
    //   this.calendarInstance.cssClass = args.target.value;
    // } else {
    //   this.calendarInstance.cssClass = '';
    // }
  }

  // methods

  public showHide(args: any) {
    // if (args.checked) {
    //   this.calendarInstance.show();
    // } else {
    //   this.calendarInstance.hide();
    // }
  }
  public onDestroy(args: any) {
    if (args.target.id === "destroy") {
      const a = document.getElementById('valid2')!;
      this.calendarInstance.destroy();
      a.innerHTML = "destroyed";
    }
  }

  public onfocusIn(args: any) {
    // const a = document.getElementById('valid6')!;
    // a.innerHTML = a.innerHTML + "Focused ";
  }

  public onBlur(args: any) {
    // const a = document.getElementById('valid5')!;
    // a.innerHTML = a.innerHTML + "Blured ";
  }

  public GetPesistData(args: any) {
    if (args.target.id === "persist") {
      const a = document.getElementById('valid1')!;
      a.innerHTML = this.calendarInstance.getPersistData();
    }
  }

  public GetView(args: any) {
    if (args.target.id === "getView") {
      const a = document.getElementById('valid')!;
      a.innerHTML = this.calendarInstance.currentView();
    }
  }


  public render() {
    return (
      <div id='combodefault' className='control-pane'>
        <div className='content-wrapper'>
          <div className='contents'>
            <label> DateTimePicker </label>
            <CalendarComponent id='calendar' ref={ele => this.calendarInstance = ele!} />
            <div id="text-area">
            <div id="text-values">
              <div id="valid" />
              <div id="valid1" />
              <div id="valid2" />
              </div>
            </div>
          </div>
        </div>
        <div className='contents1'>
          <div className='span3'>
            EnableStrict Persistence
          </div>
          <div className='span3'>
            <CheckBoxComponent id="persistData" change={this.enablePersistence} />
          </div>
          <div className='span3'>
            EnableRTL
      </div>
          <div className='span3'>
            <CheckBoxComponent id="rtl" change={this.enableRTL} />
          </div>
          <div className='span3'>
            Enabled
      </div>
          <div className='span3'>
            <CheckBoxComponent id="disable" change={this.enable} checked={true} />
          </div>
          <div className='span3'>
            ReadOnly
      </div>
          <div className='span3'>
            <CheckBoxComponent  id="read" change={this.readOnly} />
          </div>
          <div className='span3'>
            showClearButton
      </div>
          <div className='span3'>
            <CheckBoxComponent id="clear" change={this.showClearButton} checked={true} />
          </div>
          <div className='span3'>
            StrictMode
      </div>
          <div className='span3'>
            <CheckBoxComponent id="strict" change={this.strictMode} />
          </div>
          <div className='span3'>
            Placeholder Value
    </div>
          <div className='span3'>
            <div className='e-float-input'>
              <input type='text' id="placeholder" name={'placeholder'} onBlur={this.onPlaceHolderFocusout} />
              <span className='e-float-line' />
              <label className='e-float-text'>PlaceHolder</label>
            </div>
          </div>
          <div className='span3'>
            floatLabelType
    </div>
          <div className='span3'>
            <DropDownListComponent id="float" dataSource={this.float} change={this.floatChange}
              value={'Never'} placeholder={'flotLabelType'} width={'200px'} />
          </div>
          <div className='span3'>
            Formats
    </div>
          <div className='span3'>
            <DropDownListComponent id="format" dataSource={this.format} change={this.formatChange} value={'null'}
              placeholder={'Formats'} width={'200px'} />
          </div>
          <div className='span3'>
            showWeekNumber
      </div>
          <div className='span3'>
            <CheckBoxComponent id="week" change={this.enableWeekNumber} />
          </div>
          <div className='span3'>
            Today Button
      </div>
          <div className='span3'>
            <CheckBoxComponent  id="today" change={this.showtodaybutton} checked={true} />
          </div>
          <div className='span3'>
            Depth
      </div>
          <div className='span3'>
            <DropDownListComponent  id="depth" dataSource={this.depth} change={this.depthChange} />

          </div>
          <div className='span3'>
            Start
      </div>
          <div className='span3'>
            <DropDownListComponent id="start" dataSource={this.start} change={this.startChange} />

          </div>
          <div className='span3'>
            FirstDay
      </div>
          <div className='span3'>
            <div className='e-float-input'>
              <input type='text' id="firstDay" onBlur={this.onFirstFocusout} />
              <span className='e-float-line' />
              <label className='e-float-text'>Fist day Value</label>
            </div>
          </div>
          <div className='span3'>
            Value
      </div>
          <div className='span3'>
            <div className='e-float-input'>
              <input type='text' id="value" onBlur={this.onValueFocusout} style={this.widthDimention} />
              <span className='e-float-line'/>
              <label className='e-float-text'>Value</label>
            </div>
          </div>
          <div className='span3'>
            Min Value
      </div>
          <div className='span3'>
            <div className='e-float-input'>
              <input type='text' id="min" onBlur={this.onMinFocusout} />
              <span className='e-float-line' />
              <label className='e-float-text'>Min Value</label>
            </div>
          </div>
          <div className='span3'>
            Max Value
      </div>
          <div className='span3'>
            <div className='e-float-input'>
              <input type='text' id="max" onBlur={this.onMaxFocusout} />
              <span className='e-float-line' />
              <label className='e-float-text'>max Value</label>
            </div>
          </div>

          <div className='span3'>
            Width string Value
      </div>
          <div className='span3'>
            <div className='e-float-input'>
              <input type='text' id="widthS" onBlur={this.onStringFocusout} />
              <span className='e-float-line' />
              <label className='e-float-text'>Width String Value</label>
            </div>
          </div>
          <div className='span3'>
            Width number Value
      </div>
          <div className='span3'>
            <div className='e-float-input'>
              <input type='text' id="widthN" onBlur={this.onNumberFocusout} />
              <span className='e-float-line' />
              <label className='e-float-text'>Width number Value</label>
            </div>
          </div>
          <div className='span3'>
            Z-index Value
      </div>
          <div className='span3'>
            <div className='e-float-input'>
              <input type='text' id="zindex" onBlur={this.onIndexFocusout} />
              <span className='e-float-line' />
              <label className='e-float-text'>Z-index Value</label>
            </div>
          </div>
          <div className='span3'>
            cssclassName Value
      </div>
          <div className='span3'>
            <div className='e-float-input'>
              <input type='text' id="cssClass" onBlur={this.oncssClassFocusout} />
              <span className='e-float-line' />
              <label className='e-float-text'>cssclassName Value</label>
            </div>
          </div>
          <div>
            Methods:
            <div>
              <div className='span3'>
                Show/Hide
              </div>
              <div className='span3'>
                <CheckBoxComponent id="showHide" change={this.showHide} />
              </div>
              <div className='span3'>
                Destroy
              </div>
              <div className='span3'>
                <button onClick={this.onDestroy} id="destroy" >Destroy</button>
              </div>
              <div className='span3'>
                FocusIn
              </div>
              <div className='span3'>
                <button onClick={this.onfocusIn} id="focusIN" >focusIn</button>
              </div>
              <div className='span3'>
                FocusOut
              </div>
              <div className='span3'>
                <button onClick={this.onBlur} id="focusOUT"  >FocusOut</button>
              </div>
              <div className='span3'>
                GetPesistData
              </div>
              <div className='span3'>
                <button onClick={this.GetPesistData} id="persist"  >GetPesistData</button>
              </div>
              <div className='span3'>
                GetCurrentView
              </div>
              <div className='span3'>
                <button onClick={this.GetView} id="getView"  >GetView</button>
              </div>
            </div>
          </div>

        </div >
      </div>
    );
  }
}
export default Combo;
