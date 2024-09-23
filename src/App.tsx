import { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import Tooltip from './components/Tooltip/Tooltip';
import { Form, Form2 } from './examples/forwardRef';
import ModalButton from './components/Modal/ModalButton';

function App() {
   return (
      <>
         {/* <Button before={<>재밌는 거</>}>
            <div>반갑습니다</div>
         </Button>
         <Form></Form>
         <Form2></Form2>
         <Tooltip content="툴팁입니다!" /> */}
         <ModalButton modalContents="안녕하세요. 모달이에요." />
      </>
   );
}

export default App;
