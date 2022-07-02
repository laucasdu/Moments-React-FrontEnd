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
  CtButton,
  CtTxt,
  CtTitlePrincipal,
  TxtPrincipal

} from "./FormMoment.styled";

function FormMoment() {

  const [newMoment, setNewMoment] = useState({});

    let navigate = useNavigate();

    const onInputChange = (e) => {
      setNewMoment({ ...newMoment, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
        createMoment(newMoment)
          navigate('/', {replace: true});
    };

    const handleReset = () => {
      navigate('/', {replace: true});
    }

    const createMoment = (data) => {
      momentServices.createMoment(data).then((res) => {
      });
    }



  return (

        <>
            <CtForm>
            <Form onSubmit={handleSubmit}>
              <CtTitlePrincipal> 
            <TxtPrincipal>CREATE OF NEW MOMENT</TxtPrincipal>
            </CtTitlePrincipal>
              <CtTxt>Title</CtTxt>
                  <Input
                    onChange={onInputChange}
                    value={newMoment.title}
                    name="title"
                    type="text"
                    placeholder="Title..."
                  ></Input>
                <CtTxt>Imatge</CtTxt>
                  <Input
                    onChange={onInputChange}
                    value={newMoment.imgUrl}
                    name="imgUrl"
                    type="url"
                    placeholder="Paste Img url here..."
                  ></Input>
                <CtTxt>Description</CtTxt>
                  <InputDescription
                    onChange={onInputChange}
                    value={newMoment.description}
                    name="description"
                    placeholder="Text description..."
                  ></InputDescription>
                  <CtButton>
                    <BtEdit type="submit">SUBMIT</BtEdit>
                    <BtCancel type="reset" onClick={handleReset}>CANCEL</BtCancel>
                  </CtButton>
                </Form>
                </CtForm>
            </>
          )
    }
  
  

export default FormMoment
