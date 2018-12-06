/**
 * AutoComplete Default functionality Sample
 */
// import * as ReactDOM from 'react-dom';
import * as React from 'react';
// import { BrowserRouter, Route, Link } from "react-router-dom";
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { SampleBase } from './sample-base';
// import { PropertyPane } from './property-pane';

class Time extends SampleBase<{}, {}> {

  public timeInstance: TimePickerComponent;
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
    this.floatChange = this.floatChange.bind(this);
    this.formatChange = this.formatChange.bind(this);
    this.onPlaceHolderFocusout = this.onPlaceHolderFocusout.bind(this);
    this.onValueFocusout = this.onValueFocusout.bind(this);
    this.onMinFocusout = this.onMinFocusout.bind(this);
    this.onMaxFocusout = this.onMaxFocusout.bind(this);
    this.onNumberFocusout = this.onNumberFocusout.bind(this);
    this.onStringFocusout = this.onStringFocusout.bind(this);
    this.onIndexFocusout = this.onIndexFocusout.bind(this);
    this.oncssClassFocusout = this.oncssClassFocusout.bind(this);
    this.showHide = this.showHide.bind(this);
    this.onDestroy = this.onDestroy.bind(this);
    this.GetPesistData = this.GetPesistData.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onfocusIn = this.onfocusIn.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onComponentBlur = this.onComponentBlur.bind(this);
    this.onOpen = this.onOpen.bind(this);
    this.onComponentDestroy = this.onComponentDestroy.bind(this);
    this.onCreated = this.onCreated.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  public enablePersistence(args: any) {
    // debugger;
    if (args.checked) {
      this.timeInstance.enablePersistence = true;
    } else {
      this.timeInstance.enablePersistence = false;
    }
  }

  public enableRTL(args: any) {
    if (args.checked) {
      this.timeInstance.enableRtl = true;
    } else {
      this.timeInstance.enableRtl = false;
    }
  }

  public readOnly(args: any) {
    if (args.checked) {
      this.timeInstance.readonly = true;
    } else {
      this.timeInstance.readonly = false;
    }
  }

  public enable(args: any) {
    if (args.checked) {
      this.timeInstance.enabled = true;
    } else {
      this.timeInstance.enabled = false;
    }
  }

  public strictMode(args: any) {
    if (args.checked) {
      this.timeInstance.strictMode = true;
    } else {
      this.timeInstance.strictMode = false;
    }
  }
  public showClearButton(args: any) {
    if (args.checked) {
      this.timeInstance.showClearButton = true;
    } else {
      this.timeInstance.showClearButton = false;
    }
  }


  public floatChange(args: any) {
    this.timeInstance.floatLabelType = args.value;
  }

  public formatChange(args: any) {
    this.timeInstance.format = args.value;
  }

  public onPlaceHolderFocusout(args: any) {
    if (args.target.value) {
      this.timeInstance.placeholder = args.target.value;
    } else {
      this.timeInstance.placeholder = '';
    }
  }

  public onMaxFocusout(args: any) {
    this.timeInstance.max = args.target.value;
  }

  public onMinFocusout(args: any) {
    this.timeInstance.min = args.target.value;
  }

  public onValueFocusout(args: any) {
    this.timeInstance.value = args.target.value;
  }

  public onNumberFocusout(args: any) {
    if (args.target.value) {
      this.timeInstance.width = JSON.parse(args.target.value);
    } else {
      return;
    }
  }
  public onStringFocusout(args: any) {
    if (args.target.value) {
      this.timeInstance.width = args.target.value;
    } else {
      return;
    }
  }
  public onIndexFocusout(args: any) {
    if (args.target.value) {
      this.timeInstance.zIndex = JSON.parse(args.target.value);
    }
  }

  public oncssClassFocusout(args: any) {
    if (args.target.value) {
      this.timeInstance.cssClass = args.target.value;
    } else {
      this.timeInstance.cssClass = '';
    }
  }

  // methods

  public showHide(args: any) {
    if (args.checked) {
      this.timeInstance.show();
    } else {
      this.timeInstance.hide();
    }
  }

  public onDestroy(args: any) {
    if (args.target.id === "destroy") {
      const a = document.getElementById('valid3')!;
      this.timeInstance.destroy();
      a.innerHTML = "destroyed";
    }
  }

  public onfocusIn(args: any) {
    this.timeInstance.focusIn();
  }

  public onBlur(args: any) {
    this.timeInstance.focusOut();
  }

  public GetPesistData(args: any) {
    if (args.target.id === "persist") {
      const a = document.getElementById('valid')!;
      a.innerHTML = this.timeInstance.getPersistData();
    }
  }

  public onClose(args: any) {
    const a = document.getElementById('valid1')!;
    a.innerHTML = "Closed";
  }
  public onCreated(args: any) {
    const a = document.getElementById('valid2')!;
    a.innerHTML = "Created";
  }
  public onComponentDestroy(args: any) {
    const a = document.getElementById('valid7')!;
    a.innerHTML = "Destroy";
  }
  public onChange(args: any) {
    const a = document.getElementById('valid3')!;
    a.innerHTML = a.innerHTML + "Changed ";

  }
  public onOpen(args: any) {
    const a = document.getElementById('valid4')!;
    a.innerHTML = "Opened";
  }
  public onComponentBlur(args: any) {
    const a = document.getElementById('valid5')!;
    a.innerHTML = a.innerHTML + "Blured ";
  }
  public onFocus(args: any) {
    const a = document.getElementById('valid6')!;
    a.innerHTML = a.innerHTML + "Focused ";
  }

  public render() {
    return (
      <div id='combodefault' className='control-pane'>
        <div className='content-wrapper'>
          <div className='contents'>
            <label> TimePicker feature matrix sample </label>
            <TimePickerComponent id='timepicker' ref={ele => this.timeInstance = ele!} change={this.onChange}
              blur={this.onComponentBlur} open={this.onOpen} destroyed={this.onComponentDestroy}
              created={this.onCreated} focus={this.onFocus} close={this.onClose} width="250px" />
            <div id="text-area">
              <div id="text-values">
                <div id="valid" />
                <div id="valid1" />
                <div id="valid2" />
                <div id="valid3" />
                <div id="valid4" />
                <div id="valid5" />
                <div id="valid6" />
                <div id="valid7" />
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
            <CheckBoxComponent id="read" change={this.readOnly} />
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
              <input type='text' id={'placeholder'} name={'placeholder'} onBlur={this.onPlaceHolderFocusout} />
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
            Value
      </div>
          <div className='span3'>
            <div className='e-float-input'>
              <input type='text' id={'value'} onBlur={this.onValueFocusout} style={this.widthDimention} />
              <span className='e-float-line' />
              <label className='e-float-text'>Value</label>
            </div>
          </div>
          <div className='span3'>
            Min Value
      </div>
          <div className='span3'>
            <div className='e-float-input'>
              <input type='text' id={'min'} onBlur={this.onMinFocusout} />
              <span className='e-float-line' />
              <label className='e-float-text'>Min Value</label>
            </div>
          </div>
          <div className='span3'>
            Max Value
      </div>
          <div className='span3'>
            <div className='e-float-input'>
              <input type='text' id={'max'} onBlur={this.onMaxFocusout} />
              <span className='e-float-line' />
              <label className='e-float-text'>max Value</label>
            </div>
          </div>

          <div className='span3'>
            Width string Value
      </div>
          <div className='span3'>
            <div className='e-float-input'>
              <input type='text' id={'widthS'} onBlur={this.onStringFocusout} />
              <span className='e-float-line' />
              <label className='e-float-text'>Width String Value</label>
            </div>
          </div>
          <div className='span3'>
            Width number Value
      </div>
          <div className='span3'>
            <div className='e-float-input'>
              <input type='text' id={'widthN'} onBlur={this.onNumberFocusout} />
              <span className='e-float-line' />
              <label className='e-float-text'>Width number Value</label>
            </div>
          </div>
          <div className='span3'>
            Z-index Value
      </div>
          <div className='span3'>
            <div className='e-float-input'>
              <input type='text' id={'zindex'} onBlur={this.onIndexFocusout} />
              <span className='e-float-line' />
              <label className='e-float-text'>Z-index Value</label>
            </div>
          </div>
          <div className='span3'>
            cssclassName Value
      </div>
          <div className='span3'>
            <div className='e-float-input'>
              <input type='text' id={'cssClass'} onBlur={this.oncssClassFocusout} />
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
                <CheckBoxComponent change={this.showHide} />
              </div>
              <div className='span3'>
                Destroy
              </div>
              <div className='span3'>
                <button id={'destroy'} onClick={this.onDestroy} >Destroy</button>
              </div>
              <div className='span3'>
                FocusIn
              </div>
              <div className='span3'>
                <button id={'focusIN'} onClick={this.onfocusIn} >focusIn</button>
              </div>
              <div className='span3'>
                FocusOut
              </div>
              <div className='span3'>
                <button id={'focusOUT'} onClick={this.onBlur} >FocusOut</button>
              </div>
              <div className='span3'>
                GetPesistData
              </div>
              <div className='span3'>
                <button id={'persist'} onClick={this.GetPesistData} >GetPesistData</button>
              </div>
            </div>
          </div>

        </div >
      </div>
    );
  }
}
export default Time;
