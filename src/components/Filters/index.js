import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filtersSlice } from './filtersSlice';

const { Search } = Input;

export default function Filters() {
   const [inputSearch, setInputSearch] = useState();
   const [filterStatus, setFilterStatus] = useState('All');
   const [filterPriority, setFilterPriority] = useState([]);

   // declare dispatch
   const dispatch = useDispatch();

   const handleInputSearch = e => {
      setInputSearch(e.target.value);
      dispatch(filtersSlice.actions.searchFilterChange(e.target.value));
      // console.log(inputSearch);
   };

   const handleFilterStatus = e => {
      setFilterStatus(e.target.value);
      dispatch(filtersSlice.actions.statusFilterChange(e.target.value));
   };

   const handleFilterPriority = e => {
      setFilterPriority(e);
      dispatch(filtersSlice.actions.filterPriorityChange(e));
   };

   return (
      <Row justify="center">
         <Col span={24}>
            <Typography.Paragraph
               style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
            >
               Search
            </Typography.Paragraph>
            <Search
               value={inputSearch}
               onChange={handleInputSearch}
               placeholder="input search text"
            />
         </Col>
         <Col sm={24}>
            <Typography.Paragraph
               style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
            >
               Filter By Status
            </Typography.Paragraph>
            <Radio.Group onChange={handleFilterStatus} value={filterStatus}>
               <Radio value="All">All</Radio>
               <Radio value="Completed">Completed</Radio>
               <Radio value="Todo">To do</Radio>
            </Radio.Group>
         </Col>
         <Col sm={24}>
            <Typography.Paragraph
               style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
            >
               Filter By Priority
            </Typography.Paragraph>
            <Select
               value={filterPriority}
               onChange={handleFilterPriority}
               mode="multiple"
               allowClear
               placeholder="Please select"
               style={{ width: '100%' }}
            >
               <Select.Option value="High" label="High">
                  <Tag color="red">High</Tag>
               </Select.Option>
               <Select.Option value="Medium" label="Medium">
                  <Tag color="blue">Medium</Tag>
               </Select.Option>
               <Select.Option value="Low" label="Low">
                  <Tag color="gray">Low</Tag>
               </Select.Option>
            </Select>
         </Col>
      </Row>
   );
}
