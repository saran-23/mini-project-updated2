import React, { useState} from 'react';
import {
    Select,
    Stack,
    Input,
    NumberInput, 
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper
 } from '@chakra-ui/react';


const InputComponent = () => {
    
    const [inputValue, setInputValue] = React.useState("");
    const onChangeHandler = event => {
       setInputValue(event.target.value);
    };
    return (
        <div >
            <Stack shouldWrapChildren direction='row'>
            <Select placeholder='Select Line'size='md' >
                {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((address, key) => (
                    <option key={key} value={key}>
                        {address}
                    </option>
                )
                )
                }
            </Select>
                            <Input
                type="text"
                name="name"
                onChange={onChangeHandler}
                value={inputValue} 
                placeholder= 'Select Item Code' size='md'/>

                <NumberInput defaultValue={1} min={1} >
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
                </NumberInput>
          </Stack>
        </div>
    )
                };
export default InputComponent;



// import { Select } from '@chakra-ui/react';
// import { Textarea } from '@chakra-ui/react'

// import './scan.css';
// const Input = () => {
//     return(
        
//         <div >
            
// <Select placeholder='Select option '>
//   <option value='option1 '> 1</option>
//   <option value='option2'> 2</option>
//   <option value='option3'> 3</option>
//   <option value='option1 '> 4</option>
//   <option value='option2'> 5</option>
//   <option value='option3'> 6</option>
//   <option value='option1 '> 7</option>
//   <option value='option2'> 8</option>
//   <option value='option3'> 9</option>
//   <option value='option1 '> 10</option>
//   <option value='option2'> 11</option>
//   <option value='option3'> 12</option>
//   <option value='option1 '> 13</option>

// </Select>

//     <Textarea placeholder='Scan ItemCode' />
//         </div>)
// }
// export default Input;


































