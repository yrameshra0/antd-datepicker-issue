import React from 'react';
import { Select, DatePicker } from 'antd'
const Option = Select.Option;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Select style={{ width: 220 }} >
          <Option key="startDate"> <DatePicker /> </Option>
          <Option key="middleDate"> <DatePicker /> </Option>
          <Option key="endDate"> <DatePicker/> </Option>
        </Select>
      </header>
    </div>
  );
}

export default App;
