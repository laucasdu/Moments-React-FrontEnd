import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { momentServices } from '../../services/momentServices'
import {
  Form,
  Input,
  BtEdit,
  CtForm,
  BtCancel,
  InputDescription,
  CtBtForm,

} from "./FormMoment.styled";

function FormMoment() {

    const [newMoment, setNewMoment] = useState({});

    let navigate = useNavigate();


    const onInputChange = (e) => {
      setNewMoment({ ...newMoment, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      createMoment(newMoment);
      navigate('/', {replace: true});
    };

    const createMoment = (data) => {
      momentServices.createMoment(data).then((res) => {
      });
    }

    const handleReset = () => {
      navigate('/', {replace: true});
    }


  return (

        <>
            <CtForm>
            <Form onSubmit={handleSubmit}>
                  <Input
                    onChange={onInputChange}
                    value={newMoment.title}
                    name="title"
                    type="text"
                    placeholder="Title..."
                  ></Input>
                  <Input
                    onChange={onInputChange}
                    value={newMoment.imgUrl}
                    name="imgUrl"
                    type="url"
                    placeholder="Paste Img url here..."
                  ></Input>
                  <InputDescription
                    onChange={onInputChange}
                    value={newMoment.description}
                    name="description"
                    placeholder="Text description..."
                  ></InputDescription>
                  <CtBtForm>
                    <BtEdit type="submit">Submit</BtEdit>
                    <BtCancel type="reset" onClick={handleReset}>Cancel</BtCancel>
                  </CtBtForm>
                </Form>
                </CtForm>
            </>
          )
    };
  

export default FormMoment
