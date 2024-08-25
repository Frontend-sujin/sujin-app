import './App.css';
import Button from './components/Button/Button';
import { Form, Form2 } from './examples/forwardRef';

function App() {
   return (
      <>
         <Button before={<>재밌는 거</>}>
            <div>반갑습니다</div>
         </Button>
         <Form></Form>
         <Form2></Form2>
      </>
   );
}

export default App;
