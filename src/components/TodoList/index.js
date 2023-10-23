import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';

import { v4 as uuidv4 } from 'uuid';
import { useRef, useState } from 'react';
import { todoReaminingSelector } from '../../redux/selector';
import { todoListSlice } from './todoListSlice';

export default function TodoList() {
   const [todoName, setTodoName] = useState('');
   const [priority, setPriority] = useState('Medium');
   const todoList = useSelector(todoReaminingSelector);

   const todoNameRef = useRef();

   //dispatch
   const dispatch = useDispatch();

   const handleInputChange = e => {
      setTodoName(e.target.value);
   };

   const handlePriorityChange = value => {
      setPriority(value);
   };

   const handleAddBtnClick = () => {
      dispatch(
         todoListSlice.actions.addTodo({
            id: uuidv4(),
            name: todoName,
            priority: priority,
            completed: false,
         }),
      );
      setTodoName('');
      setPriority('Medium');
      todoNameRef.current.focus();
   };

   return (
      <Row style={{ height: 'calc(100% - 40px)' }}>
         <Col
            span={24}
            style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}
         >
            {todoList.map(todo => (
               <Todo
                  key={todo.id}
                  id={todo.id}
                  name={todo.name}
                  priority={todo.priority}
                  completed={todo.completed}
               />
            ))}
         </Col>
         <Col span={24}>
            <Input.Group style={{ display: 'flex' }} compact>
               <Input
                  ref={todoNameRef}
                  value={todoName}
                  onChange={handleInputChange}
               />
               <Select
                  value={priority}
                  onChange={handlePriorityChange}
                  defaultValue="Medium"
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
               <Button
                  onClick={handleAddBtnClick}
                  className="text-black bg-blue-300"
                  type="primary"
               >
                  Add
               </Button>
            </Input.Group>
         </Col>
      </Row>
   );
}
